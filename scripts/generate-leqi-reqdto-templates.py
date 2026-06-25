#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DOCS_DIR = Path("/Users/gepeng/Downloads/文档/乐企能力文档20260105")
SNAPSHOT_PATH = ROOT / "src" / "leqi-api-snapshot.ts"
OUTPUT_PATH = ROOT / "src" / "leqi-reqdto-templates.ts"
WORD_NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}


@dataclass
class WordItem:
    kind: str
    value: str | list[list[str]]


@dataclass
class InterfaceRow:
    index: int
    name: str
    server_code: str


@dataclass
class ParsedDoc:
    path: Path
    relative_path: str
    ability_code: str | None
    items: list[WordItem]
    interface_table_index: int | None
    interfaces: dict[str, InterfaceRow]


def cell_text(element: ET.Element) -> str:
    return "".join(node.text or "" for node in element.findall(".//w:t", WORD_NS)).strip()


def table_rows(table: ET.Element) -> list[list[str]]:
    rows: list[list[str]] = []
    for tr in table.findall(".//w:tr", WORD_NS):
        cells = [cell_text(tc) for tc in tr.findall("./w:tc", WORD_NS)]
        if any(cells):
            rows.append(cells)
    return rows


def parse_docx(path: Path, docs_dir: Path) -> ParsedDoc:
    with zipfile.ZipFile(path) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))

    items: list[WordItem] = []
    body = root.find("w:body", WORD_NS)
    if body is None:
        raise ValueError(f"missing word body: {path}")

    for child in body:
        tag = child.tag.rsplit("}", 1)[-1]
        if tag == "p":
            text = cell_text(child)
            if text:
                items.append(WordItem("p", text))
        elif tag == "tbl":
            items.append(WordItem("tbl", table_rows(child)))

    ability_code = None
    interface_table_index = None
    interfaces: dict[str, InterfaceRow] = {}

    for index, item in enumerate(items):
        if item.kind != "tbl":
            continue
        rows = item.value
        assert isinstance(rows, list)
        for row in rows:
            if len(row) >= 2 and normalize_header(row[0]) == "能力编码":
                ability_code = row[1].strip()
        if rows and is_interface_table(rows):
            interface_table_index = index
            for row in rows[1:]:
                if len(row) < 3:
                    continue
                try:
                    service_index = int(re.sub(r"\D", "", row[0]))
                except ValueError:
                    continue
                server_code = row[2].strip()
                if server_code:
                    interfaces[server_code] = InterfaceRow(
                        index=service_index,
                        name=row[1].strip(),
                        server_code=server_code,
                    )

    return ParsedDoc(
        path=path,
        relative_path=str(path.relative_to(docs_dir)),
        ability_code=ability_code,
        items=items,
        interface_table_index=interface_table_index,
        interfaces=interfaces,
    )


def normalize_header(value: str) -> str:
    return re.sub(r"\s+", "", value)


def is_interface_table(rows: list[list[str]]) -> bool:
    if not rows:
        return False
    header = [normalize_header(cell) for cell in rows[0]]
    return len(header) >= 3 and header[0] == "序号" and "接口名称" in header[1] and "服务编码" in header[2]


def is_param_table(rows: list[list[str]]) -> bool:
    if not rows:
        return False
    header = [normalize_header(cell) for cell in rows[0]]
    return "数据项标识" in header and "数据项名称" in header


def load_api_snapshot() -> list[dict[str, Any]]:
    source = SNAPSHOT_PATH.read_text(encoding="utf-8")
    match = re.search(r"export const LEQI_API_SNAPSHOT = (\[.*\]) as const", source, re.S)
    if not match:
        raise ValueError("cannot find LEQI_API_SNAPSHOT")
    return json.loads(match.group(1))


def find_section(doc: ParsedDoc, interface: InterfaceRow) -> tuple[int, int] | None:
    start_after = doc.interface_table_index or 0
    section_pattern = re.compile(rf"^{interface.index}\s*[.．](?!\d)\s*")
    named_section_pattern = re.compile(rf"^\d+\s*[.．]\s*{re.escape(interface.name)}\s*$")

    start = None
    for index, item in enumerate(doc.items[start_after + 1 :], start_after + 1):
        if item.kind != "p":
            continue
        text = str(item.value).strip()
        if named_section_pattern.match(text):
            start = index
            break

    if start is None:
        for index, item in enumerate(doc.items[start_after + 1 :], start_after + 1):
            if item.kind != "p":
                continue
            text = str(item.value).strip()
            if section_pattern.match(text) and interface.name in text and len(text) <= len(interface.name) + 12:
                start = index
                break
            if section_pattern.match(text) and len(text) <= 80:
                start = index
                break

    if start is None:
        return None

    end = len(doc.items)
    for index, item in enumerate(doc.items[start + 1 :], start + 1):
        if item.kind != "p":
            continue
        text = str(item.value).strip()
        match = re.match(r"^(\d+)\s*[.．](?!\d)\s*", text)
        if match and len(text) <= 80:
            end = index
            break

    return start, end


def header_index(header: list[str], *names: str) -> int | None:
    normalized = [normalize_header(cell) for cell in header]
    for name in names:
        if name in normalized:
            return normalized.index(name)
    return None


def collect_request_fields(doc: ParsedDoc, section: tuple[int, int]) -> list[dict[str, str]]:
    start, end = section
    fields: list[dict[str, str]] = []
    in_request = False

    for item in doc.items[start:end]:
        if item.kind == "p":
            text = str(item.value)
            if "请求参数" in text:
                in_request = True
                continue
            if in_request and ("请求报文示例" in text or "返回参数" in text or "响应参数" in text):
                in_request = False
                continue
        if not in_request or item.kind != "tbl":
            continue

        rows = item.value
        assert isinstance(rows, list)
        if not is_param_table(rows):
            continue
        header = rows[0]
        key_i = header_index(header, "数据项标识")
        name_i = header_index(header, "数据项名称")
        type_i = header_index(header, "字段类型", "数据类型")
        length_i = header_index(header, "长度")
        required_i = header_index(header, "必须", "必填", "是否必填")
        desc_i = header_index(header, "说明")

        for row in rows[1:]:
            key = read_cell(row, key_i).strip()
            if not key or key == "数据项标识":
                continue
            fields.append(
                {
                    "key": key,
                    "name": read_cell(row, name_i).strip(),
                    "type": read_cell(row, type_i).strip(),
                    "length": read_cell(row, length_i).strip(),
                    "required": read_cell(row, required_i).strip(),
                    "description": read_cell(row, desc_i).strip(),
                }
            )
    return dedupe_fields(fields)


def read_cell(row: list[str], index: int | None) -> str:
    if index is None or index >= len(row):
        return ""
    return row[index]


def dedupe_fields(fields: list[dict[str, str]]) -> list[dict[str, str]]:
    seen: set[tuple[str, str]] = set()
    result: list[dict[str, str]] = []
    for field in fields:
        identity = (field["key"], field["name"])
        if identity in seen:
            continue
        seen.add(identity)
        result.append(field)
    return result


def collect_request_examples(doc: ParsedDoc, section: tuple[int, int]) -> list[str]:
    start, end = section
    examples: list[str] = []
    in_example = False

    for item in doc.items[start:end]:
        if item.kind == "p":
            text = str(item.value)
            if "请求报文示例" in text or "请求示例" in text:
                in_example = True
                continue
            if in_example and ("返回参数" in text or "响应参数" in text):
                in_example = False
                continue
            if in_example and looks_like_json(text):
                examples.append(text)
        elif in_example and item.kind == "tbl":
            rows = item.value
            assert isinstance(rows, list)
            for row in rows:
                text = "".join(row).strip()
                if looks_like_json(text):
                    examples.append(text)

    return examples


def looks_like_json(value: str) -> bool:
    stripped = value.strip()
    return stripped.startswith("{") or stripped.startswith("[")


def parse_jsonish(value: str) -> Any | None:
    candidate = extract_jsonish(value)
    if not candidate:
        return None
    replacements = {
        "\u00a0": " ",
        "\u3000": " ",
        "，": ",",
        "：": ":",
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
    }
    for old, new in replacements.items():
        candidate = candidate.replace(old, new)
    candidate = re.sub(r",\s*([}\]])", r"\1", candidate)
    try:
        return json.loads(candidate)
    except json.JSONDecodeError:
        return None


def extract_jsonish(value: str) -> str | None:
    text = value.strip()
    starts = [(text.find("{"), "{", "}"), (text.find("["), "[", "]")]
    starts = [entry for entry in starts if entry[0] >= 0]
    if not starts:
        return None
    start, opener, closer = min(starts, key=lambda entry: entry[0])
    end = text.rfind(closer)
    if end <= start:
        return None
    return text[start : end + 1]


def build_template_from_fields(fields: list[dict[str, str]]) -> dict[str, Any]:
    return {field["key"]: default_value_for_field(field) for field in fields}


def blank_template(value: Any, fields: list[dict[str, str]]) -> Any:
    field_map = {field["key"]: field for field in fields}

    def walk(node: Any, key: str | None = None) -> Any:
        if isinstance(node, dict):
            result: dict[str, Any] = {}
            for child_key, child_value in node.items():
                clean_key = str(child_key).strip()
                result[clean_key] = walk(child_value, clean_key)
            return result
        if isinstance(node, list):
            return [walk(node[0])] if node else []
        if key and key in field_map:
            return default_value_for_field(field_map[key])
        if isinstance(node, bool):
            return False
        if isinstance(node, (int, float)):
            return 0
        return ""

    return walk(value)


def default_value_for_field(field: dict[str, str]) -> Any:
    field_type = field.get("type", "").lower()
    if any(token in field_type for token in ("number", "int", "decimal", "numeric", "double", "float")):
        return 0
    if "bool" in field_type:
        return False
    return ""


def build_templates(docs_dir: Path) -> list[dict[str, Any]]:
    apis = load_api_snapshot()
    docs = [parse_docx(path, docs_dir) for path in sorted(docs_dir.rglob("*.docx"))]
    docs_by_ability: dict[str, list[ParsedDoc]] = {}
    for doc in docs:
        if doc.ability_code:
            docs_by_ability.setdefault(doc.ability_code, []).append(doc)

    templates: list[dict[str, Any]] = []
    for api in apis:
        ability_code = api.get("abilityCode")
        server_code = api.get("serverCode")
        if not ability_code or not server_code:
            continue
        candidates = docs_by_ability.get(ability_code, [])
        if not candidates:
            candidates = [doc for doc in docs if server_code in doc.interfaces]

        for doc in candidates:
            interface = doc.interfaces.get(server_code)
            if not interface:
                continue
            section = find_section(doc, interface)
            if not section:
                continue
            fields = collect_request_fields(doc, section)
            examples = collect_request_examples(doc, section)
            parsed_examples = [parsed for example in examples if (parsed := parse_jsonish(example)) is not None]
            raw_template = parsed_examples[0] if parsed_examples else build_template_from_fields(fields)
            template = blank_template(raw_template, fields)
            if not fields and template in ({}, []):
                continue
            section_title = str(doc.items[section[0]].value)
            templates.append(
                {
                    "apiIdentity": api["apiIdentity"],
                    "apiName": api["apiName"],
                    "abilityCode": ability_code,
                    "serverCode": server_code,
                    "sourceDoc": doc.relative_path,
                    "sectionTitle": section_title,
                    "fields": fields,
                    "template": template,
                }
            )
            break

    return templates


def write_output(templates: list[dict[str, Any]]) -> None:
    payload = json.dumps(templates, ensure_ascii=False, indent=2)
    output = (
        'import type { LeqiReqDtoTemplate } from "./types.js";\n\n'
        "// Generated by scripts/generate-leqi-reqdto-templates.py.\n"
        "// Source Word documents are intentionally not bundled with the package.\n"
        f"export const LEQI_REQDTO_TEMPLATES = {payload} as const satisfies readonly LeqiReqDtoTemplate[];\n"
    )
    OUTPUT_PATH.write_text(output, encoding="utf-8")


def main() -> int:
    docs_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_DOCS_DIR
    if not docs_dir.exists():
        print(f"docs dir does not exist: {docs_dir}", file=sys.stderr)
        return 1
    templates = build_templates(docs_dir)
    write_output(templates)
    print(f"generated {len(templates)} templates -> {OUTPUT_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
