export declare const LEQI_REQDTO_TEMPLATES: readonly [{
    readonly apiIdentity: "100000001";
    readonly apiName: "全电发票上传接口";
    readonly abilityCode: "202007";
    readonly serverCode: "QDFPSC";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "10.数电票上传";
    readonly fields: [{
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzfpbz";
        readonly name: "蓝字发票标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "0：蓝字发票1：红字发票";
    }, {
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "直连单位ID";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：数电专02：数电普";
    }, {
        readonly key: "gmfzrrbz";
        readonly name: "购买方自然人标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：购买方是自然人N：购买方非自然人";
    }, {
        readonly key: "tdys";
        readonly name: "特定要素";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非特定要素";
    }, {
        readonly key: "qyDm";
        readonly name: "区域代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "cezslxDm";
        readonly name: "差额征税类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非差额发票01：全额开票02：差额开票";
    }, {
        readonly key: "sgfplxDm";
        readonly name: "收购发票类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非收购发票01：农产品收购发票02：光伏收购发票03：二手车收购发票";
    }, {
        readonly key: "ckywsyzcDm";
        readonly name: "出口业务适用政策代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非出口业务01：退税政策02：免税政策03：征税政策";
    }, {
        readonly key: "zzsjzjtDm";
        readonly name: "增值税即征即退代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非增值税即征即退01：软件产品发票02：资源综合利用产品发票03：管道运输服务发票04：有形动产融资租赁服务05：有形动产融资性售后回租服务发票06：新型墙体材料发票07：风力发电产品发票08：光伏发电产品发票09：动漫软件产品发票10：飞机维修劳务发票11：黄金发票12：铂金发票";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "（销售方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "(销售方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdz";
        readonly name: "销售方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfdh";
        readonly name: "销售方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfkhh";
        readonly name: "销售方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzh";
        readonly name: "销售方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "（购买方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "开具数电专票时，必填";
    }, {
        readonly key: "gmfmc";
        readonly name: "(购买方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "zrrzjlxDm";
        readonly name: "自然人证件类型";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "201:居民身份证；208：外国护照；210：港澳居民来往内地通行证;213：台湾居民来往大陆通行证;227：中国护照;233：外国人永久居留身份证;237：中华人民共和国港澳居民居住证;238：中华人民共和国台湾居民居住证；";
    }, {
        readonly key: "zrrzjhm";
        readonly name: "自然人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zrrgjDm";
        readonly name: "自然人国籍";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "码值见附件1国家代码表";
    }, {
        readonly key: "gmfdz";
        readonly name: "购买方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfdh";
        readonly name: "购买方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfkhh";
        readonly name: "购买方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfzh";
        readonly name: "购买方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbr";
        readonly name: "购买方经办人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jbrsfzjhm";
        readonly name: "购买方经办人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jbrsfzjzlDm";
        readonly name: "购买方经办人证件种类代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "201:居民身份证；208：外国护照；210：港澳居民来往内地通行证;213：台湾居民来往大陆通行证;227：中国护照;233：外国人永久居留身份证;237：中华人民共和国港澳居民居住证;238：中华人民共和国台湾居民居住证；";
    }, {
        readonly key: "jbrgjhdqDm";
        readonly name: "经办人国家或地区代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "码值见附件1国家代码表";
    }, {
        readonly key: "jbrnsrsbh";
        readonly name: "经办人纳税人识别号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbrlxdh";
        readonly name: "购买方经办人联系电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hjje";
        readonly name: "合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hjse";
        readonly name: "合计税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "jshj";
        readonly name: "价税合计";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "skyhmc";
        readonly name: "收款银行名称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skyhzh";
        readonly name: "收款银行账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jsfs";
        readonly name: "结算方式";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：现金02：银行转账03：票据04：第三方支付05：预付卡99：其他";
    }, {
        readonly key: "ysxwfsd";
        readonly name: "应税行为发生地";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "101：组织机构代码证102：营业执照103：税务登记证199：其他单位证件201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证220：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "dylzfphm";
        readonly name: "对应蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传；如果红冲的是税控发票，对应蓝字发票号码的填写规则为税控发票的发票代码+发票号码。";
    }, {
        readonly key: "hzqrxxdbh";
        readonly name: "红字确认信息单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "hzqrduuid";
        readonly name: "红字确认单uuid";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "bz";
        readonly name: "备注";
        readonly type: "varchar";
        readonly length: "450";
        readonly required: "否";
        readonly description: "蓝票最长450位，红票最长382位。";
    }, {
        readonly key: "ip";
        readonly name: "服务器地址";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "macdz";
        readonly name: "mac地址";
        readonly type: "char";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "cpuid";
        readonly name: "CPU序列号";
        readonly type: "char";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zbxlh";
        readonly name: "主板序列号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "是";
        readonly description: "格式：yyyy-MM-dd HH:mm:ss";
    }, {
        readonly key: "sfzsxsfyhzhbq";
        readonly name: "是否展示销售方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfyhzhbq";
        readonly name: "是否展示购买方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsxsfdzdh";
        readonly name: "是否展示销售方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfdzdh";
        readonly name: "是否展示购买方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "skrxm";
        readonly name: "收款人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fhrxm";
        readonly name: "复核人姓名";
        readonly type: "varchar";
        readonly length: "75";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fpkjfsDm";
        readonly name: "发票开具方式代码";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "4：第三方平台开票（乐企联用、他用开票）5：自建平台开票（乐企自用开票）";
    }, {
        readonly key: "lqkpmsDm";
        readonly name: "乐企开票模式代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：乐企自用支付即开票；02：乐企联用支付即开票";
    }, {
        readonly key: "zfqdDm";
        readonly name: "支付渠道";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "001：现金；002：银行转账；003：票据；004：借记卡；005：信用卡；006：购物卡/券；007：优惠券；008：商场积分；009：支付宝；010：微信支付；011：云闪付；012：Apple Pay；013：Samsung Pay ；099：其他";
    }, {
        readonly key: "jydh";
        readonly name: "交易单号";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "mtpzxx";
        readonly name: "煤炭品质信息";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "每千克煤炭发热量：XXXX千卡、干基全硫：XX.XX%、干燥无灰基挥发分：XX.XX%";
    }, {
        readonly key: "sszyfwxybh";
        readonly name: "涉税专业服务协议编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sfkjsszyfwfppm";
        readonly name: "是否开具涉税专业服务发票品目";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：是N：否";
    }, {
        readonly key: "mxxh";
        readonly name: "明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "dylzfpmxxh";
        readonly name: "对应蓝字发票明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "红票必传";
    }, {
        readonly key: "xmmc";
        readonly name: "项目名称";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "拼装规则：“*商品服务简称（spfwjc）*”+“项目名称（xmmc）”";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ggxh";
        readonly name: "规格型号";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "dw";
        readonly name: "单位";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sl";
        readonly name: "数量";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“单价”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "dj";
        readonly name: "单价";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“数量”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "je";
        readonly name: "金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "slv";
        readonly name: "增值税税率/征收率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18，2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hsje";
        readonly name: "含税金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kce";
        readonly name: "扣除额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fphxz";
        readonly name: "发票行性质";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "00：正常行01：折扣行02：被折扣行";
    }, {
        readonly key: "yhzcbs";
        readonly name: "优惠政策标识";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：简易征收02：稀土产品03：免税04：不征税05：先征后退06：100%先征后退07：50%先征后退08：按3%简易征收09：按5%简易征收10：按5%简易征收减按1.5%计征11：即征即退30%12：即征即退50%13：即征即退70%14：即征即退100%15：超税负3%即征即退16：超税负8%即征即退17：超税负12%即征即退18：超税负6%即征即退";
    }, {
        readonly key: "mtzl";
        readonly name: "煤炭种类";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "0100：政府保供煤0201：长协煤-协议期不足半年0202：长协煤-协议期在半年至一年之间0203：长协煤-协议期在一年至两年之间0204：长协煤-协议期在两年以上0300：市场煤";
    }, {
        readonly key: "fjysmc";
        readonly name: "附加要素名称";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjyslx";
        readonly name: "附加要素类型";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjysz";
        readonly name: "附加要素值";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xh";
        readonly name: "序号";
        readonly type: "number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "pzlx";
        readonly name: "凭证类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：数电票02：增值税专用发票03：增值税普通发票04：营业税发票05：财政票据06：法院裁决书07：契税完税凭证08：其他发票类09：其他扣除凭证";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "varchar";
        readonly length: "12";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cepzhm";
        readonly name: "差额凭证号码";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kjrq";
        readonly name: "开具日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式必须为“yyyy-MM-dd”";
    }, {
        readonly key: "pzhjje";
        readonly name: "凭证合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "bckcje";
        readonly name: "本次扣除金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "该字段需要小于等于凭证合计金额。";
    }];
    readonly template: [{
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly ptbh: "";
        readonly fppz: "";
        readonly gmfzrrbz: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly cezslxDm: "";
        readonly sgfplxDm: "";
        readonly ckywsyzcDm: "";
        readonly zzsjzjtDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfnsrsbh: "";
        readonly gmfmc: "";
        readonly zrrzjlxDm: "";
        readonly zrrzjhm: "";
        readonly zrrgjDm: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly jbrsfzjhm: "";
        readonly jbrsfzjzlDm: "";
        readonly jbrgjhdqDm: "";
        readonly jbrnsrsbh: "";
        readonly gmfjbrlxdh: "";
        readonly hjje: 0;
        readonly hjse: 0;
        readonly jshj: 0;
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly kprq: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly sfzsxsfdzdh: "";
        readonly sfzsgmfdzdh: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly lqkpmsDm: "";
        readonly zfxxList: [{
            readonly zfqdDm: "";
            readonly jydh: "";
        }];
        readonly mtpzxx: "";
        readonly sszyfwxybh: "";
        readonly sfkjsszyfwfppm: "";
        readonly fpmxList: [{
            readonly mxxh: 0;
            readonly dylzfpmxxh: 0;
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: 0;
            readonly slv: 0;
            readonly se: 0;
            readonly hsje: 0;
            readonly kce: 0;
            readonly sphfwssflhbbm: "";
            readonly fphxz: "";
            readonly yhzcbs: "";
            readonly mtzl: "";
        }];
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
        readonly cekcList: [{
            readonly xh: 0;
            readonly pzlx: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly cepzhm: "";
            readonly kjrq: "";
            readonly pzhjje: 0;
            readonly bckcje: 0;
            readonly bz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000101";
    readonly apiName: "全电发票（成品油）上传接口";
    readonly abilityCode: "202055";
    readonly serverCode: "QDFPSC_CPY";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（成品油）开票能力说明文档-V2.012.docx";
    readonly sectionTitle: "15.成品油发票上传";
    readonly fields: [{
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzfpbz";
        readonly name: "蓝字发票标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "0：蓝字发票1：红字发票";
    }, {
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "直连单位ID";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：数字化电子专02：数字化电子普";
    }, {
        readonly key: "gmfzrrbz";
        readonly name: "购买方自然人标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：购买方是自然人N：购买方非自然人";
    }, {
        readonly key: "tdys";
        readonly name: "特定要素";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：成品油发票";
    }, {
        readonly key: "qyDm";
        readonly name: "区域代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "cezslxDm";
        readonly name: "差额征税类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非差额发票01：全额开票02：差额开票";
    }, {
        readonly key: "sgfplxDm";
        readonly name: "收购发票类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非收购发票01：农产品收购发票02：光伏收购发票03：二手车收购发票";
    }, {
        readonly key: "ckywsyzcDm";
        readonly name: "出口业务适用政策代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非出口业务01：退税政策02：免税政策03：征税政策";
    }, {
        readonly key: "zzsjzjtDm";
        readonly name: "增值税即征即退代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非增值税即征即退01：软件产品发票02：资源综合利用产品发票03：管道运输服务发票04：有形动产融资租赁服务05：有形动产融资性售后回租服务发票06：新型墙体材料发票07：风力发电产品发票08：光伏发电产品发票09：动漫软件产品发票10：飞机维修劳务发票11：黄金发票12：铂金发票";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "（销售方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "(销售方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdz";
        readonly name: "销售方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfdh";
        readonly name: "销售方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfkhh";
        readonly name: "销售方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzh";
        readonly name: "销售方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "（购买方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "开具数字化电子专票时，必填";
    }, {
        readonly key: "zrrzjlxDm";
        readonly name: "（购买方）自然人证件类型";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "201:居民身份证；208：外国护照；210：港澳居民来往内地通行证;213：台湾居民来往大陆通行证;227：中国护照;233：外国人永久居留身份证;237：中华人民共和国港澳居民居住证;238：中华人民共和国台湾居民居住证；";
    }, {
        readonly key: "zrrzjhm";
        readonly name: "（购买方）自然人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zrrgjDm";
        readonly name: "（购买方）自然人国籍代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfmc";
        readonly name: "(购买方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfdz";
        readonly name: "购买方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfdh";
        readonly name: "购买方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfkhh";
        readonly name: "购买方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfzh";
        readonly name: "购买方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbr";
        readonly name: "购买方经办人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jbrsfzjhm";
        readonly name: "购买方经办人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbrlxdh";
        readonly name: "购买方经办人联系电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hjje";
        readonly name: "合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hjse";
        readonly name: "合计税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "jshj";
        readonly name: "价税合计";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "skyhmc";
        readonly name: "收款银行名称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skyhzh";
        readonly name: "收款银行账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jsfs";
        readonly name: "结算方式";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：现金02：银行转账03：票据04：第三方支付05：预付卡99：其他";
    }, {
        readonly key: "ysxwfsd";
        readonly name: "应税行为发生地";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "101：组织机构代码证102：营业执照103：税务登记证199：其他单位证件201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证226：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "dylzfphm";
        readonly name: "对应蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传；如果红冲的是税控发票，对应蓝字发票号码的填写规则为税控发票的发票代码+发票号码。";
    }, {
        readonly key: "hzqrxxdbh";
        readonly name: "红字确认信息单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "hzqrduuid";
        readonly name: "红字确认单uuid";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "bz";
        readonly name: "备注";
        readonly type: "varchar";
        readonly length: "450";
        readonly required: "否";
        readonly description: "蓝票最长450位，红票最长382位。";
    }, {
        readonly key: "ip";
        readonly name: "服务器地址";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "macdz";
        readonly name: "mac地址";
        readonly type: "char";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "cpuid";
        readonly name: "CPU序列号";
        readonly type: "char";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zbxlh";
        readonly name: "主板序列号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "是";
        readonly description: "格式：yyyy-MM-dd HH:mm:ss";
    }, {
        readonly key: "sfzsxsfyhzhbq";
        readonly name: "是否展示销售方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsgmfyhzhbq";
        readonly name: "是否展示购买方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsxsfdzdh";
        readonly name: "是否展示销售方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfdzdh";
        readonly name: "是否展示购买方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "skrxm";
        readonly name: "收款人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fhrxm";
        readonly name: "复核人姓名";
        readonly type: "varchar";
        readonly length: "75";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fpkjfsDm";
        readonly name: "发票开具方式代码";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "4：第三方平台开票（乐企联用、他用开票）5：自建平台开票（乐企自用开票）";
    }, {
        readonly key: "lqkpmsDm";
        readonly name: "乐企开票模式代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：乐企自用支付即开票；02：乐企联用支付即开票";
    }, {
        readonly key: "zfqdDm";
        readonly name: "支付渠道";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "001：现金；002：银行转账；003：票据；004：借记卡；005：信用卡；006：购物卡/券；007：优惠券；008：商场积分；009：支付宝；010：微信支付；011：云闪付；012：Apple Pay；013：Samsung Pay；099：其他";
    }, {
        readonly key: "jydh";
        readonly name: "交易单号";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "mxxh";
        readonly name: "明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "dylzfpmxxh";
        readonly name: "对应蓝字发票明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "红票必传";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "拼装规则：“*商品服务简称（spfwjc）*”+“项目名称（xmmc）”";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xmmc";
        readonly name: "项目名称";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ggxh";
        readonly name: "规格型号";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "dw";
        readonly name: "单位";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "只能是“吨”“升”两个选项，不允许修改和自定义";
    }, {
        readonly key: "sl";
        readonly name: "数量";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“单价”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "dj";
        readonly name: "单价";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“数量”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "je";
        readonly name: "金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "slv";
        readonly name: "增值税税率/征收率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18，2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hsje";
        readonly name: "含税金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kce";
        readonly name: "扣除额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fphxz";
        readonly name: "发票行性质";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "00：正常行01：折扣行02：被折扣行";
    }, {
        readonly key: "yhzcbs";
        readonly name: "优惠政策标识";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：简易征收02：稀土产品03：免税04：不征税05：先征后退06：100%先征后退07：50%先征后退08：按3%简易征收09：按5%简易征收10：按5%简易征收减按1.5%计征11：即征即退30%12：即征即退50%13：即征即退70%14：即征即退100%15：超税负3%即征即退16：超税负8%即征即退17：超税负12%即征即退18：超税负6%即征即退";
    }, {
        readonly key: "fjysmc";
        readonly name: "附加要素名称";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjyslx";
        readonly name: "附加要素类型";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjysz";
        readonly name: "附加要素值";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xh";
        readonly name: "序号";
        readonly type: "number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "pzlx";
        readonly name: "凭证类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：数电票02：增值税专用发票03：增值税普通发票04：营业税发票05：财政票据06：法院裁决书07：契税完税凭证08：其他发票类09：其他扣除凭证";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "varchar";
        readonly length: "12";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cepzhm";
        readonly name: "差额凭证号码";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kjrq";
        readonly name: "开具日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式必须为“yyyy-MM-dd”";
    }, {
        readonly key: "pzhjje";
        readonly name: "凭证合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "bckcje";
        readonly name: "本次扣除金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "该字段需要小于等于凭证合计金额。";
    }];
    readonly template: [{
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly ptbh: "";
        readonly fppz: "";
        readonly gmfzrrbz: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly cezslxDm: "";
        readonly sgfplxDm: "";
        readonly ckywsyzcDm: "";
        readonly zzsjzjtDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfnsrsbh: "";
        readonly zrrzjlxDm: "";
        readonly zrrzjhm: "";
        readonly zrrgjDm: "";
        readonly gmfmc: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly jbrsfzjhm: "";
        readonly gmfjbrlxdh: "";
        readonly hjje: 0;
        readonly hjse: 0;
        readonly jshj: 0;
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly kprq: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly sfzsxsfdzdh: "";
        readonly sfzsgmfdzdh: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly lqkpmsDm: "";
        readonly zfxxList: [{
            readonly zfqdDm: "";
            readonly jydh: "";
        }];
        readonly fpmxList: [{
            readonly mxxh: 0;
            readonly dylzfpmxxh: 0;
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: 0;
            readonly slv: 0;
            readonly se: 0;
            readonly hsje: 0;
            readonly kce: 0;
            readonly sphfwssflhbbm: "";
            readonly fphxz: "";
            readonly yhzcbs: "";
        }];
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
        readonly cekcList: [{
            readonly xh: 0;
            readonly pzlx: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly cepzhm: "";
            readonly kjrq: "";
            readonly pzhjje: 0;
            readonly bckcje: 0;
            readonly bz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000102";
    readonly apiName: "全电发票（稀土）上传接口";
    readonly abilityCode: "202049";
    readonly serverCode: "QDFPSC_XT";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（稀土）开票能力说明文档-V2.011.docx";
    readonly sectionTitle: "12.稀土发票上传";
    readonly fields: [{
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzfpbz";
        readonly name: "蓝字发票标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "0：蓝字发票1：红字发票";
    }, {
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "直连单位ID";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：数字化电子专票";
    }, {
        readonly key: "gmfzrrbz";
        readonly name: "购买方自然人标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：购买方是自然人N：购买方非自然人";
    }, {
        readonly key: "tdys";
        readonly name: "特定要素";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "02：稀土发票";
    }, {
        readonly key: "qyDm";
        readonly name: "区域代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "cezslxDm";
        readonly name: "差额征税类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非差额发票01：全额开票02：差额开票";
    }, {
        readonly key: "sgfplxDm";
        readonly name: "收购发票类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非收购发票01：农产品收购发票02：光伏收购发票03：二手车收购发票";
    }, {
        readonly key: "ckywsyzcDm";
        readonly name: "出口业务适用政策代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非出口业务01：退税政策02：免税政策03：征税政策";
    }, {
        readonly key: "zzsjzjtDm";
        readonly name: "增值税即征即退代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非增值税即征即退01：软件产品发票02：资源综合利用产品发票03：管道运输服务发票04：有形动产融资租赁服务05：有形动产融资性售后回租服务发票06：新型墙体材料发票07：风力发电产品发票08：光伏发电产品发票09：动漫软件产品发票10：飞机维修劳务发票11：黄金发票12：铂金发票";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "（销售方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "(销售方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdz";
        readonly name: "销售方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfdh";
        readonly name: "销售方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfkhh";
        readonly name: "销售方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzh";
        readonly name: "销售方账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "（购买方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfmc";
        readonly name: "(购买方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfdz";
        readonly name: "购买方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfdh";
        readonly name: "购买方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfkhh";
        readonly name: "购买方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfzh";
        readonly name: "购买方账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbr";
        readonly name: "购买方经办人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jbrsfzjhm";
        readonly name: "购买方经办人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbrlxdh";
        readonly name: "购买方经办人联系电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hjje";
        readonly name: "合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hjse";
        readonly name: "合计税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "jshj";
        readonly name: "价税合计";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "skyhmc";
        readonly name: "收款银行名称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skyhzh";
        readonly name: "收款银行账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jsfs";
        readonly name: "结算方式";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：现金02：银行转账03：票据04：第三方支付05：预付卡99：其他";
    }, {
        readonly key: "ysxwfsd";
        readonly name: "应税行为发生地";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "101：组织机构代码证102：营业执照103：税务登记证199：其他单位证件201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证226：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "dylzfphm";
        readonly name: "对应蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传；如果红冲的是税控发票，对应蓝字发票号码的填写规则为税控发票的发票代码+发票号码。";
    }, {
        readonly key: "hzqrxxdbh";
        readonly name: "红字确认信息单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "hzqrduuid";
        readonly name: "红字确认单uuid";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "bz";
        readonly name: "备注";
        readonly type: "varchar";
        readonly length: "450";
        readonly required: "否";
        readonly description: "蓝票最长450位，红票最长382位。";
    }, {
        readonly key: "ip";
        readonly name: "服务器地址";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "macdz";
        readonly name: "mac地址";
        readonly type: "char";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "cpuid";
        readonly name: "CPU序列号";
        readonly type: "char";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zbxlh";
        readonly name: "主板序列号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "是";
        readonly description: "格式：yyyy-MM-dd HH:mm:ss";
    }, {
        readonly key: "sfzsxsfyhzhbq";
        readonly name: "是否展示销售方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsgmfyhzhbq";
        readonly name: "是否展示购买方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsxsfdzdh";
        readonly name: "是否展示销售方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfdzdh";
        readonly name: "是否展示购买方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "skrxm";
        readonly name: "收款人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fhrxm";
        readonly name: "复核人姓名";
        readonly type: "varchar";
        readonly length: "75";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fpkjfsDm";
        readonly name: "发票开具方式代码";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "4：第三方平台开票（乐企联用、他用开票）5：自建平台开票（乐企自用开票）";
    }, {
        readonly key: "mxxh";
        readonly name: "明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "dylzfpmxxh";
        readonly name: "对应蓝字发票明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "红票必传";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "拼装规则：“*商品服务简称（spfwjc）*”+“项目名称（xmmc）”";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xmmc";
        readonly name: "项目名称";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ggxh";
        readonly name: "规格型号";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "dw";
        readonly name: "单位";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "正常行必填，只能是“公斤”或“吨”，折扣行可为空";
    }, {
        readonly key: "sl";
        readonly name: "数量";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "蓝票正常行必填，折扣行可为空";
    }, {
        readonly key: "dj";
        readonly name: "单价";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "蓝票正常行必填，折扣行可为空";
    }, {
        readonly key: "je";
        readonly name: "金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "slv";
        readonly name: "增值税税率/征收率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18，2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hsje";
        readonly name: "含税金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kce";
        readonly name: "扣除额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fphxz";
        readonly name: "发票行性质";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "00：正常行01：折扣行02：被折扣行";
    }, {
        readonly key: "yhzcbs";
        readonly name: "优惠政策标识";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：简易征收02：稀土产品03：免税04：不征税05：先征后退06：100%先征后退07：50%先征后退08：按3%简易征收09：按5%简易征收10：按5%简易征收减按1.5%计征11：即征即退30%12：即征即退50%13：即征即退70%14：即征即退100%15：超税负3%即征即退16：超税负8%即征即退17：超税负12%即征即退18：超税负6%即征即退";
    }, {
        readonly key: "fjysmc";
        readonly name: "附加要素名称";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjyslx";
        readonly name: "附加要素类型";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjysz";
        readonly name: "附加要素值";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xh";
        readonly name: "序号";
        readonly type: "number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "pzlx";
        readonly name: "凭证类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：数电票02：增值税专用发票03：增值税普通发票04：营业税发票05：财政票据06：法院裁决书07：契税完税凭证08：其他发票类09：其他扣除凭证";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "varchar";
        readonly length: "12";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cepzhm";
        readonly name: "差额凭证号码";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kjrq";
        readonly name: "开具日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式必须为“yyyy-MM-dd”";
    }, {
        readonly key: "pzhjje";
        readonly name: "凭证合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "bckcje";
        readonly name: "本次扣除金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "该字段需要小于等于凭证合计金额。";
    }];
    readonly template: [{
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly ptbh: "";
        readonly fppz: "";
        readonly gmfzrrbz: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly cezslxDm: "";
        readonly sgfplxDm: "";
        readonly ckywsyzcDm: "";
        readonly zzsjzjtDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfnsrsbh: "";
        readonly gmfmc: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly jbrsfzjhm: "";
        readonly gmfjbrlxdh: "";
        readonly hjje: 0;
        readonly hjse: 0;
        readonly jshj: 0;
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly kprq: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly sfzsxsfdzdh: "";
        readonly sfzsgmfdzdh: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly fpmxList: [{
            readonly mxxh: 0;
            readonly dylzfpmxxh: 0;
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: 0;
            readonly slv: 0;
            readonly se: 0;
            readonly hsje: 0;
            readonly kce: 0;
            readonly sphfwssflhbbm: "";
            readonly fphxz: "";
            readonly yhzcbs: "";
        }];
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
        readonly cekcList: [{
            readonly xh: 0;
            readonly pzlx: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly cepzhm: "";
            readonly kjrq: "";
            readonly pzhjje: 0;
            readonly bckcje: 0;
            readonly bz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000104";
    readonly apiName: "全电发票（货物运输服务）上传接口";
    readonly abilityCode: "202026";
    readonly serverCode: "HWYSFPSC";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（货物运输）开票能力说明文档-V3.011.docx";
    readonly sectionTitle: "12.货物运输服务发票上传";
    readonly fields: [{
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzfpbz";
        readonly name: "蓝字发票标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "0：蓝字发票1：红字发票";
    }, {
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "直连单位ID";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：数字化电子专02：数字化电子普";
    }, {
        readonly key: "gmfzrrbz";
        readonly name: "购买方自然人标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：购买方是自然人N：购买方非自然人";
    }, {
        readonly key: "tdys";
        readonly name: "特定要素";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "04：货物运输服务发票";
    }, {
        readonly key: "qyDm";
        readonly name: "区域代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "cezslxDm";
        readonly name: "差额征税类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非差额发票01：全额开票02：差额开票";
    }, {
        readonly key: "sgfplxDm";
        readonly name: "收购发票类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非收购发票01：农产品收购发票02：光伏收购发票03：二手车收购发票";
    }, {
        readonly key: "ckywsyzcDm";
        readonly name: "出口业务适用政策代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非出口业务01：退税政策02：免税政策03：征税政策";
    }, {
        readonly key: "zzsjzjtDm";
        readonly name: "增值税即征即退代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非增值税即征即退01：软件产品发票02：资源综合利用产品发票03：管道运输服务发票04：有形动产融资租赁服务05：有形动产融资性售后回租服务发票06：新型墙体材料发票07：风力发电产品发票08：光伏发电产品发票09：动漫软件产品发票10：飞机维修劳务发票11：黄金发票12：铂金发票";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "（销售方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "(销售方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdz";
        readonly name: "销售方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfdh";
        readonly name: "销售方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfkhh";
        readonly name: "销售方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzh";
        readonly name: "销售方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "（购买方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "开具数字化电子专票时，必填";
    }, {
        readonly key: "zrrzjlxDm";
        readonly name: "（购买方）自然人证件类型";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "201:居民身份证；208：外国护照；210：港澳居民来往内地通行证;213：台湾居民来往大陆通行证;227：中国护照;233：外国人永久居留身份证;237：中华人民共和国港澳居民居住证;238：中华人民共和国台湾居民居住证；";
    }, {
        readonly key: "zrrzjhm";
        readonly name: "（购买方）自然人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zrrgjDm";
        readonly name: "（购买方）自然人国籍代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfmc";
        readonly name: "(购买方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfdz";
        readonly name: "购买方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfdh";
        readonly name: "购买方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfkhh";
        readonly name: "购买方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfzh";
        readonly name: "购买方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbr";
        readonly name: "购买方经办人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jbrsfzjhm";
        readonly name: "购买方经办人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbrlxdh";
        readonly name: "购买方经办人联系电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hjje";
        readonly name: "合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hjse";
        readonly name: "合计税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "jshj";
        readonly name: "价税合计";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "skyhmc";
        readonly name: "收款银行名称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skyhzh";
        readonly name: "收款银行账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jsfs";
        readonly name: "结算方式";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：现金02：银行转账03：票据04：第三方支付05：预付卡99：其他";
    }, {
        readonly key: "ysxwfsd";
        readonly name: "应税行为发生地";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "101：组织机构代码证102：营业执照103：税务登记证199：其他单位证件201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证226：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "dylzfphm";
        readonly name: "对应蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传；如果红冲的是税控发票，对应蓝字发票号码的填写规则为税控发票的发票代码+发票号码。";
    }, {
        readonly key: "hzqrxxdbh";
        readonly name: "红字确认信息单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "hzqrduuid";
        readonly name: "红字确认单uuid";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "bz";
        readonly name: "备注";
        readonly type: "varchar";
        readonly length: "450";
        readonly required: "否";
        readonly description: "蓝票最长450位，红票最长382位。";
    }, {
        readonly key: "ip";
        readonly name: "服务器地址";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "macdz";
        readonly name: "mac地址";
        readonly type: "char";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "cpuid";
        readonly name: "CPU序列号";
        readonly type: "char";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zbxlh";
        readonly name: "主板序列号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "是";
        readonly description: "格式：yyyy-MM-dd HH:mm:ss";
    }, {
        readonly key: "sfzsxsfyhzhbq";
        readonly name: "是否展示销售方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsgmfyhzhbq";
        readonly name: "是否展示购买方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsxsfdzdh";
        readonly name: "是否展示销售方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfdzdh";
        readonly name: "是否展示购买方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "skrxm";
        readonly name: "收款人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fhrxm";
        readonly name: "复核人姓名";
        readonly type: "varchar";
        readonly length: "75";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fpkjfsDm";
        readonly name: "发票开具方式代码";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "4：第三方平台开票（乐企联用、他用开票）5：自建平台开票（乐企自用开票）";
    }, {
        readonly key: "ysmxxh";
        readonly name: "运输明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "qyd";
        readonly name: "起运地";
        readonly type: "varchar";
        readonly length: "80";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ddd";
        readonly name: "到达地";
        readonly type: "varchar";
        readonly length: "80";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ysgjzl";
        readonly name: "运输工具种类";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "是";
        readonly description: "铁路运输公路运输水路运输航空运输管道运输其他运输工具";
    }, {
        readonly key: "ysgjph";
        readonly name: "运输工具牌号";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "yshwmc";
        readonly name: "运输货物名称";
        readonly type: "varchar";
        readonly length: "80";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "mxxh";
        readonly name: "明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "dylzfpmxxh";
        readonly name: "对应蓝字发票明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "红票必传";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "拼装规则：“*商品服务简称（spfwjc）*”+“项目名称（xmmc）”";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xmmc";
        readonly name: "项目名称";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ggxh";
        readonly name: "规格型号";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "dw";
        readonly name: "单位";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sl";
        readonly name: "数量";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“单价”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "dj";
        readonly name: "单价";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“数量”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "je";
        readonly name: "金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "slv";
        readonly name: "增值税税率/征收率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18，2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hsje";
        readonly name: "含税金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kce";
        readonly name: "扣除额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fphxz";
        readonly name: "发票行性质";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "00：正常行01：折扣行02：被折扣行";
    }, {
        readonly key: "yhzcbs";
        readonly name: "优惠政策标识";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：简易征收02：稀土产品03：免税04：不征税05：先征后退06：100%先征后退07：50%先征后退08：按3%简易征收09：按5%简易征收10：按5%简易征收减按1.5%计征11：即征即退30%12：即征即退50%13：即征即退70%14：即征即退100%15：超税负3%即征即退16：超税负8%即征即退17：超税负12%即征即退18：超税负6%即征即退";
    }, {
        readonly key: "fjysmc";
        readonly name: "附加要素名称";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjyslx";
        readonly name: "附加要素类型";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjysz";
        readonly name: "附加要素值";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xh";
        readonly name: "序号";
        readonly type: "number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "pzlx";
        readonly name: "凭证类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：数电票02：增值税专用发票03：增值税普通发票04：营业税发票05：财政票据06：法院裁决书07：契税完税凭证08：其他发票类09：其他扣除凭证";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "varchar";
        readonly length: "12";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cepzhm";
        readonly name: "差额凭证号码";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kjrq";
        readonly name: "开具日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式必须为“yyyy-MM-dd”";
    }, {
        readonly key: "pzhjje";
        readonly name: "凭证合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "bckcje";
        readonly name: "本次扣除金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "该字段需要小于等于凭证合计金额。";
    }];
    readonly template: [{
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly ptbh: "";
        readonly fppz: "";
        readonly gmfzrrbz: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly cezslxDm: "";
        readonly sgfplxDm: "";
        readonly ckywsyzcDm: "";
        readonly zzsjzjtDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfnsrsbh: "";
        readonly zrrzjlxDm: "";
        readonly zrrzjhm: "";
        readonly zrrgjDm: "";
        readonly gmfmc: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly jbrsfzjhm: "";
        readonly gmfjbrlxdh: "";
        readonly hjje: 0;
        readonly hjse: 0;
        readonly jshj: 0;
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly kprq: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly sfzsxsfdzdh: "";
        readonly sfzsgmfdzdh: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly fpmxList: [{
            readonly mxxh: 0;
            readonly dylzfpmxxh: 0;
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: 0;
            readonly slv: 0;
            readonly se: 0;
            readonly hsje: 0;
            readonly kce: 0;
            readonly sphfwssflhbbm: "";
            readonly fphxz: "";
            readonly yhzcbs: "";
        }];
        readonly ysmxList: [{
            readonly ysmxxh: 0;
            readonly qyd: "";
            readonly ddd: "";
            readonly ysgjzl: "";
            readonly ysgjph: "";
            readonly yshwmc: "";
        }];
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
        readonly cekcList: [{
            readonly xh: 0;
            readonly pzlx: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly cepzhm: "";
            readonly kjrq: "";
            readonly pzhjje: 0;
            readonly bckcje: 0;
            readonly bz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000105";
    readonly apiName: "全电发票（不动产销售）上传接口";
    readonly abilityCode: "202046";
    readonly serverCode: "QDFPSC_BDCXS";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（不动产销售）开票能力说明文档-V2.012.docx";
    readonly sectionTitle: "12.不动产销售发票上传";
    readonly fields: [{
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzfpbz";
        readonly name: "蓝字发票标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "0：蓝字发票1：红字发票";
    }, {
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "直连单位ID";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：数字化电子专02：数字化电子普";
    }, {
        readonly key: "gmfzrrbz";
        readonly name: "购买方自然人标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：购买方是自然人N：购买方非自然人";
    }, {
        readonly key: "tdys";
        readonly name: "特定要素";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "05：不动产销售服务发票";
    }, {
        readonly key: "qyDm";
        readonly name: "区域代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "cezslxDm";
        readonly name: "差额征税类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非差额发票01：全额开票02：差额开票";
    }, {
        readonly key: "sgfplxDm";
        readonly name: "收购发票类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非收购发票01：农产品收购发票02：光伏收购发票03：二手车收购发票";
    }, {
        readonly key: "ckywsyzcDm";
        readonly name: "出口业务适用政策代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非出口业务01：退税政策02：免税政策03：征税政策";
    }, {
        readonly key: "zzsjzjtDm";
        readonly name: "增值税即征即退代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非增值税即征即退01：软件产品发票02：资源综合利用产品发票03：管道运输服务发票04：有形动产融资租赁服务05：有形动产融资性售后回租服务发票06：新型墙体材料发票07：风力发电产品发票08：光伏发电产品发票09：动漫软件产品发票10：飞机维修劳务发票11：黄金发票12：铂金发票";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "（销售方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "(销售方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdz";
        readonly name: "销售方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfdh";
        readonly name: "销售方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfkhh";
        readonly name: "销售方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzh";
        readonly name: "销售方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "（购买方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "开具数字化电子专票时，必填";
    }, {
        readonly key: "zrrzjlxDm";
        readonly name: "（购买方）自然人证件类型";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "201:居民身份证；208：外国护照；210：港澳居民来往内地通行证;213：台湾居民来往大陆通行证;227：中国护照;233：外国人永久居留身份证;237：中华人民共和国港澳居民居住证;238：中华人民共和国台湾居民居住证；";
    }, {
        readonly key: "zrrzjhm";
        readonly name: "（购买方）自然人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zrrgjDm";
        readonly name: "（购买方）自然人国籍代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfmc";
        readonly name: "(购买方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfdz";
        readonly name: "购买方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfdh";
        readonly name: "购买方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfkhh";
        readonly name: "购买方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfzh";
        readonly name: "购买方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbr";
        readonly name: "购买方经办人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jbrsfzjhm";
        readonly name: "购买方经办人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbrlxdh";
        readonly name: "购买方经办人联系电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hjje";
        readonly name: "合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hjse";
        readonly name: "合计税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "jshj";
        readonly name: "价税合计";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "skyhmc";
        readonly name: "收款银行名称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skyhzh";
        readonly name: "收款银行账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jsfs";
        readonly name: "结算方式";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：现金02：银行转账03：票据04：第三方支付05：预付卡99：其他";
    }, {
        readonly key: "ysxwfsd";
        readonly name: "应税行为发生地";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "101：组织机构代码证102：营业执照103：税务登记证199：其他单位证件201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证226：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "dylzfphm";
        readonly name: "对应蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传；如果红冲的是税控发票，对应蓝字发票号码的填写规则为税控发票的发票代码+发票号码。";
    }, {
        readonly key: "hzqrxxdbh";
        readonly name: "红字确认信息单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "hzqrduuid";
        readonly name: "红字确认单uuid";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "bz";
        readonly name: "备注";
        readonly type: "varchar";
        readonly length: "450";
        readonly required: "否";
        readonly description: "蓝票最长450位，红票最长382位。";
    }, {
        readonly key: "ip";
        readonly name: "服务器地址";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "macdz";
        readonly name: "mac地址";
        readonly type: "char";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "cpuid";
        readonly name: "CPU序列号";
        readonly type: "char";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zbxlh";
        readonly name: "主板序列号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "是";
        readonly description: "格式：yyyy-MM-dd HH:mm:ss";
    }, {
        readonly key: "sfzsxsfyhzhbq";
        readonly name: "是否展示销售方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsgmfyhzhbq";
        readonly name: "是否展示购买方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsxsfdzdh";
        readonly name: "是否展示销售方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfdzdh";
        readonly name: "是否展示购买方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "skrxm";
        readonly name: "收款人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fhrxm";
        readonly name: "复核人姓名";
        readonly type: "varchar";
        readonly length: "75";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fpkjfsDm";
        readonly name: "发票开具方式代码";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "4：第三方平台开票（乐企联用、他用开票）5：自建平台开票（乐企自用开票）";
    }, {
        readonly key: "dfgtgmbz";
        readonly name: "多方共同购买标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：多方共同购买N：非多方共同购买当为N或者空时，共同购买方list必须为空。";
    }, {
        readonly key: "gtgmf";
        readonly name: "共同购买方";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "只能填写汉字、英文大小写。";
    }, {
        readonly key: "zjlx";
        readonly name: "证件类型";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "100：单位101：组织机构代码证102：营业执照103：税务登记证199：其他单位证件200：个人201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证220：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "zjhm";
        readonly name: "证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xh";
        readonly name: "序号";
        readonly type: "varchar";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "bdcdwdm";
        readonly name: "不动产单位代码";
        readonly type: "varchar";
        readonly length: "28";
        readonly required: "否";
        readonly description: "“不动产单位代码”和“网签合同备案编号”两者只能填一个";
    }, {
        readonly key: "wqhtbabh";
        readonly name: "网签合同备案编号";
        readonly type: "varchar";
        readonly length: "28";
        readonly required: "否";
        readonly description: "“不动产单位代码”和“网签合同备案编号”两者只能填一个";
    }, {
        readonly key: "bdczldzS";
        readonly name: "不动产坐落地址（省）";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "必须以省、自治区、特别行政区、北京市、天津市、上海市、重庆市任意一个关键词结尾。当红冲不动产坐落地址未修改为三个字段的蓝票时，如果蓝票不动产坐落地址没有填写省（直辖市、自治区、特别行政区），该字段可不填写。";
    }, {
        readonly key: "bdczldzS1";
        readonly name: "不动产坐落地址（市）";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "必须以市、盟、自治州、地区、区、县任意一个关键词结尾。";
    }, {
        readonly key: "bdczldzXxdz";
        readonly name: "不动产坐落地址（详细地址）";
        readonly type: "varchar";
        readonly length: "80";
        readonly required: "是";
        readonly description: "必须包含街、路、村、乡、镇、道、巷、号任意一个关键词。";
    }, {
        readonly key: "tdzzsxmbh";
        readonly name: "土地增值税项目编号";
        readonly type: "varchar";
        readonly length: "16";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kdsbz";
        readonly name: "跨地（市）标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "Y是N否";
    }, {
        readonly key: "hdjsjg";
        readonly name: "核定计税价格";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "不属于核定计税不动产销售的可不填写";
    }, {
        readonly key: "sjcjhsje";
        readonly name: "实际成交含税金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "若按核定计税价格征税的，为必填。";
    }, {
        readonly key: "cqzsbh";
        readonly name: "产权证书/不动产权证号";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "mxxh";
        readonly name: "明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "dylzfpmxxh";
        readonly name: "对应蓝字发票明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "红票必传";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "拼装规则：“*商品服务简称（spfwjc）*”+“项目名称（xmmc）”";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xmmc";
        readonly name: "项目名称";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ggxh";
        readonly name: "规格型号";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "dw";
        readonly name: "单位";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "必须是平方米、亩、㎡、平方千米、公顷、h㎡、k㎡、米";
    }, {
        readonly key: "sl";
        readonly name: "数量";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "dj";
        readonly name: "单价";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "je";
        readonly name: "金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "slv";
        readonly name: "增值税税率/征收率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18，2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hsje";
        readonly name: "含税金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kce";
        readonly name: "扣除额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fphxz";
        readonly name: "发票行性质";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "00：正常行01：折扣行02：被折扣行";
    }, {
        readonly key: "yhzcbs";
        readonly name: "优惠政策标识";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：简易征收02：稀土产品03：免税04：不征税05：先征后退06：100%先征后退07：50%先征后退08：按3%简易征收09：按5%简易征收10：按5%简易征收减按1.5%计征11：即征即退30%12：即征即退50%13：即征即退70%14：即征即退100%15：超税负3%即征即退16：超税负8%即征即退17：超税负12%即征即退18：超税负6%即征即退";
    }, {
        readonly key: "fjysmc";
        readonly name: "附加要素名称";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjyslx";
        readonly name: "附加要素类型";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjysz";
        readonly name: "附加要素值";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "pzlx";
        readonly name: "凭证类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：数电票02：增值税专用发票03：增值税普通发票04：营业税发票05：财政票据06：法院裁决书07：契税完税凭证08：其他发票类09：其他扣除凭证";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "varchar";
        readonly length: "12";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cepzhm";
        readonly name: "差额凭证号码";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kjrq";
        readonly name: "开具日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式必须为“yyyy-MM-dd”";
    }, {
        readonly key: "pzhjje";
        readonly name: "凭证合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "bckcje";
        readonly name: "本次扣除金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "该字段需要小于等于凭证合计金额。";
    }];
    readonly template: [{
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly ptbh: "";
        readonly fppz: "";
        readonly gmfzrrbz: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly cezslxDm: "";
        readonly sgfplxDm: "";
        readonly ckywsyzcDm: "";
        readonly zzsjzjtDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfnsrsbh: "";
        readonly zrrzjlxDm: "";
        readonly zrrzjhm: "";
        readonly zrrgjDm: "";
        readonly gmfmc: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly jbrsfzjhm: "";
        readonly gmfjbrlxdh: "";
        readonly hjje: 0;
        readonly hjse: 0;
        readonly jshj: 0;
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly kprq: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly sfzsxsfdzdh: "";
        readonly sfzsgmfdzdh: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly dfgtgmbz: "";
        readonly gtgmfList: [{
            readonly gtgmf: "";
            readonly zjlx: "";
            readonly zjhm: "";
        }];
        readonly bdcxstdys: [{
            readonly xh: "";
            readonly bdcdwdm: "";
            readonly wqhtbabh: "";
            readonly bdczldzS: "";
            readonly bdczldzS1: "";
            readonly bdczldzXxdz: "";
            readonly tdzzsxmbh: "";
            readonly kdsbz: "";
            readonly hdjsjg: 0;
            readonly sjcjhsje: 0;
            readonly cqzsbh: "";
        }];
        readonly fpmxList: [{
            readonly mxxh: 0;
            readonly dylzfpmxxh: 0;
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: 0;
            readonly slv: 0;
            readonly se: 0;
            readonly hsje: 0;
            readonly kce: 0;
            readonly sphfwssflhbbm: "";
            readonly fphxz: "";
            readonly yhzcbs: "";
        }];
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
        readonly cekcList: [{
            readonly xh: "";
            readonly pzlx: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly cepzhm: "";
            readonly kjrq: "";
            readonly pzhjje: 0;
            readonly bckcje: 0;
            readonly bz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000106";
    readonly apiName: "全电发票（不动产经营租赁）上传接口";
    readonly abilityCode: "202038";
    readonly serverCode: "BDCJYZLFPSC";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（不动产经营租赁）开票能力说明文档-V3.015.docx";
    readonly sectionTitle: "12.不动产经营租赁发票上传";
    readonly fields: [];
    readonly template: [{
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly ptbh: "";
        readonly fppz: "";
        readonly gmfzrrbz: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly cezslxDm: "";
        readonly sgfplxDm: "";
        readonly ckywsyzcDm: "";
        readonly zzsjzjtDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfnsrsbh: "";
        readonly gmfmc: "";
        readonly zrrzjlxDm: "";
        readonly zrrzjhm: "";
        readonly zrrgjDm: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly jbrsfzjhm: "";
        readonly jbrsfzjzlDm: "";
        readonly jbrgjhdqDm: "";
        readonly jbrnsrsbh: "";
        readonly gmfjbrlxdh: "";
        readonly hjje: "";
        readonly hjse: "";
        readonly jshj: "";
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly kprq: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly sfzsxsfdzdh: "";
        readonly sfzsgmfdzdh: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly bdcjyzltdys: [{
            readonly xh: "";
            readonly bdczldzS: "";
            readonly bdczldzS1: "";
            readonly bdczldzXxdz: "";
            readonly zlqqz: "";
            readonly kdsbz: "";
            readonly cqzsbh: "";
            readonly cph: [""];
        }];
        readonly lqkpmsDm: "";
        readonly zfxxList: [{
            readonly zfqdDm: "";
            readonly jydh: "";
        }];
        readonly fpmxList: [{
            readonly mxxh: "";
            readonly dylzfpmxxh: "";
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: "";
            readonly slv: "";
            readonly se: "";
            readonly hsje: "";
            readonly kce: "";
            readonly sphfwssflhbbm: "";
            readonly fphxz: "";
            readonly yhzcbs: "";
        }];
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
        readonly cekcList: [{
            readonly xh: "";
            readonly pzlx: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly cepzhm: "";
            readonly kjrq: "";
            readonly pzhjje: "";
            readonly bckcje: "";
            readonly bz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000107";
    readonly apiName: "全电发票（代收车船税）上传接口";
    readonly abilityCode: "202052";
    readonly serverCode: "QDFPSC_DSCCS";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（代收车船税）开票能力说明文档-V2.011.docx";
    readonly sectionTitle: "12.代收车船税发票上传";
    readonly fields: [];
    readonly template: [{
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly ptbh: "";
        readonly fppz: "";
        readonly gmfzrrbz: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly cezslxDm: "";
        readonly sgfplxDm: "";
        readonly ckywsyzcDm: "";
        readonly zzsjzjtDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfnsrsbh: "";
        readonly zrrzjlxDm: "";
        readonly zrrzjhm: "";
        readonly zrrgjDm: "";
        readonly gmfmc: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly jbrsfzjhm: "";
        readonly gmfjbrlxdh: "";
        readonly hjje: "";
        readonly hjse: "";
        readonly jshj: "";
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly kprq: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly sfzsxsfdzdh: "";
        readonly sfzsgmfdzdh: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly fpmxList: [{
            readonly mxxh: "";
            readonly dylzfpmxxh: "";
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: "";
            readonly slv: "";
            readonly se: "";
            readonly hsje: "";
            readonly kce: "";
            readonly sphfwssflhbbm: "";
            readonly fphxz: "";
            readonly yhzcbs: "";
        }];
        readonly dsccstdys: {
            readonly bxdh: "";
            readonly cphcbdjh: "";
            readonly skssq: "";
            readonly dsccsje: "";
            readonly znj: "";
            readonly jehj: "";
            readonly cjh: "";
        };
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
        readonly cekcList: [{
            readonly xh: "";
            readonly pzlx: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly cepzhm: "";
            readonly kjrq: "";
            readonly pzhjje: "";
            readonly bckcje: "";
            readonly bz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000110";
    readonly apiName: "全电发票（医疗住院）上传接口";
    readonly abilityCode: "202051";
    readonly serverCode: "QDFPSC_YLFW_ZY";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（医疗住院）开票能力说明文档-V2.012.docx";
    readonly sectionTitle: "12.医疗住院发票上传";
    readonly fields: [{
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzfpbz";
        readonly name: "蓝字发票标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "0：蓝字发票1：红字发票";
    }, {
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "直连单位ID";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "02：数字化电子普";
    }, {
        readonly key: "gmfzrrbz";
        readonly name: "购买方自然人标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：购买方是自然人N：购买方非自然人";
    }, {
        readonly key: "tdys";
        readonly name: "特定要素";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "10：医疗服务（住院）发票";
    }, {
        readonly key: "qyDm";
        readonly name: "区域代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "14403000000:深圳市13702000000:青岛市13502000000:厦门市13302000000:宁波市12102000000:大连市16500000000:新疆维吾尔自治区16400000000:宁夏回族自治区16300000000:青海省16200000000:甘肃省16100000000:陕西省15400000000:西藏自治区15300000000:云南省15200000000:贵州省15100000000:四川省15000000000:重庆市14600000000:海南省14500000000:广西壮族自治区14400000000:广东省14300000000:湖南省14200000000:湖北省14100000000:河南省13700000000:山东省13600000000:江西省13500000000:福建省13400000000:安徽省13300000000:浙江省13200000000:江苏省13100000000:上海市12300000000:黑龙江省12200000000:吉林省12100000000:辽宁省11500000000:内蒙古自治区11400000000:山西省11300000000:河北省11200000000:天津市11100000000:北京市";
    }, {
        readonly key: "cezslxDm";
        readonly name: "差额征税类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非差额发票01：全额开票02：差额开票";
    }, {
        readonly key: "sgfplxDm";
        readonly name: "收购发票类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非收购发票01：农产品收购发票02：光伏收购发票03：二手车收购发票";
    }, {
        readonly key: "ckywsyzcDm";
        readonly name: "出口业务适用政策代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非出口业务01：退税政策02：免税政策03：征税政策";
    }, {
        readonly key: "zzsjzjtDm";
        readonly name: "增值税即征即退代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非增值税即征即退01：软件产品发票02：资源综合利用产品发票03：管道运输服务发票04：有形动产融资租赁服务05：有形动产融资性售后回租服务发票06：新型墙体材料发票07：风力发电产品发票08：光伏发电产品发票09：动漫软件产品发票10：飞机维修劳务发票11：黄金发票12：铂金发票";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "（销售方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "(销售方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdz";
        readonly name: "销售方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfdh";
        readonly name: "销售方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfkhh";
        readonly name: "销售方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzh";
        readonly name: "销售方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "（购买方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "如果填写，长度15到20位，由数字和大写字母组成。";
    }, {
        readonly key: "zrrzjlxDm";
        readonly name: "（购买方）自然人证件类型";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "201:居民身份证；208：外国护照；210：港澳居民来往内地通行证;213：台湾居民来往大陆通行证;227：中国护照;233：外国人永久居留身份证;237：中华人民共和国港澳居民居住证;238：中华人民共和国台湾居民居住证；";
    }, {
        readonly key: "zrrzjhm";
        readonly name: "（购买方）自然人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zrrgjDm";
        readonly name: "（购买方）自然人国籍代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfmc";
        readonly name: "(购买方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfdz";
        readonly name: "购买方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfdh";
        readonly name: "购买方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfkhh";
        readonly name: "购买方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfzh";
        readonly name: "购买方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbr";
        readonly name: "购买方经办人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jbrsfzjhm";
        readonly name: "购买方经办人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbrlxdh";
        readonly name: "购买方经办人联系电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hjje";
        readonly name: "合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hjse";
        readonly name: "合计税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "jshj";
        readonly name: "价税合计";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "skyhmc";
        readonly name: "收款银行名称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skyhzh";
        readonly name: "收款银行账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jsfs";
        readonly name: "结算方式";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：现金02：银行转账03：票据04：第三方支付05：预付卡99：其他";
    }, {
        readonly key: "ysxwfsd";
        readonly name: "应税行为发生地";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "101：组织机构代码证102：营业执照103：税务登记证199：其他单位证件201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证226：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "dylzfphm";
        readonly name: "对应蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传；如果红冲的是税控发票，对应蓝字发票号码的填写规则为税控发票的发票代码+发票号码。";
    }, {
        readonly key: "hzqrxxdbh";
        readonly name: "红字确认信息单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "hzqrduuid";
        readonly name: "红字确认单uuid";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "bz";
        readonly name: "备注";
        readonly type: "varchar";
        readonly length: "450";
        readonly required: "否";
        readonly description: "蓝票最长450位，红票最长382位。";
    }, {
        readonly key: "ip";
        readonly name: "服务器地址";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "macdz";
        readonly name: "mac地址";
        readonly type: "char";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "cpuid";
        readonly name: "CPU序列号";
        readonly type: "char";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zbxlh";
        readonly name: "主板序列号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "是";
        readonly description: "格式：yyyy-MM-dd HH:mm:ss";
    }, {
        readonly key: "sfzsxsfyhzhbq";
        readonly name: "是否展示销售方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsgmfyhzhbq";
        readonly name: "是否展示购买方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsxsfdzdh";
        readonly name: "是否展示销售方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfdzdh";
        readonly name: "是否展示购买方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "skrxm";
        readonly name: "收款人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fhrxm";
        readonly name: "复核人姓名";
        readonly type: "varchar";
        readonly length: "75";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fpkjfsDm";
        readonly name: "发票开具方式代码";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "4：第三方平台开票（乐企联用、他用开票）5：自建平台开票（乐企自用开票）";
    }, {
        readonly key: "ylywlsh";
        readonly name: "医疗业务流水号";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hzxm";
        readonly name: "患者姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "是";
        readonly description: "1个汉字占用3个字符，最多可以上传50个汉字。";
    }, {
        readonly key: "hzsfzjlxDm";
        readonly name: "患者身份证件类型代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "是";
        readonly description: "201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证220：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "hzsfzjhm";
        readonly name: "患者身份证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "blh";
        readonly name: "病历号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zyh";
        readonly name: "住院号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "zykb";
        readonly name: "住院科别";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "是";
        readonly description: "1个汉字占用3个字符，最多可以上传33个汉字。";
    }, {
        readonly key: "zysjq";
        readonly name: "住院时间起";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式必须为“yyyymmdd”";
    }, {
        readonly key: "zysjz";
        readonly name: "住院时间止";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式必须为“yyyymmdd”";
    }, {
        readonly key: "yjje";
        readonly name: "预缴金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "bjje";
        readonly name: "补缴金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "tfje";
        readonly name: "退费金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "yljglxDm";
        readonly name: "医疗机构类型代码";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "医疗机构类型代码详见“五、附件（一）医疗机构类型代码”";
    }, {
        readonly key: "qtyljglx";
        readonly name: "其他医疗机构类型";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "填写上述医疗机构类型代码没有的类型，“医疗机构类型代码”和“其他医疗机构类型”只能填写一个。最多可以上传33个汉字。";
    }, {
        readonly key: "yblxDm";
        readonly name: "医保类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：职工基本医疗保险02：城乡居民基本医疗保险03：离休04：其他医疗保险05：自费";
    }, {
        readonly key: "qtyblx";
        readonly name: "其他医保类型";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "填写上述医保类型代码没有的类型，“医保类型代码”和“其他医保类型”只能填写一个。最多可以上传33个汉字。";
    }, {
        readonly key: "ybbh";
        readonly name: "医保编号";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xbDm";
        readonly name: "性别";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "1：男2：女";
    }, {
        readonly key: "ybtcjjzfje";
        readonly name: "医保统筹基金支付金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "qtzfje";
        readonly name: "其他支付金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "grzhzfje";
        readonly name: "个人账户支付金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "grxjzfje";
        readonly name: "个人现金支付金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "grzfje";
        readonly name: "个人自付金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "grzfje1";
        readonly name: "个人自费金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jkr";
        readonly name: "交款人";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "住院收费明细中的交款人.1个汉字占用3个字符，最多可以上传33个汉字。";
    }, {
        readonly key: "skdw";
        readonly name: "收款单位";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "住院收费明细中的收款单位。1个汉字占用3个字符，最多可以上传33个汉字。";
    }, {
        readonly key: "sszdyyssl";
        readonly name: "省市自定义要素数量";
        readonly type: "number";
        readonly length: "2";
        readonly required: "否";
        readonly description: "省市自定义要素数量";
    }, {
        readonly key: "sszdyysxh";
        readonly name: "省市自定义要素序号";
        readonly type: "number";
        readonly length: "2";
        readonly required: "否";
        readonly description: "从“1”开始的连续正整数";
    }, {
        readonly key: "sszdyysmc";
        readonly name: "省市自定义要素名称";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "若“省市自定义要素内容”栏次非空，则本栏次必须非空；中文、英文字符、数字。1个汉字占用3个字符，最多可以上传33个汉字。";
    }, {
        readonly key: "sszdyysnr";
        readonly name: "省市自定义要素内容";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "若“省市自定义要素名称”栏次非空，则本栏次必须非空。1个汉字占用3个字符，最多可以上传33个汉字。";
    }, {
        readonly key: "mxxh";
        readonly name: "明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "dylzfpmxxh";
        readonly name: "对应蓝字发票明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "红票必传";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "拼装规则：“*商品服务简称（spfwjc）*”+“项目名称（xmmc）”";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xmmc";
        readonly name: "项目名称";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ggxh";
        readonly name: "规格型号";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "dw";
        readonly name: "单位";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sl";
        readonly name: "数量";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“单价”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "dj";
        readonly name: "单价";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“数量”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "je";
        readonly name: "金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "slv";
        readonly name: "增值税税率/征收率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18，2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hsje";
        readonly name: "含税金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kce";
        readonly name: "扣除额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fphxz";
        readonly name: "发票行性质";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "00：正常行01：折扣行02：被折扣行";
    }, {
        readonly key: "yhzcbs";
        readonly name: "优惠政策标识";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：简易征收02：稀土产品03：免税04：不征税05：先征后退06：100%先征后退07：50%先征后退08：按3%简易征收09：按5%简易征收10：按5%简易征收减按1.5%计征11：即征即退30%12：即征即退50%13：即征即退70%14：即征即退100%15：超税负3%即征即退16：超税负8%即征即退17：超税负12%即征即退18：超税负6%即征即退";
    }, {
        readonly key: "zysfmxxh";
        readonly name: "住院收费明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "住院收费明细中对应的明细序号。";
    }, {
        readonly key: "fymx";
        readonly name: "费用明细";
        readonly type: "varchar";
        readonly length: "200";
        readonly required: "是";
        readonly description: "住院收费明细某行明细的项目名称。1个汉字占用3个字符，最多可以上传66个汉字。";
    }, {
        readonly key: "ylfwgbm";
        readonly name: "医疗服务贯标码";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjysmc";
        readonly name: "附加要素名称";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjyslx";
        readonly name: "附加要素类型";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjysz";
        readonly name: "附加要素值";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xh";
        readonly name: "序号";
        readonly type: "number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "pzlx";
        readonly name: "凭证类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：数电票02：增值税专用发票03：增值税普通发票04：营业税发票05：财政票据06：法院裁决书07：契税完税凭证08：其他发票类09：其他扣除凭证";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "varchar";
        readonly length: "12";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cepzhm";
        readonly name: "差额凭证号码";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kjrq";
        readonly name: "开具日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式必须为“yyyy-MM-dd”";
    }, {
        readonly key: "pzhjje";
        readonly name: "凭证合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "bckcje";
        readonly name: "本次扣除金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "该字段需要小于等于凭证合计金额。";
    }];
    readonly template: [{
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly ptbh: "";
        readonly fppz: "";
        readonly gmfzrrbz: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly cezslxDm: "";
        readonly sgfplxDm: "";
        readonly ckywsyzcDm: "";
        readonly zzsjzjtDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfnsrsbh: "";
        readonly gmfmc: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly zrrzjlxDm: "";
        readonly zrrzjhm: "";
        readonly zrrgjDm: "";
        readonly jbrsfzjhm: "";
        readonly gmfjbrlxdh: "";
        readonly hjje: 0;
        readonly hjse: 0;
        readonly jshj: 0;
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly kprq: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly lqkpmsDm: "";
        readonly zfxxList: [{
            readonly zfqdDm: "";
            readonly jydh: "";
        }];
        readonly ylzytdys: {
            readonly ylywlsh: "";
            readonly hzxm: "";
            readonly hzsfzjlxDm: "";
            readonly hzsfzjhm: "";
            readonly blh: "";
            readonly zyh: "";
            readonly zykb: "";
            readonly zysjq: "";
            readonly zysjz: "";
            readonly yjje: 0;
            readonly bjje: 0;
            readonly tfje: 0;
            readonly yljglxDm: "";
            readonly qtyljglx: "";
            readonly yblxDm: "";
            readonly qtyblx: "";
            readonly ybbh: "";
            readonly xbDm: "";
            readonly ybtcjjzfje: 0;
            readonly qtzfje: 0;
            readonly grzhzfje: 0;
            readonly grxjzfje: 0;
            readonly grzfje: 0;
            readonly grzfje1: 0;
            readonly jkr: "";
            readonly skdw: "";
            readonly sszdyyssl: 0;
            readonly sszdyysList: [{
                readonly sszdyysxh: 0;
                readonly sszdyysmc: "";
                readonly sszdyysnr: "";
            }];
        };
        readonly fpmxList: [{
            readonly mxxh: 0;
            readonly dylzfpmxxh: 0;
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: 0;
            readonly slv: 0;
            readonly se: 0;
            readonly bz: "";
            readonly hsje: 0;
            readonly kce: 0;
            readonly sphfwssflhbbm: "";
            readonly fphxz: "";
            readonly yhzcbs: "";
        }];
        readonly sfmxList: [{
            readonly zysfmxxh: 0;
            readonly mxxh: 0;
            readonly fymx: "";
            readonly sl: "";
            readonly dw: "";
            readonly je: 0;
            readonly se: 0;
            readonly slv: 0;
            readonly ylfwgbm: "";
            readonly bz: "";
        }];
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000111";
    readonly apiName: "全电发票（医疗门诊）上传接口";
    readonly abilityCode: "202050";
    readonly serverCode: "QDFPSC_YLFW_MZ";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（医疗门诊）开票能力说明文档-V2.013.docx";
    readonly sectionTitle: "12.医疗门诊发票上传";
    readonly fields: [{
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzfpbz";
        readonly name: "蓝字发票标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "0：蓝字发票1：红字发票";
    }, {
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "直连单位ID";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "02：数字化电子普";
    }, {
        readonly key: "gmfzrrbz";
        readonly name: "购买方自然人标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：购买方是自然人N：购买方非自然人";
    }, {
        readonly key: "tdys";
        readonly name: "特定要素";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "11：医疗服务（门诊）发票";
    }, {
        readonly key: "qyDm";
        readonly name: "区域代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "14403000000:深圳市13702000000:青岛市13502000000:厦门市13302000000:宁波市12102000000:大连市16500000000:新疆维吾尔自治区16400000000:宁夏回族自治区16300000000:青海省16200000000:甘肃省16100000000:陕西省15400000000:西藏自治区15300000000:云南省15200000000:贵州省15100000000:四川省15000000000:重庆市14600000000:海南省14500000000:广西壮族自治区14400000000:广东省14300000000:湖南省14200000000:湖北省14100000000:河南省13700000000:山东省13600000000:江西省13500000000:福建省13400000000:安徽省13300000000:浙江省13200000000:江苏省13100000000:上海市12300000000:黑龙江省12200000000:吉林省12100000000:辽宁省11500000000:内蒙古自治区11400000000:山西省11300000000:河北省11200000000:天津市11100000000:北京市";
    }, {
        readonly key: "cezslxDm";
        readonly name: "差额征税类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非差额发票01：全额开票02：差额开票";
    }, {
        readonly key: "sgfplxDm";
        readonly name: "收购发票类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非收购发票01：农产品收购发票02：光伏收购发票03：二手车收购发票";
    }, {
        readonly key: "ckywsyzcDm";
        readonly name: "出口业务适用政策代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非出口业务01：退税政策02：免税政策03：征税政策";
    }, {
        readonly key: "zzsjzjtDm";
        readonly name: "增值税即征即退代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非增值税即征即退01：软件产品发票02：资源综合利用产品发票03：管道运输服务发票04：有形动产融资租赁服务05：有形动产融资性售后回租服务发票06：新型墙体材料发票07：风力发电产品发票08：光伏发电产品发票09：动漫软件产品发票10：飞机维修劳务发票11：黄金发票12：铂金发票";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "（销售方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "(销售方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdz";
        readonly name: "销售方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfdh";
        readonly name: "销售方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfkhh";
        readonly name: "销售方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzh";
        readonly name: "销售方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "（购买方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "长度15到20位，由数字和大写字母组成。";
    }, {
        readonly key: "zrrzjlxDm";
        readonly name: "（购买方）自然人证件类型";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "201:居民身份证；208：外国护照；210：港澳居民来往内地通行证;213：台湾居民来往大陆通行证;227：中国护照;233：外国人永久居留身份证;237：中华人民共和国港澳居民居住证;238：中华人民共和国台湾居民居住证；";
    }, {
        readonly key: "zrrzjhm";
        readonly name: "（购买方）自然人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zrrgjDm";
        readonly name: "（购买方）自然人国籍代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfmc";
        readonly name: "(购买方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfdz";
        readonly name: "购买方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfdh";
        readonly name: "购买方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfkhh";
        readonly name: "购买方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfzh";
        readonly name: "购买方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbr";
        readonly name: "购买方经办人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jbrsfzjhm";
        readonly name: "购买方经办人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbrlxdh";
        readonly name: "购买方经办人联系电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hjje";
        readonly name: "合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hjse";
        readonly name: "合计税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "jshj";
        readonly name: "价税合计";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "skyhmc";
        readonly name: "收款银行名称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skyhzh";
        readonly name: "收款银行账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jsfs";
        readonly name: "结算方式";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：现金02：银行转账03：票据04：第三方支付05：预付卡99：其他";
    }, {
        readonly key: "ysxwfsd";
        readonly name: "应税行为发生地";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "100：单位101：组织机构代码证102：营业执照103：税务登记证199：其他单位证件200：个人201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证220：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "dylzfphm";
        readonly name: "对应蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传；如果红冲的是税控发票，对应蓝字发票号码的填写规则为税控发票的发票代码+发票号码。";
    }, {
        readonly key: "hzqrxxdbh";
        readonly name: "红字确认信息单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "hzqrduuid";
        readonly name: "红字确认单uuid";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "bz";
        readonly name: "备注";
        readonly type: "varchar";
        readonly length: "450";
        readonly required: "否";
        readonly description: "蓝票最长450位，红票最长382位。";
    }, {
        readonly key: "ip";
        readonly name: "服务器地址";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "macdz";
        readonly name: "mac地址";
        readonly type: "char";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "cpuid";
        readonly name: "CPU序列号";
        readonly type: "char";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zbxlh";
        readonly name: "主板序列号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "是";
        readonly description: "格式：yyyy-MM-dd HH:mm:ss";
    }, {
        readonly key: "sfzsxsfyhzhbq";
        readonly name: "是否展示销售方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsgmfyhzhbq";
        readonly name: "是否展示购买方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsxsfdzdh";
        readonly name: "是否展示销售方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfdzdh";
        readonly name: "是否展示购买方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "skrxm";
        readonly name: "收款人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fhrxm";
        readonly name: "复核人姓名";
        readonly type: "varchar";
        readonly length: "75";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fpkjfsDm";
        readonly name: "发票开具方式代码";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "4：第三方平台开票（乐企联用、他用开票）5：自建平台开票（乐企自用开票）";
    }, {
        readonly key: "ylywlsh";
        readonly name: "医疗业务流水号";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hzxm";
        readonly name: "患者姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "是";
        readonly description: "1个汉字占用3个字符，最多可以上传50个汉字。";
    }, {
        readonly key: "hzsfzjlxDm";
        readonly name: "患者身份证件类型代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "是";
        readonly description: "201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证220：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "hzsfzjhm";
        readonly name: "患者身份证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "yljglxDm";
        readonly name: "医疗机构类型代码";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "医疗机构类型代码详见“五、附件（一）医疗机构类型代码”";
    }, {
        readonly key: "qtyljglx";
        readonly name: "其他医疗机构类型";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "填写上述医疗机构类型代码没有的类型，“医疗机构类型代码”和“其他医疗机构类型”只能填写一个。1个汉字占用3个字符，最多可以上传33个汉字。";
    }, {
        readonly key: "yblxDm";
        readonly name: "医保类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：职工基本医疗保险02：城乡居民基本医疗保险03：离休04：其他医疗保险05：自费";
    }, {
        readonly key: "qtyblx";
        readonly name: "其他医保类型";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "填写上述医保类型代码没有的类型，“医保类型代码”和“其他医保类型”只能填写一个。1个汉字占用3个字符，最多可以上传33个汉字。";
    }, {
        readonly key: "ybbh";
        readonly name: "医保编号";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xbDm";
        readonly name: "性别";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "1：男2：女";
    }, {
        readonly key: "ybtcjjzfje";
        readonly name: "医保统筹基金支付金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "qtzfje";
        readonly name: "其他支付金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "grzhzfje";
        readonly name: "个人账户支付金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "grxjzfje";
        readonly name: "个人现金支付金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "grzfje";
        readonly name: "个人自付金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "grzfje1";
        readonly name: "个人自费金额";
        readonly type: "number";
        readonly length: "18,4";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "mzh";
        readonly name: "门诊号";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "mzjzsj";
        readonly name: "门诊就诊时间";
        readonly type: "datetime";
        readonly length: "-";
        readonly required: "是";
        readonly description: "格式必须为“yyyy-mm-dd hh:mm:ss”";
    }, {
        readonly key: "sszdyyssl";
        readonly name: "省市自定义要素数量";
        readonly type: "number";
        readonly length: "2";
        readonly required: "否";
        readonly description: "省市自定义要素数量，大于等于0的正整数";
    }, {
        readonly key: "sszdyysxh";
        readonly name: "省市自定义要素序号";
        readonly type: "number";
        readonly length: "2";
        readonly required: "是";
        readonly description: "从“1”开始的连续正整数";
    }, {
        readonly key: "sszdyysmc";
        readonly name: "省市自定义要素名称";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "若“省市自定义要素内容”栏次非空，则本栏次必须非空；中文、英文字符、数字。1个汉字占用3个字符，最多可以上传33个汉字。";
    }, {
        readonly key: "sszdyysnr";
        readonly name: "省市自定义要素内容";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "若“省市自定义要素名称”栏次非空，则本栏次必须非空。1个汉字占用3个字符，最多可以上传33个汉字。";
    }, {
        readonly key: "mxxh";
        readonly name: "明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "dylzfpmxxh";
        readonly name: "对应蓝字发票明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "红票必传";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "拼装规则：“*商品服务简称（spfwjc）*”+“项目名称（xmmc）”";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xmmc";
        readonly name: "项目名称";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ggxh";
        readonly name: "规格型号";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fymx";
        readonly name: "费用明细";
        readonly type: "varchar";
        readonly length: "200";
        readonly required: "否";
        readonly description: "1个汉字占用3个字符，最多可以上传66个汉字。";
    }, {
        readonly key: "dw";
        readonly name: "单位";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sl";
        readonly name: "数量";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“单价”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "dj";
        readonly name: "单价";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“数量”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "je";
        readonly name: "金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "slv";
        readonly name: "增值税税率/征收率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18，2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ylfwgbm";
        readonly name: "医疗服务贯标码";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "qt";
        readonly name: "其他";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "1个汉字占用3个字符，最多可以上传33个汉字。";
    }, {
        readonly key: "hsje";
        readonly name: "含税金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kce";
        readonly name: "扣除额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fphxz";
        readonly name: "发票行性质";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "00：正常行01：折扣行02：被折扣行";
    }, {
        readonly key: "yhzcbs";
        readonly name: "优惠政策标识";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：简易征收02：稀土产品03：免税04：不征税05：先征后退06：100%先征后退07：50%先征后退08：按3%简易征收09：按5%简易征收10：按5%简易征收减按1.5%计征11：即征即退30%12：即征即退50%13：即征即退70%14：即征即退100%15：超税负3%即征即退16：超税负8%即征即退17：超税负12%即征即退18：超税负6%即征即退";
    }, {
        readonly key: "fjysmc";
        readonly name: "附加要素名称";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjyslx";
        readonly name: "附加要素类型";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjysz";
        readonly name: "附加要素值";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xh";
        readonly name: "序号";
        readonly type: "number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "pzlx";
        readonly name: "凭证类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：数电票02：增值税专用发票03：增值税普通发票04：营业税发票05：财政票据06：法院裁决书07：契税完税凭证08：其他发票类09：其他扣除凭证";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "varchar";
        readonly length: "12";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cepzhm";
        readonly name: "差额凭证号码";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kjrq";
        readonly name: "开具日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式必须为“yyyy-MM-dd”";
    }, {
        readonly key: "pzhjje";
        readonly name: "凭证合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "bckcje";
        readonly name: "本次扣除金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "该字段需要小于等于凭证合计金额。";
    }];
    readonly template: [{
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly ptbh: "";
        readonly fppz: "";
        readonly gmfzrrbz: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly cezslxDm: "";
        readonly sgfplxDm: "";
        readonly ckywsyzcDm: "";
        readonly zzsjzjtDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfnsrsbh: "";
        readonly zrrzjlxDm: "";
        readonly zrrzjhm: "";
        readonly zrrgjDm: "";
        readonly gmfmc: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly jbrsfzjhm: "";
        readonly gmfjbrlxdh: "";
        readonly hjje: 0;
        readonly hjse: 0;
        readonly jshj: 0;
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly kprq: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly sfzsxsfdzdh: "";
        readonly sfzsgmfdzdh: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly ylmztdys: {
            readonly ylywlsh: "";
            readonly hzxm: "";
            readonly hzsfzjlxDm: "";
            readonly hzsfzjhm: "";
            readonly mzh: "";
            readonly mzjzsj: "";
            readonly yljglxDm: "";
            readonly qtyljglx: "";
            readonly yblxDm: "";
            readonly qtyblx: "";
            readonly ybbh: "";
            readonly xbDm: "";
            readonly ybtcjjzfje: 0;
            readonly qtzfje: 0;
            readonly grzhzfje: 0;
            readonly grxjzfje: 0;
            readonly grzfje: 0;
            readonly grzfje1: 0;
            readonly sszdyyssl: 0;
            readonly sszdyysList: [{
                readonly sszdyysxh: 0;
                readonly sszdyysmc: "";
                readonly sszdyysnr: "";
            }];
        };
        readonly fpmxList: [{
            readonly mxxh: 0;
            readonly dylzfpmxxh: 0;
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly fymx: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: 0;
            readonly slv: 0;
            readonly se: 0;
            readonly ylfwgbm: "";
            readonly qt: "";
            readonly hsje: 0;
            readonly kce: 0;
            readonly sphfwssflhbbm: "";
            readonly fphxz: "";
            readonly yhzcbs: "";
        }];
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
        readonly cekcList: [{
            readonly xh: 0;
            readonly pzlx: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly cepzhm: "";
            readonly kjrq: "";
            readonly pzhjje: 0;
            readonly bckcje: 0;
            readonly bz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000113";
    readonly apiName: "查询成品油库存接口";
    readonly abilityCode: "202055";
    readonly serverCode: "CXCPYKC";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（成品油）开票能力说明文档-V2.012.docx";
    readonly sectionTitle: "9.查询成品油可用税收分类编码信息";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号/统一社会信用代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "开票纳税人识别号/统一社会信用代码";
    }, {
        readonly key: "sjswjgdm";
        readonly name: "省级税务机关代码";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly sjswjgdm: "";
    };
}, {
    readonly apiIdentity: "10000000114";
    readonly apiName: "下载/退回成品油库存接口";
    readonly abilityCode: "202055";
    readonly serverCode: "XZHTHCPYKC";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（成品油）开票能力说明文档-V2.012.docx";
    readonly sectionTitle: "11.下载或退回成品油库存";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号/统一社会信用代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "申领发票的纳税人识别号或统一社会信用代码";
    }, {
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sqlx";
        readonly name: "申请类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "0：下载1：退回";
    }, {
        readonly key: "ywlsh";
        readonly name: "业务流水号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "spbm";
        readonly name: "商品编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sl";
        readonly name: "数量";
        readonly type: "number";
        readonly length: "16,8";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly sqlx: "";
        readonly ptbh: "";
        readonly ywlsh: "";
        readonly spbm: "";
        readonly sl: 0;
    };
}, {
    readonly apiIdentity: "10000000117";
    readonly apiName: "全电发票（光伏收购）上传接口";
    readonly abilityCode: "202017";
    readonly serverCode: "GFSGFPSC";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（光伏收购）开票能力说明文档-V4.011.docx";
    readonly sectionTitle: "12.光伏收购发票上传";
    readonly fields: [{
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzfpbz";
        readonly name: "蓝字发票标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "0：蓝字发票1：红字发票";
    }, {
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "直连单位ID";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "02：数字化电子普";
    }, {
        readonly key: "tdys";
        readonly name: "特定要素";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "17：光伏收购发票";
    }, {
        readonly key: "qyDm";
        readonly name: "区域代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "cezslxDm";
        readonly name: "差额征税类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非差额发票01：全额开票02：差额开票";
    }, {
        readonly key: "sgfplxDm";
        readonly name: "收购发票类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "空：非收购发票01：农产品收购发票02：光伏收购发票03：二手车收购发票";
    }, {
        readonly key: "ckywsyzcDm";
        readonly name: "出口业务适用政策代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非出口业务01：退税政策02：免税政策03：征税政策";
    }, {
        readonly key: "zzsjzjtDm";
        readonly name: "增值税即征即退代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "空：非增值税即征即退01：软件产品发票02：资源综合利用产品发票03：管道运输服务发票04：有形动产融资租赁服务05：有形动产融资性售后回租服务发票06：新型墙体材料发票07：风力发电产品发票08：光伏发电产品发票09：动漫软件产品发票10：飞机维修劳务发票11：黄金发票12：铂金发票";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "（销售方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzrrbz";
        readonly name: "销售方自然人标志";
        readonly type: "char";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：是N：否";
    }, {
        readonly key: "xsfzrrzjlxDm";
        readonly name: "销售方自然人证件类型";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "201:居民身份证；208：外国护照；210：港澳居民来往内地通行证;213：台湾居民来往大陆通行证;227：中国护照;233：外国人永久居留身份证;237：中华人民共和国港澳居民居住证;238：中华人民共和国台湾居民居住证；";
    }, {
        readonly key: "xsfzrrzjhm";
        readonly name: "销售方自然人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzrrgjDm";
        readonly name: "销售方自然人国籍代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "(销售方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdz";
        readonly name: "销售方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfdh";
        readonly name: "销售方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfkhh";
        readonly name: "销售方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzh";
        readonly name: "销售方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "（购买方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfmc";
        readonly name: "(购买方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfdz";
        readonly name: "购买方地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfdh";
        readonly name: "购买方电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfkhh";
        readonly name: "购买方开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfzh";
        readonly name: "购买方账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbr";
        readonly name: "购买方经办人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jbrsfzjhm";
        readonly name: "购买方经办人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbrlxdh";
        readonly name: "购买方经办人联系电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hjje";
        readonly name: "合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hjse";
        readonly name: "合计税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "jshj";
        readonly name: "价税合计";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "skyhmc";
        readonly name: "收款银行名称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skyhzh";
        readonly name: "收款银行账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jsfs";
        readonly name: "结算方式";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：现金02：银行转账03：票据04：第三方支付05：预付卡99：其他";
    }, {
        readonly key: "ysxwfsd";
        readonly name: "应税行为发生地";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "101：组织机构代码证102：营业执照103：税务登记证199：其他单位证件201：居民身份证202：军官证203：武警警官证204：士兵证205：军队离退休干部证206：残疾人证207：残疾军人证（1-8级）208：外国护照209：港澳同胞回乡证210：港澳居民来往内地通行证211：台胞证212：中华人民共和国往来港澳通行证213：台湾居民来往大陆通行证214：大陆居民往来台湾通行证215：外国人居留证216：外交官证217：使（领事）馆证218：海员证219：香港永久性居民身份证226：台湾身份证221：澳门特别行政区永久性居民身份证222：外国人身份证件223：高校毕业生自主创业证224：就业失业登记证225：退休证226：离休证227：中国护照228：城镇退役士兵自谋职业证229：随军家属身份证明230：中国人民解放军军官转业证书231：中国人民解放军义务兵退出现役证232：中国人民解放军士官退出现役证233：外国人永久居留身份证（外国人永久居留证）234：就业创业证235：香港特别行政区护照236：澳门特别行政区护照237：中华人民共和国港澳居民居住证238：中华人民共和国台湾居民居住证239：《中华人民共和国外国人工作许可证》（A类）240：《中华人民共和国外国人工作许可证》（B类）241：《中华人民共和国外国人工作许可证》（C类）291：出生医学证明299：其他个人证件";
    }, {
        readonly key: "dylzfphm";
        readonly name: "对应蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传；如果红冲的是税控发票，对应蓝字发票号码的填写规则为税控发票的发票代码+发票号码。";
    }, {
        readonly key: "hzqrxxdbh";
        readonly name: "红字确认信息单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "hzqrduuid";
        readonly name: "红字确认单uuid";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，此节点有内容红票开具时必传";
    }, {
        readonly key: "bz";
        readonly name: "备注";
        readonly type: "varchar";
        readonly length: "450";
        readonly required: "否";
        readonly description: "蓝票最长450位，红票最长382位。";
    }, {
        readonly key: "ip";
        readonly name: "服务器地址";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "macdz";
        readonly name: "mac地址";
        readonly type: "char";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备";
    }, {
        readonly key: "cpuid";
        readonly name: "CPU序列号";
        readonly type: "char";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zbxlh";
        readonly name: "主板序列号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "是";
        readonly description: "格式：yyyy-MM-dd HH:mm:ss";
    }, {
        readonly key: "sfzsxsfyhzhbq";
        readonly name: "是否展示销售方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsgmfyhzhbq";
        readonly name: "是否展示购买方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y：展示N：不展示";
    }, {
        readonly key: "sfzsxsfdzdh";
        readonly name: "是否展示销售方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfdzdh";
        readonly name: "是否展示购买方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "skrxm";
        readonly name: "收款人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fhrxm";
        readonly name: "复核人姓名";
        readonly type: "varchar";
        readonly length: "75";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fpkjfsDm";
        readonly name: "发票开具方式代码";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "4：第三方平台开票（乐企联用、他用开票）5：自建平台开票（乐企自用开票）";
    }, {
        readonly key: "mxxh";
        readonly name: "明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "dylzfpmxxh";
        readonly name: "对应蓝字发票明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "红票必传";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "拼装规则：“*商品服务简称（spfwjc）*”+“项目名称（xmmc）”";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xmmc";
        readonly name: "项目名称";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ggxh";
        readonly name: "规格型号";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "dw";
        readonly name: "单位";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sl";
        readonly name: "数量";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“单价”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "dj";
        readonly name: "单价";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“数量”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "je";
        readonly name: "金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "slv";
        readonly name: "增值税税率/征收率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18，2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hsje";
        readonly name: "含税金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kce";
        readonly name: "扣除额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fphxz";
        readonly name: "发票行性质";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "00：正常行01：折扣行02：被折扣行";
    }, {
        readonly key: "yhzcbs";
        readonly name: "优惠政策标识";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：简易征收02：稀土产品03：免税04：不征税05：先征后退06：100%先征后退07：50%先征后退08：按3%简易征收09：按5%简易征收10：按5%简易征收减按1.5%计征11：即征即退30%12：即征即退50%13：即征即退70%14：即征即退100%15：超税负3%即征即退16：超税负8%即征即退17：超税负12%即征即退18：超税负6%即征即退";
    }, {
        readonly key: "fjysmc";
        readonly name: "附加要素名称";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjyslx";
        readonly name: "附加要素类型";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjysz";
        readonly name: "附加要素值";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xh";
        readonly name: "序号";
        readonly type: "number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "pzlx";
        readonly name: "凭证类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：数电票02：增值税专用发票03：增值税普通发票04：营业税发票05：财政票据06：法院裁决书07：契税完税凭证08：其他发票类09：其他扣除凭证";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "varchar";
        readonly length: "12";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cepzhm";
        readonly name: "差额凭证号码";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kjrq";
        readonly name: "开具日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式必须为“yyyy-MM-dd”";
    }, {
        readonly key: "pzhjje";
        readonly name: "凭证合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "bckcje";
        readonly name: "本次扣除金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "该字段需要小于等于凭证合计金额。";
    }];
    readonly template: [{
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly ptbh: "";
        readonly fppz: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly cezslxDm: "";
        readonly sgfplxDm: "";
        readonly ckywsyzcDm: "";
        readonly zzsjzjtDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfzrrbz: "";
        readonly xsfzrrzjlxDm: "";
        readonly xsfzrrzjhm: "";
        readonly xsfzrrgjDm: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfnsrsbh: "";
        readonly gmfmc: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly jbrsfzjhm: "";
        readonly gmfjbrlxdh: "";
        readonly hjje: 0;
        readonly hjse: 0;
        readonly jshj: 0;
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly kprq: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly sfzsxsfdzdh: "";
        readonly sfzsgmfdzdh: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly fpmxList: [{
            readonly mxxh: 0;
            readonly dylzfpmxxh: 0;
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: 0;
            readonly slv: 0;
            readonly se: 0;
            readonly hsje: 0;
            readonly kce: 0;
            readonly sphfwssflhbbm: "";
            readonly fphxz: "";
            readonly yhzcbs: "";
        }];
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
        readonly cekcList: [{
            readonly xh: 0;
            readonly pzlx: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly cepzhm: "";
            readonly kjrq: "";
            readonly pzhjje: 0;
            readonly bckcje: 0;
            readonly bz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000119";
    readonly apiName: "机动车专用发票上传";
    readonly abilityCode: "202081";
    readonly serverCode: "JDCZYFPSC";
    readonly sourceDoc: "开票能力/乐企平台数字化电子发票（机动车）开票能力说明文档-V2.001.docx";
    readonly sectionTitle: "12.机动车专用发票上传";
    readonly fields: [{
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "直连单位ID";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票";
    }, {
        readonly key: "lzfpbz";
        readonly name: "是否蓝字发票";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "0：蓝字发票1：红字发票";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "date";
        readonly length: "-";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "是";
        readonly description: "详见附件一代码表《证件类型》，限制仅可为以下身份证件类型：201、238、237、210、213、233、227。";
    }, {
        readonly key: "qyDm";
        readonly name: "区域代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "详见附件一代码表《区域代码》";
    }, {
        readonly key: "tdys";
        readonly name: "特定要素";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "14：机动车";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "(销售方)统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "(销售方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdz";
        readonly name: "(销售方)地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfdh";
        readonly name: "(销售方)电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfkhh";
        readonly name: "(销售方)开户银行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzh";
        readonly name: "(销售方)账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skyhmc";
        readonly name: "收款银行名称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skyhzh";
        readonly name: "收款银行账号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "skrxm";
        readonly name: "收款人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fhrxm";
        readonly name: "复核人姓名";
        readonly type: "varchar";
        readonly length: "75";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fpkjfsDm";
        readonly name: "发票开具方式代码";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "4：第三方平台开票（乐企联用、他用开票）5：自建平台开票（乐企自用开票）";
    }, {
        readonly key: "gmfmc";
        readonly name: "(购买方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "(购买方)统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfdz";
        readonly name: "(购买方)地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfdh";
        readonly name: "(购买方)电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfkhh";
        readonly name: "(购买方)开户行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfzh";
        readonly name: "(购买方)账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbr";
        readonly name: "购买方经办人姓名";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "jbrsfzjhm";
        readonly name: "购买方经办人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfjbrlxdh";
        readonly name: "购买方经办人联系电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "slqrID";
        readonly name: "刷脸确认ID";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时不允许填写；是否蓝字发票标志为0时，非必填，仅当锁定机动车合格证触发刷脸认证时必须填写";
    }, {
        readonly key: "dylzfphm";
        readonly name: "对应蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，必填；如果红冲的是税控发票，对应蓝字发票号码的填写规则为税控发票的发票代码+发票号码";
    }, {
        readonly key: "hzqrxxdbh";
        readonly name: "红字确认信息单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，必填";
    }, {
        readonly key: "hzqrduuid";
        readonly name: "红字确认单uuid";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，必填";
    }, {
        readonly key: "jazslxDm";
        readonly name: "减按征税类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "放弃免税、3%减按1%开票优惠政策原因代码，可选54、55、空；54：前期已开具3%征收率的发票，发生销售折让、中止或者退回等情形需要开具3%征收率的红字发票，或者开票有误需要重新开具3%征收率的发票；55：因为实际经营业务需要，放弃享受减按1%征收率征收增值税政策。";
    }, {
        readonly key: "jsfs";
        readonly name: "结算方式";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "详见附件一代码表《结算方式》";
    }, {
        readonly key: "ysxwfsd";
        readonly name: "应税行为发生地";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "bz";
        readonly name: "备注";
        readonly type: "varchar";
        readonly length: "450";
        readonly required: "否";
        readonly description: "蓝票最长450位，红票最长382位。";
    }, {
        readonly key: "ip";
        readonly name: "服务器地址";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备信息";
    }, {
        readonly key: "macdz";
        readonly name: "mac地址";
        readonly type: "char";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备信息";
    }, {
        readonly key: "cpuid";
        readonly name: "CPU序列号";
        readonly type: "char";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zbxlh";
        readonly name: "主板序列号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "sfzsxsfyhzhbq";
        readonly name: "是否展示销售方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfyhzhbq";
        readonly name: "是否展示购买方银行账号标签";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsxsfdzdh";
        readonly name: "是否展示销售方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "sfzsgmfdzdh";
        readonly name: "是否展示购买方地址电话";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "否";
        readonly description: "Y:展示N:不展示";
    }, {
        readonly key: "jshj";
        readonly name: "价税合计";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hjse";
        readonly name: "合计税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hjje";
        readonly name: "合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "mxxh";
        readonly name: "明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "dylzfpmxxh";
        readonly name: "对应蓝字发票明细序号";
        readonly type: "Number";
        readonly length: "8";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，必填";
    }, {
        readonly key: "xmmc";
        readonly name: "项目名称";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "拼装规则：“*商品服务简称（spfwjc）*”+“项目名称（xmmc）”";
    }, {
        readonly key: "clsbdh";
        readonly name: "车辆识别代号";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "除机动车生产企业外的企业销售车辆开具机动车专用发票时，必须填写VIN码信息；销方为机动车生产企业时，销售自产车非必填，若为进口车辆或国内购进车，则必填";
    }, {
        readonly key: "dw";
        readonly name: "单位";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "固定为“辆”";
    }, {
        readonly key: "sl";
        readonly name: "数量";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "蓝票必填，只能填写整数；对于填写车辆识别代号开具的，“数量”只能为1，；不填写车辆识别代号开具的，“数量”为正整数";
    }, {
        readonly key: "dj";
        readonly name: "单价";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "蓝票必填";
    }, {
        readonly key: "je";
        readonly name: "金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "slv";
        readonly name: "增值税税率/征收率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hsje";
        readonly name: "含税金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fphxz";
        readonly name: "发票行性质";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "00：正常行01：折扣行02：被折扣行";
    }, {
        readonly key: "yhzcbs";
        readonly name: "优惠政策标识";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "详见附件一代码表《优惠政策标识》";
    }, {
        readonly key: "fjysmc";
        readonly name: "附加要素名称";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjyslx";
        readonly name: "附加要素类型";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fjysz";
        readonly name: "附加要素值";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "";
    }];
    readonly template: [{
        readonly ptbh: "";
        readonly fppz: "";
        readonly fphm: "";
        readonly lzfpbz: "";
        readonly kprq: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly skrxm: "";
        readonly fhrxm: "";
        readonly fpkjfsDm: "";
        readonly tdys: "";
        readonly qyDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly skyhmc: "";
        readonly skyhzh: "";
        readonly gmfnsrsbh: "";
        readonly gmfmc: "";
        readonly gmfdz: "";
        readonly gmfdh: "";
        readonly gmfkhh: "";
        readonly gmfzh: "";
        readonly gmfjbr: "";
        readonly jbrsfzjhm: "";
        readonly gmfjbrlxdh: "";
        readonly slqrID: "";
        readonly hjje: 0;
        readonly hjse: 0;
        readonly jshj: 0;
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly bz: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly sfzsxsfyhzhbq: "";
        readonly sfzsgmfyhzhbq: "";
        readonly jazslxDm: "";
        readonly fpmxList: [{
            readonly mxxh: 0;
            readonly dylzfpmxxh: 0;
            readonly xmmc: "";
            readonly sphfwssflhbbm: "";
            readonly spfwjc: "";
            readonly hwhyslwfwmc: "";
            readonly clsbdh: "";
            readonly dw: "";
            readonly sl: "";
            readonly dj: "";
            readonly je: 0;
            readonly slv: 0;
            readonly se: 0;
            readonly hsje: 0;
            readonly fphxz: "";
            readonly yhzcbs: "";
        }];
        readonly fjysList: [{
            readonly fjysmc: "";
            readonly fjyslx: "";
            readonly fjysz: "";
        }];
    }];
}, {
    readonly apiIdentity: "10000000120";
    readonly apiName: "机动车销售统一发票上传";
    readonly abilityCode: "202081";
    readonly serverCode: "JDCXSTYFPSC";
    readonly sourceDoc: "开票能力/乐企平台数字化电子发票（机动车）开票能力说明文档-V2.001.docx";
    readonly sectionTitle: "11.机动车销售统一发票上传";
    readonly fields: [{
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "直连单位ID";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "03：机动车销售统一发票";
    }, {
        readonly key: "lzfpbz";
        readonly name: "是否蓝字发票";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "0：蓝字发票1：红字发票";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "date";
        readonly length: "-";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "是";
        readonly description: "详见附件一代码表《证件类型》，限制仅可为以下身份证件类型：201、238、237、210、213、233、227。";
    }, {
        readonly key: "qyDm";
        readonly name: "区域代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "详见附件一代码表《区域代码》";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "(销售方)统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "(销售方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdz";
        readonly name: "(销售方)地址";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfdh";
        readonly name: "(销售方)电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfkhh";
        readonly name: "(销售方)开户银行";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "xsfzh";
        readonly name: "(销售方)账号";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfzrrbz";
        readonly name: "购买方自然人标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "Y：是N：否";
    }, {
        readonly key: "gmfmc";
        readonly name: "(购买方)名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "(购买方)统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "购买方自然人标志为N时必填。";
    }, {
        readonly key: "zrrzjlxDm";
        readonly name: "（购买方）自然人证件类型";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "蓝票购买方自然人标志为Y时必填，红票与蓝票一致。201:居民身份证；208：外国护照；210：港澳居民来往内地通行证;213：台湾居民来往大陆通行证;227：中国护照;233：外国人永久居留身份证;237：中华人民共和国港澳居民居住证;238：中华人民共和国台湾居民居住证；299：其他个人证件";
    }, {
        readonly key: "zrrzjhm";
        readonly name: "（购买方）自然人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "蓝票购买方自然人标志为Y时必填，红票与蓝票一致。";
    }, {
        readonly key: "zrrgjDm";
        readonly name: "（购买方）自然人国籍代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "蓝票购买方自然人标志为Y时必填，红票与蓝票一致。";
    }, {
        readonly key: "gmfdh";
        readonly name: "(购买方)电话";
        readonly type: "varchar";
        readonly length: "60";
        readonly required: "否";
        readonly description: "购买方自然人标识为Y时，填写内容需按照手机号格式进行校验";
    }, {
        readonly key: "fpkjfsDm";
        readonly name: "发票开具方式代码";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "4：第三方平台开票（乐企联用、他用开票）5：自建平台开票（乐企自用开票）";
    }, {
        readonly key: "slqrID";
        readonly name: "刷脸确认ID";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时不允许填写；是否蓝字发票标志为0时，非必填，仅当锁定机动车合格证触发刷脸认证时必须填写";
    }, {
        readonly key: "dylzfphm";
        readonly name: "对应蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，必填；如果红冲的是税控发票，对应蓝字发票号码的填写规则为税控发票的发票代码+发票号码";
    }, {
        readonly key: "hzqrxxdbh";
        readonly name: "红字确认信息单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，必填";
    }, {
        readonly key: "hzqrduuid";
        readonly name: "红字确认单uuid";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "否";
        readonly description: "是否蓝字发票标志为1时，必填";
    }, {
        readonly key: "jazslxDm";
        readonly name: "减按征税类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "放弃免税、3%减按1%开票优惠政策原因代码，可选54、55、空；54：前期已开具3%征收率的发票，发生销售折让、中止或者退回等情形需要开具3%征收率的红字发票，或者开票有误需要重新开具3%征收率的发票；55：因为实际经营业务需要，放弃享受减按1%征收率征收增值税政策。";
    }, {
        readonly key: "jsfs";
        readonly name: "结算方式";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "详见附件一代码表《结算方式》";
    }, {
        readonly key: "ysxwfsd";
        readonly name: "应税行为发生地";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "ip";
        readonly name: "服务器地址";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备信息";
    }, {
        readonly key: "macdz";
        readonly name: "mac地址";
        readonly type: "char";
        readonly length: "20";
        readonly required: "是";
        readonly description: "需自行采集开票申请设备信息";
    }, {
        readonly key: "cpuid";
        readonly name: "CPU序列号";
        readonly type: "char";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "zbxlh";
        readonly name: "主板序列号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cllx";
        readonly name: "车辆类型";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "填写《查询机动车合格证信息》接口返回信息中的“车辆名称”，允许修改";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "varchar";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "拼装规则：“*商品服务简称（spfwjc）*”+“车辆类型（cllx）”";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "varchar";
        readonly length: "120";
        readonly required: "是";
        readonly description: "对应税收分类编码信息中“商品和服务分类简称（sphfwfljc）”";
    }, {
        readonly key: "clsbdh";
        readonly name: "车辆识别代号";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "是";
        readonly description: "车辆识别代号与车架号码同时存在时，填写车辆识别代号";
    }, {
        readonly key: "cpxh";
        readonly name: "厂牌型号";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "是";
        readonly description: "填写《查询机动车合格证信息》接口返回信息中的“厂牌型号”，进口车允许修改，国产车不允许修改";
    }, {
        readonly key: "cd";
        readonly name: "产地";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hgzbh";
        readonly name: "合格证编号";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "国产车填写《查询机动车合格证信息》接口返回信息中的“合格证编号”， 进口车必须为空。不允许修改";
    }, {
        readonly key: "jkzmsh";
        readonly name: "进口证明书号";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "进口车填写《查询机动车合格证信息》接口返回信息中的“进口证明书号”，国产车必须为空。不允许修改";
    }, {
        readonly key: "sjdh";
        readonly name: "商检单号";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "fdjhm";
        readonly name: "发动机号码";
        readonly type: "varchar";
        readonly length: "160";
        readonly required: "是";
        readonly description: "填写《查询机动车合格证信息》接口返回信息中的“发动机号码”，不允许修改";
    }, {
        readonly key: "scqymc";
        readonly name: "生产企业名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "zzhjkrq";
        readonly name: "制造或进口日期";
        readonly type: "Date";
        readonly length: "-";
        readonly required: "是";
        readonly description: "yyyy-MM-dd";
    }, {
        readonly key: "jshj";
        readonly name: "价税合计";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "slv";
        readonly name: "增值税税率/征收率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "bhsj";
        readonly name: "不含税价";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "wspzhm";
        readonly name: "完税凭证号码";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cldw";
        readonly name: "车辆吨位";
        readonly type: "number";
        readonly length: "16,4";
        readonly required: "否";
        readonly description: "填写《查询机动车合格证信息》接口返回信息中的“额定载质量”，不允许修改";
    }, {
        readonly key: "xcrs";
        readonly name: "限乘人数";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "否";
        readonly description: "填写《查询机动车合格证信息》接口返回信息中的“限乘人数”，不允许修改";
    }, {
        readonly key: "yhzcbs";
        readonly name: "优惠政策标识";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "详见附件一代码表《优惠政策标识》";
    }];
    readonly template: [{
        readonly ptbh: "";
        readonly fppz: "";
        readonly lzfpbz: "";
        readonly fphm: "";
        readonly kprq: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly qyDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly xsfdz: "";
        readonly xsfdh: "";
        readonly xsfkhh: "";
        readonly xsfzh: "";
        readonly gmfzrrbz: "";
        readonly gmfmc: "";
        readonly gmfnsrsbh: "";
        readonly zrrzjlxDm: "";
        readonly zrrzjhm: "";
        readonly zrrgjDm: "";
        readonly gmfdh: "";
        readonly fpkjfsDm: "";
        readonly slqrID: "";
        readonly dylzfphm: "";
        readonly hzqrxxdbh: "";
        readonly hzqrduuid: "";
        readonly jazslxDm: "";
        readonly jsfs: "";
        readonly ysxwfsd: "";
        readonly ip: "";
        readonly macdz: "";
        readonly cpuid: "";
        readonly zbxlh: "";
        readonly cllx: "";
        readonly sphfwssflhbbm: "";
        readonly hwhyslwfwm: "";
        readonly spfwjc: "";
        readonly clsbdh: "";
        readonly cpxh: "";
        readonly cd: "";
        readonly hgzbh: "";
        readonly jkzmsh: "";
        readonly sjdh: "";
        readonly fdjhm: "";
        readonly scqymc: "";
        readonly zzhjkrq: "";
        readonly jshj: 0;
        readonly slv: 0;
        readonly se: 0;
        readonly bhsj: 0;
        readonly wspzhm: "";
        readonly cldw: 0;
        readonly xcrs: "";
        readonly yhzcbs: "";
    }];
}, {
    readonly apiIdentity: "100000002";
    readonly apiName: "查询全电发票上传结果";
    readonly abilityCode: "202007";
    readonly serverCode: "CXQDFPSCJG";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "12.查询数电票上传结果";
    readonly fields: [{
        readonly key: "sllsh";
        readonly name: "受理流水号";
        readonly type: "String";
        readonly length: "40";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly sllsh: "";
    };
}, {
    readonly apiIdentity: "10000000219";
    readonly apiName: "查询机动车合格证信息";
    readonly abilityCode: "202081";
    readonly serverCode: "CZJDCHGZXX";
    readonly sourceDoc: "开票能力/乐企平台数字化电子发票（机动车）开票能力说明文档-V2.001.docx";
    readonly sectionTitle: "9.查询机动车合格证信息";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号/统一社会信用代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "开票纳税人识别号/统一社会信用代码";
    }, {
        readonly key: "clsbdh";
        readonly name: "车辆识别代号";
        readonly type: "varchar";
        readonly length: "3000";
        readonly required: "是";
        readonly description: "车架号或者车辆识别代号，多个时以“,”分隔，最多限制100个。";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly clsbdh: "";
    };
}, {
    readonly apiIdentity: "100000003";
    readonly apiName: "全电红字确认单申请接口";
    readonly abilityCode: "202007";
    readonly serverCode: "QDHZQRDSQ";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "13.数电红字确认单申请";
    readonly fields: [{
        readonly key: "lrfsf";
        readonly name: "录入方身份";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "0：销方1：购方";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "销售方纳税人识别号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "销售方名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "购买方纳税人识别号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "gmfmc";
        readonly name: "购买方名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzfpdm";
        readonly name: "蓝字发票代码";
        readonly type: "varchar";
        readonly length: "12";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "lzfphm";
        readonly name: "蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sfzzfpbz";
        readonly name: "是否纸质发票标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "Y：纸质发票N：电子发票";
    }, {
        readonly key: "lzkprq";
        readonly name: "蓝字发票开票日期";
        readonly type: "datetime";
        readonly length: "";
        readonly required: "是";
        readonly description: "yyyy-MM-dd HH:mm:ss";
    }, {
        readonly key: "lzhjje";
        readonly name: "蓝字发票合计金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzhjse";
        readonly name: "蓝字发票合计税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "lzfppzDm";
        readonly name: "蓝字发票票种代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01: 增值税专用发票02: 普通发票03: 机动车统一销售发票04: 二手车统一销售发票";
    }, {
        readonly key: "lzfpTdyslxDm";
        readonly name: "蓝字发票特定要素类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：成品油发票02：稀土发票03：建筑服务发票04：货物运输服务发票05：不动产销售服务发票06：不动产租赁服务发票07：代收车船税08：通行费09：旅客运输服务发票10：医疗服务（住院）发票11：医疗服务（门诊）发票12：自产农产品销售发票13拖拉机和联合收割机发票14：机动车15：二手车16：农产品收购发票17：光伏收购发票18：卷烟发票20：农产品";
    }, {
        readonly key: "hzcxje";
        readonly name: "红字冲销金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hzcxse";
        readonly name: "红字冲销税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "chyyDm";
        readonly name: "红字发票冲红原因代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：开票有误02：销货退回03：服务中止04：销售折让";
    }, {
        readonly key: "lzmxxh";
        readonly name: "蓝字发票明细序号";
        readonly type: "number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xh";
        readonly name: "序号";
        readonly type: "number";
        readonly length: "8";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sphfwssflhbbm";
        readonly name: "商品和服务税收分类合并编码";
        readonly type: "String";
        readonly length: "19";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hwhyslwfwmc";
        readonly name: "货物或应税劳务、服务名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "spfwjc";
        readonly name: "商品服务简称";
        readonly type: "String";
        readonly length: "120";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xmmc";
        readonly name: "项目名称";
        readonly type: "varchar";
        readonly length: "600";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ggxh";
        readonly name: "规格型号";
        readonly type: "varchar";
        readonly length: "150";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "dw";
        readonly name: "单位";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "必须与蓝票“单位”保持一致。";
    }, {
        readonly key: "fpspdj";
        readonly name: "单价";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“数量”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "fpspsl";
        readonly name: "数量";
        readonly type: "varchar";
        readonly length: "25";
        readonly required: "否";
        readonly description: "如“单价”栏次非空，则本栏次必须非空";
    }, {
        readonly key: "je";
        readonly name: "金额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sl1";
        readonly name: "税率";
        readonly type: "number";
        readonly length: "16,6";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "se";
        readonly name: "税额";
        readonly type: "number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly lrfsf: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly gmfnsrsbh: "";
        readonly gmfmc: "";
        readonly lzfpdm: "";
        readonly lzfphm: "";
        readonly sfzzfpbz: "";
        readonly lzkprq: "";
        readonly lzhjje: 0;
        readonly lzhjse: 0;
        readonly lzfppzDm: "";
        readonly lzfpTdyslxDm: "";
        readonly hzcxje: 0;
        readonly hzcxse: 0;
        readonly chyyDm: "";
        readonly hzqrdmxList: [{
            readonly lzmxxh: 0;
            readonly xh: 0;
            readonly sphfwssflhbbm: "";
            readonly hwhyslwfwmc: "";
            readonly spfwjc: "";
            readonly xmmc: "";
            readonly ggxh: "";
            readonly dw: "";
            readonly fpspdj: "";
            readonly fpspsl: "";
            readonly je: 0;
            readonly sl1: 0;
            readonly se: 0;
        }];
    };
}, {
    readonly apiIdentity: "10000000319";
    readonly apiName: "机动车合格证锁定解锁";
    readonly abilityCode: "202081";
    readonly serverCode: "JDCHGZSDJS";
    readonly sourceDoc: "开票能力/乐企平台数字化电子发票（机动车）开票能力说明文档-V2.001.docx";
    readonly sectionTitle: "10.机动车合格证锁定解锁";
    readonly fields: [{
        readonly key: "ywlsh";
        readonly name: "业务流水号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "是";
        readonly description: "“使用单位id”+“直连单位id”+“32位随机生成数”";
    }, {
        readonly key: "ywlxDm";
        readonly name: "业务类型代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：预申请蓝字发票开具03：撤销蓝字发票开具预申请";
    }, {
        readonly key: "fppz";
        readonly name: "发票票种";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票03：机动车销售统一发票";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fpkprq";
        readonly name: "发票开票日期";
        readonly type: "Date";
        readonly length: "";
        readonly required: "是";
        readonly description: "预开具蓝字发票生成日期，格式：yyyy-MM-dd HH:mm:ss";
    }, {
        readonly key: "kpr";
        readonly name: "开票人";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjhm";
        readonly name: "开票人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprzjlx";
        readonly name: "开票人证件类型";
        readonly type: "varchar";
        readonly length: "4";
        readonly required: "是";
        readonly description: "详见附件一代码表《证件类型》，限制仅可为以下身份证件类型：201、238、237、210、213、233、227。";
    }, {
        readonly key: "gmfzrrbz";
        readonly name: "购买方自然人标志";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "Y：是，N：否发票票种03时允许为Y/N；发票票种为01时必须为N。";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "购买方纳税人识别号";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "购买方自然人标志为N时必填。";
    }, {
        readonly key: "gmfmc";
        readonly name: "购买方名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "zrrzjlxDm";
        readonly name: "（购买方）自然人证件类型";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "购买方自然人标志为Y时必填。201:居民身份证；208：外国护照；210：港澳居民来往内地通行证;213：台湾居民来往大陆通行证;227：中国护照;233：外国人永久居留身份证;237：中华人民共和国港澳居民居住证;238：中华人民共和国台湾居民居住证；299：其他个人证件";
    }, {
        readonly key: "zrrzjhm";
        readonly name: "（购买方）自然人证件号码";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "否";
        readonly description: "购买方自然人标志为Y时必填。";
    }, {
        readonly key: "zrrgjDm";
        readonly name: "（购买方）自然人国籍代码";
        readonly type: "varchar";
        readonly length: "3";
        readonly required: "否";
        readonly description: "购买方自然人标志为Y时必填。";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "销售方纳税人识别号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfdjxh";
        readonly name: "销售方登记序号";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfmc";
        readonly name: "销售方名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ewmid";
        readonly name: "刷脸二维码id";
        readonly type: "varchar";
        readonly length: "50";
        readonly required: "否";
        readonly description: "仅当触发需要刷脸并完成刷脸后必填";
    }, {
        readonly key: "jdctzclsbdhuuid";
        readonly name: "机动车台账车辆识别代号唯一ID";
        readonly type: "varchar";
        readonly length: "40";
        readonly required: "否";
        readonly description: "车辆制造日期在2021年5月1日（不含）前的机动车必须为空，制造日期在2021年5月1日（含）之后的机动车必填。";
    }, {
        readonly key: "clsbdh";
        readonly name: "车辆识别代号";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "dj";
        readonly name: "单价";
        readonly type: "Number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "不含税单价";
    }, {
        readonly key: "bhsje";
        readonly name: "不含税金额";
        readonly type: "Number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "发票明细不含税金额";
    }];
    readonly template: {
        readonly ywlsh: "";
        readonly ywlxDm: "";
        readonly fppz: "";
        readonly fphm: "";
        readonly fpkprq: "";
        readonly kpr: "";
        readonly kprzjhm: "";
        readonly kprzjlx: "";
        readonly gmfzrrbz: "";
        readonly gmfnsrsbh: "";
        readonly gmfmc: "";
        readonly zrrzjlxDm: "";
        readonly zrrzjhm: "";
        readonly zrrgjDm: "";
        readonly xsfnsrsbh: "";
        readonly xsfdjxh: "";
        readonly xsfmc: "";
        readonly ewmid: "";
        readonly fpmxList: [{
            readonly jdctzclsbdhuuid: "";
            readonly clsbdh: "";
            readonly dj: 0;
            readonly bhsje: 0;
        }];
    };
}, {
    readonly apiIdentity: "100000004";
    readonly apiName: "全电红字确认单列表信息接口";
    readonly abilityCode: "202007";
    readonly serverCode: "CXQDHZQRDLB";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "11.查询数电红字确认单列表信息";
    readonly fields: [{
        readonly key: "yhjslx";
        readonly name: "用户角色类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "0：销方1：购方";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "（销售方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "条件必录，作为销方，必录";
    }, {
        readonly key: "xsfmc";
        readonly name: "（销售方）名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "条件必录，作为销方，必录";
    }, {
        readonly key: "gmfnsrsbh";
        readonly name: "（购买方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "条件必录，作为购方，必录";
    }, {
        readonly key: "gmfmc";
        readonly name: "（购买方）名称";
        readonly type: "varchar";
        readonly length: "300";
        readonly required: "否";
        readonly description: "条件必录，作为购方，必录";
    }, {
        readonly key: "lrfsf";
        readonly name: "录入方身份";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "0：销方1：购方";
    }, {
        readonly key: "lrrqq";
        readonly name: "录入日期起";
        readonly type: "date";
        readonly length: "20";
        readonly required: "否";
        readonly description: "yyyy-MM-dd";
    }, {
        readonly key: "lrrqz";
        readonly name: "录入日期止";
        readonly type: "date";
        readonly length: "20";
        readonly required: "否";
        readonly description: "yyyy-MM-dd";
    }, {
        readonly key: "lzfpdm";
        readonly name: "蓝字发票代码";
        readonly type: "varchar";
        readonly length: "12";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "lzfphm";
        readonly name: "蓝字发票号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hzfpxxqrdbh";
        readonly name: "红字确认单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "hzqrxxztDm";
        readonly name: "红字确认信息状态代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01：无需确认02：销方录入待购方确认03：购方录入待销方确认04：购销双方已确认05：作废（销方录入购方否认）06：作废（购方录入销方否认）07：作废（超72小时未确认）08：（发起方撤销）09：作废（确认后撤销）10：作废（异常凭证）";
    }, {
        readonly key: "fppzDm";
        readonly name: "发票票种代码";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "否";
        readonly description: "01: 增值税专用发票02: 普通发票03: 机动车统一销售发票04: 二手车统一销售发票05：铁路客票电子发票06：航空运输电子客票行程单";
    }, {
        readonly key: "pageNumber";
        readonly name: "页码";
        readonly type: "number";
        readonly length: "10";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "pageSize";
        readonly name: "每页数量";
        readonly type: "number";
        readonly length: "10";
        readonly required: "否";
        readonly description: "";
    }];
    readonly template: {
        readonly yhjslx: "";
        readonly xsfnsrsbh: "";
        readonly xsfmc: "";
        readonly gmfnsrsbh: "";
        readonly gmfmc: "";
        readonly lrfsf: "";
        readonly lrrqq: "";
        readonly lrrqz: "";
        readonly lzfpdm: "";
        readonly lzfphm: "";
        readonly hzfpxxqrdbh: "";
        readonly hzqrxxztDm: "";
        readonly fppzDm: "";
        readonly pageNumber: 0;
        readonly pageSize: 0;
    };
}, {
    readonly apiIdentity: "10000000419";
    readonly apiName: "机动车合格证锁定解锁";
    readonly abilityCode: "202081";
    readonly serverCode: "JDCZZSZYFPSJDCSQ";
    readonly sourceDoc: "开票能力/乐企平台数字化电子发票（机动车）开票能力说明文档-V2.001.docx";
    readonly sectionTitle: "14.机动车专用发票数据导出申请";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号";
        readonly type: "varchar";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprqq";
        readonly name: "开票日期起";
        readonly type: "date";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式：yyyy-MM-dd，与开票日期止须同时填写或不填写，与开票日期止必须在同一个年月";
    }, {
        readonly key: "kprqz";
        readonly name: "开票日期止";
        readonly type: "date";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式：yyyy-MM-dd，与开票日期起须同时填写或不填写，与开票日期起必须在同一个年月";
    }, {
        readonly key: "sdfphm";
        readonly name: "数电发票号码";
        readonly type: "varchar";
        readonly length: "3000";
        readonly required: "否";
        readonly description: "数电发票号码，多个时以“,”分隔，单次最多申请100张发票；发票类型、开票日期起止均为空时，允许填写数电发票号码进行申请导出";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly kprqq: "";
        readonly kprqz: "";
        readonly sdfphm: "";
    };
}, {
    readonly apiIdentity: "100000005";
    readonly apiName: "全电红字确认单明细信息接口";
    readonly abilityCode: "202007";
    readonly serverCode: "CXQDHZQRDMX";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "9.查询数电红字确认单明细信息";
    readonly fields: [{
        readonly key: "uuid";
        readonly name: "红字确认单UUID";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "xsfnsrsbh";
        readonly name: "（销售方）统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "26";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly uuid: "";
        readonly xsfnsrsbh: "";
    };
}, {
    readonly apiIdentity: "10000000519";
    readonly apiName: "机动车合格证锁定解锁";
    readonly abilityCode: "202081";
    readonly serverCode: "JDCZZSZYFPSJDCSQFK";
    readonly sourceDoc: "开票能力/乐企平台数字化电子发票（机动车）开票能力说明文档-V2.001.docx";
    readonly sectionTitle: "15.机动车专用发票数据导出申请反馈";
    readonly fields: [{
        readonly key: "sllsh";
        readonly name: "受理流水号";
        readonly type: "String";
        readonly length: "40";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "wjxh";
        readonly name: "文件序号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "是";
        readonly description: "导出文件超过5M大小时会进行拆分，初始文件序号为1。";
    }];
    readonly template: {
        readonly sllsh: "";
        readonly wjxh: "";
    };
}, {
    readonly apiIdentity: "100000006";
    readonly apiName: "全电红字确认单确认接口";
    readonly abilityCode: "202007";
    readonly serverCode: "QDHZQRDQR";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "14.数电红字确认单确认";
    readonly fields: [{
        readonly key: "xsfnsrsbh";
        readonly name: "统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "uuid";
        readonly name: "红字确认单UUID";
        readonly type: "varchar";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hzqrdbh";
        readonly name: "红字确认单编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "qrlx";
        readonly name: "确认类型";
        readonly type: "varchar";
        readonly length: "1";
        readonly required: "是";
        readonly description: "Y：同意N：不同意C：撤销";
    }];
    readonly template: {
        readonly xsfnsrsbh: "";
        readonly uuid: "";
        readonly hzqrdbh: "";
        readonly qrlx: "";
    };
}, {
    readonly apiIdentity: "200000000";
    readonly apiName: "查询授信额度";
    readonly abilityCode: "202007";
    readonly serverCode: "CXSXED";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "2.查询发票额度";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号/统一社会信用代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "申领发票的纳税人识别号或统一社会信用代码";
    }];
    readonly template: {
        readonly nsrsbh: "";
    };
}, {
    readonly apiIdentity: "200000001";
    readonly apiName: "下载退回授信额度";
    readonly abilityCode: "202007";
    readonly serverCode: "XZTHSXED";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "3.下载/退回发票额度";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号/统一社会信用代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "申领发票的纳税人识别号或统一社会信用代码";
    }, {
        readonly key: "ptbh";
        readonly name: "平台编号";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sqlx";
        readonly name: "申请类型";
        readonly type: "varchar";
        readonly length: "2";
        readonly required: "是";
        readonly description: "0：下载1：退回";
    }, {
        readonly key: "sqed";
        readonly name: "申请额度";
        readonly type: "number";
        readonly length: "20,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ywlsh";
        readonly name: "业务流水号";
        readonly type: "varchar";
        readonly length: "100";
        readonly required: "是";
        readonly description: "“使用单位id”+“直连单位id”+“32位随机生成数”";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly ptbh: "";
        readonly sqlx: "";
        readonly sqed: 0;
        readonly ywlsh: "";
    };
}, {
    readonly apiIdentity: "200000002";
    readonly apiName: "调整授信额度有效期";
    readonly abilityCode: "202007";
    readonly serverCode: "TZSXEDYXQ";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "4.调整发票额度有效期";
    readonly fields: [{
        readonly key: "xsfnsrsbh";
        readonly name: "统一社会信用代码/纳税人识别号/身份证件号码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sxedsq";
        readonly name: "发票额度属期";
        readonly type: "varchar";
        readonly length: "7";
        readonly required: "是";
        readonly description: "格式：yyyy-MM";
    }];
    readonly template: {
        readonly xsfnsrsbh: "";
        readonly sxedsq: "";
    };
}, {
    readonly apiIdentity: "200000004";
    readonly apiName: "查询纳税人风险信息";
    readonly abilityCode: "202007";
    readonly serverCode: "CXNSRFXXX";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "5.查询纳税人风险信息";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号/统一社会信用代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "开票纳税人识别号/统一社会信用代码";
    }];
    readonly template: {
        readonly nsrsbh: "";
    };
}, {
    readonly apiIdentity: "200000005";
    readonly apiName: "查询纳税人基本信息";
    readonly abilityCode: "202007";
    readonly serverCode: "CXNSRJBXX";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "6.查询纳税人基本信息";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号/统一社会信用代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "开票纳税人识别号/统一社会信用代码";
    }];
    readonly template: {
        readonly nsrsbh: "";
    };
}, {
    readonly apiIdentity: "200000007";
    readonly apiName: "查询税收分类编码信息";
    readonly abilityCode: "202007";
    readonly serverCode: "CXSSFLBM";
    readonly sourceDoc: "开票能力/乐企数字化电子发票（基础版）开票能力说明文档-V5.001.docx";
    readonly sectionTitle: "8.查询税收分类编码信息";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号/统一社会信用代码";
        readonly type: "varchar";
        readonly length: "20";
        readonly required: "是";
        readonly description: "开票纳税人识别号/统一社会信用代码";
    }, {
        readonly key: "sjc";
        readonly name: "时间戳";
        readonly type: "date";
        readonly length: "";
        readonly required: "否";
        readonly description: "格式：yyyyMMddHHmmss首次下载时为空；非首次下载时，传入上次下载返回的时间戳.格式：yyyyMMddHHmmss";
    }, {
        readonly key: "sjswjgdm";
        readonly name: "省级税务机关代码";
        readonly type: "varchar";
        readonly length: "11";
        readonly required: "否";
        readonly description: "";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly sjc: "";
        readonly sjswjgdm: "";
    };
}, {
    readonly apiIdentity: "300000001";
    readonly apiName: "查询发票风险信息接口";
    readonly abilityCode: "203067";
    readonly serverCode: "FPTSTXXXCX";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "4.发票风险信息查询";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票02：货物运输业增值税专用发票03：机动车销售统一发票04：增值税普通发票08：增值税电子专用发票10：增值税电子普通发票11：卷式发票14：通行费发票15：二手车销售统一发票81：电子发票（增值税专用发票）82：电子发票（普通发票）85：纸质发票（增值税专用发票）86：纸质发票（普通发票）51：电子发票（铁路电子客票）61：电子发票（航空运输客票电子行程单）83：机动车销售电子统一发票84：二手车销售电子统一发票87：纸质发票（机动车销售统一发票）88：纸质发票（二手车销售统一发票）";
    }, {
        readonly key: "qsrq";
        readonly name: "起始日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD（认定异常日期,起止日期不能跨月）";
    }, {
        readonly key: "zzrq";
        readonly name: "终止日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD（认定异常日期，起止日期不能跨越月）";
    }, {
        readonly key: "pagesize";
        readonly name: "每页数量";
        readonly type: "String";
        readonly length: "10";
        readonly required: "是";
        readonly description: "每页不超过2000";
    }, {
        readonly key: "scrollId";
        readonly name: "游标";
        readonly type: "String";
        readonly length: "200";
        readonly required: "否";
        readonly description: "初始调用可为空，后续调用按返回值上传";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly fplx: "";
        readonly qsrq: "";
        readonly zzrq: "";
        readonly pagesize: "";
        readonly scrollId: "";
    };
}, {
    readonly apiIdentity: "300000002";
    readonly apiName: "查询发票状态信息接口";
    readonly abilityCode: "203067";
    readonly serverCode: "FPZTXXCX";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "5.发票用途状态信息查询";
    readonly fields: [{
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票02：货物运输业增值税专用发票03：机动车销售统一发票04：增值税普通发票08：增值税电子专用发票10：增值税电子普通发票11：卷式发票14：通行费发票15：二手车销售统一发票81：电子发票（增值税专用发票）82：电子发票（普通发票）85：纸质发票（增值税专用发票）86：纸质发票（普通发票）51：电子发票（铁路电子客票）61：电子发票（航空运输客票电子行程单）83：机动车销售电子统一发票84：二手车销售电子统一发票87：纸质发票（机动车销售统一发票）88：纸质发票（二手车销售统一发票）";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "String";
        readonly length: "12";
        readonly required: "否";
        readonly description: "发票类型为：01、02、03、04、08、10、11、14、15传纸质发票代码，其他发票类型无需传入";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "发票类型为：01、02、03、04、08、10、11、14、15传纸质发票号码发票类型为：51、61、81、82、83、84、85、86、87、88传20位数字化电子发票号码";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }];
    readonly template: {
        readonly fplx: "";
        readonly fpdm: "";
        readonly fphm: "";
        readonly kprq: "";
    };
}, {
    readonly apiIdentity: "300000004";
    readonly apiName: "批量发票下载申请接口";
    readonly abilityCode: "203067";
    readonly serverCode: "PLFPXZSQ";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "1.批量发票下载申请";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "统一社会信用代码/纳税人识别号";
    }, {
        readonly key: "kprqq";
        readonly name: "开票日期起";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD当数据类型传3：自然人推送时，该数据项为推送日期起";
    }, {
        readonly key: "kprqz";
        readonly name: "开票日期止";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD当数据类型传3：自然人推送时，该数据项为推送日期止";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票02：货物运输业增值税专用发票03：机动车销售统一发票04：增值税普通发票08：增值税电子专用发票10：增值税电子普通发票11：卷式发票14：通行费发票15：二手车销售统一发票81：电子发票（增值税专用发票）82：电子发票（普通发票）85：纸质发票（增值税专用发票）86：纸质发票（普通发票）51：电子发票（铁路电子客票）61：电子发票（航空运输客票电子行程单）83：机动车销售电子统一发票84：二手车销售电子统一发票87：纸质发票（机动车销售统一发票）88：纸质发票（二手车销售统一发票）sjlx为3时，暂支持发票类型传入82、51、61";
    }, {
        readonly key: "sjlx";
        readonly name: "数据类型";
        readonly type: "String";
        readonly length: "1";
        readonly required: "是";
        readonly description: "1：进项票2：销项票3：自然人推送";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly kprqq: "";
        readonly kprqz: "";
        readonly fplx: "";
        readonly sjlx: "";
    };
}, {
    readonly apiIdentity: "300000005";
    readonly apiName: "批量发票下载申请反馈";
    readonly abilityCode: "203067";
    readonly serverCode: "PLFPXZSQFK";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "2.批量发票下载申请反馈";
    readonly fields: [{
        readonly key: "lsh";
        readonly name: "流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "是";
        readonly description: "数据包号，当数据量过大时会进行分包处理，首次查询时传入包号1，根据返回参数“总包数”，确定本次下载发票申请的总包数，再根据情况下载其他包号发票数据。";
    }];
    readonly template: {
        readonly lsh: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "300000006";
    readonly apiName: "增量下载发票信息接口";
    readonly abilityCode: "203067";
    readonly serverCode: "CXZLXZFPXX";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "3.查询增量下载发票信息";
    readonly fields: [{
        readonly key: "gjrq";
        readonly name: "归集日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD（当前日期前7天内的某一天或当天）";
    }, {
        readonly key: "nsrsbh";
        readonly name: "统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sjlx";
        readonly name: "数据类型";
        readonly type: "String";
        readonly length: "1";
        readonly required: "是";
        readonly description: "1：进项票2：销项票（已无效）";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票02：货物运输业增值税专用发票03：机动车销售统一发票04：增值税普通发票08：增值税电子专用发票10：增值税电子普通发票11：卷式发票14：通行费发票15：二手车销售统一发票81：电子发票（增值税专用发票）82：电子发票（普通发票）85：纸质发票（增值税专用发票）86：纸质发票（普通发票）51：电子发票（铁路电子客票）61：电子发票（航空运输客票电子行程单）83：机动车销售电子统一发票84：二手车销售电子统一发票87：纸质发票（机动车销售统一发票）88：纸质发票（二手车销售统一发票）";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "否";
        readonly description: "数据包号，当数据量过大时会进行分包处理，初始包号1";
    }];
    readonly template: {
        readonly gjrq: "";
        readonly nsrsbh: "";
        readonly sjlx: "";
        readonly fplx: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "300000009";
    readonly apiName: "发票查验接口";
    readonly abilityCode: "203059";
    readonly serverCode: "FPCY_NEW";
    readonly sourceDoc: "用票能力/乐企发票查验能力说明文档-V1.020 (1).docx";
    readonly sectionTitle: "1.发票查验（单张发票实时查询下载接口）";
    readonly fields: [{
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票02：货物运输业增值税专用发票03：机动车销售统一发票04：增值税普通发票08：增值税电子专用发票10：增值税电子普通发票11：卷式发票14：通行费发票15：二手车销售统一发票81：电子发票（增值税专用发票）82：电子发票（普通发票）85：纸质发票（增值税专用发票）86：纸质发票（普通发票）51：电子发票（铁路电子客票）61：电子发票（航空运输客票电子行程单）83：机动车销售电子统一发票84：二手车销售电子统一发票87：纸质发票（机动车销售统一发票）88：纸质发票（二手车销售统一发票）";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "String";
        readonly length: "12";
        readonly required: "否";
        readonly description: "发票类型为：01、02、03、04、08、10、11、14、15、85、86、87、88传纸质发票代码";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "发票类型为：01、02、03、04、08、10、11、14、15、85、86、87、88传纸质发票号码发票类型为：81、82、51、61、83、84传20位数字化电子发票号码";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "jym";
        readonly name: "校验码";
        readonly type: "String";
        readonly length: "32";
        readonly required: "否";
        readonly description: "校验码（后六位）";
    }, {
        readonly key: "kpje";
        readonly name: "开票金额";
        readonly type: "Number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "08：增值税电子专用发票、01：增值税专用发票、85：纸质发票（增值税专用发票）、02：货物运输业增值税专用发票，传开具金额(不含税)；03：机动车销售统一发票、87：纸质发票（机动车销售统一发票），传不含税价；15：二手车销售统一发票、84：二手车销售电子统一发票、88：纸质发票（二手车销售统一发票），传车价合计；81：电子发票（增值税专用发票）、82：电子发票（普通发票）、51：电子发票（铁路电子客票）、61：电子发票（航空运输客票电子行程单），传价税合计83：机动车销售电子统一发票，传价税合计";
    }, {
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly fplx: "";
        readonly fpdm: "";
        readonly fphm: "";
        readonly kprq: "";
        readonly jym: "";
        readonly kpje: 0;
        readonly nsrsbh: "";
    };
}, {
    readonly apiIdentity: "300000010";
    readonly apiName: "批量出口转内销发票信息查询接口";
    readonly abilityCode: "203067";
    readonly serverCode: "PLCKZNXFPXXCX";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "6.批量出口转内销发票信息查询";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sjgjrqq";
        readonly name: "数据归集日期起";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD数据归集起止日期不能跨月";
    }, {
        readonly key: "sjgjrqz";
        readonly name: "数据归集日期止";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD数据归集起止日期不能跨月";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票08：增值税电子专用发票81：电子发票（增值税专用发票）85：纸质发票（增值税专用发票）";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly sjgjrq: "";
        readonly sjgjrqz: "";
        readonly fplx: "";
    };
}, {
    readonly apiIdentity: "300000011";
    readonly apiName: "批量出口转内销海关缴款书信息查询接口";
    readonly abilityCode: "203067";
    readonly serverCode: "PLCKZNXHGJKSXXCX";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "7.批量出口转内销海关缴款书信息查询";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sjgjrqq";
        readonly name: "数据归集日期起";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD数据归集起止日期不能跨月";
    }, {
        readonly key: "sjgjrqz";
        readonly name: "数据归集日期止";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD数据归集起止日期不能跨月";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly sjgjrq: "";
        readonly sjgjrqz: "";
    };
}, {
    readonly apiIdentity: "300000013";
    readonly apiName: "批量增值税代扣代缴完税凭证下载申请反馈接口";
    readonly abilityCode: "203067";
    readonly serverCode: "PLZZSDKDJWSPZXZSQFK";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "9.批量增值税代扣代缴完税凭证下载申请反馈";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "是";
        readonly description: "数据包号，当数据量过大时会进行分包处理；新的流水号初次调用接口时包号为1，后续请求包号在返回参数总包数范围内顺序增加；";
    }];
    readonly template: {
        readonly pclsh: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "300000014";
    readonly apiName: "查询增量下载增值税代扣代缴完税凭证信息接口";
    readonly abilityCode: "203067";
    readonly serverCode: "CXZLXZZZSDKDJWSPZXX";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "10.查询增量下载增值税代扣代缴完税凭证信息";
    readonly fields: [{
        readonly key: "gjrq";
        readonly name: "归集日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD（当前日期前7天内的某一天或当天）";
    }, {
        readonly key: "kjywrsbh";
        readonly name: "扣缴义务人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "否";
        readonly description: "数据包号，当数据量过大时会进行分包处理；新的归集日期初次调用接口时包号为1，后续请求包号在返回参数总包数范围内顺序增加；";
    }];
    readonly template: {
        readonly gjrq: "";
        readonly kjywrsbh: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "300000015";
    readonly apiName: "批量消费税代扣代缴完税凭证下载申请接口";
    readonly abilityCode: "203067";
    readonly serverCode: "PLXFSDKDJWSPZXZSQ";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "11.批量消费税代扣代缴完税凭证下载申请";
    readonly fields: [{
        readonly key: "bkjnsrsbh";
        readonly name: "被扣缴纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "购方统一社会信用代码/纳税人识别号";
    }, {
        readonly key: "tfrqq";
        readonly name: "填发日期起";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "tfrqz";
        readonly name: "填发日期止";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }];
    readonly template: {
        readonly bkjnsrsbh: "";
        readonly tfrqq: "";
        readonly tfrqz: "";
    };
}, {
    readonly apiIdentity: "300000016";
    readonly apiName: "批量消费税代扣代缴完税凭证下载申请反馈接口";
    readonly abilityCode: "203067";
    readonly serverCode: "PLXFSDKDJWSPZXZSQFK";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "12.批量消费税代扣代缴完税凭证下载申请反馈";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "是";
        readonly description: "数据包号，当数据量过大时会进行分包处理；新的流水号初次调用接口时包号为1，后续请求包号在返回参数总包数范围内顺序增加；";
    }];
    readonly template: {
        readonly pclsh: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "300000017";
    readonly apiName: "查询增量下载消费税代扣代缴完税凭证信息接口";
    readonly abilityCode: "203067";
    readonly serverCode: "CXZLXZXFSDKDJWSPZXX";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "13.查询增量下载消费税代扣代缴完税凭证信息";
    readonly fields: [{
        readonly key: "gjrq";
        readonly name: "归集日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD（当前日期前7天内的某一天或当天）";
    }, {
        readonly key: "bkjnsrsbh";
        readonly name: "被扣缴纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "购方纳税人识别号/统一社会信用代码";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "否";
        readonly description: "数据包号，当数据量过大时会进行分包处理；新的归集日期初次调用接口时包号为1，后续请求包号在返回参数总包数范围内顺序增加；";
    }];
    readonly template: {
        readonly gjrq: "";
        readonly bkjnsrsbh: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "300000018";
    readonly apiName: "批量海关缴款书下载申请接口";
    readonly abilityCode: "203067";
    readonly serverCode: "PLHGJKSXZSQ";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "14.批量海关缴款书下载申请";
    readonly fields: [{
        readonly key: "nsrsbh";
        readonly name: "统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "统一社会信用代码/纳税人识别号";
    }, {
        readonly key: "hgjkslx";
        readonly name: "海关缴款书类型";
        readonly type: "String";
        readonly length: "1";
        readonly required: "是";
        readonly description: "1增值税海关缴款书2消费税海关缴款书";
    }, {
        readonly key: "tfrqq";
        readonly name: "填发日期起";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "tfrqz";
        readonly name: "填发日期止";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }];
    readonly template: {
        readonly nsrsbh: "";
        readonly hgjkslx: "";
        readonly tfrqq: "";
        readonly tfrqz: "";
    };
}, {
    readonly apiIdentity: "300000019";
    readonly apiName: "批量海关缴款书下载申请反馈接口";
    readonly abilityCode: "203067";
    readonly serverCode: "PLHGJKSXZSQFK";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "15.批量海关缴款书下载申请反馈";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "是";
        readonly description: "数据包号，当数据量过大时会进行分包处理；新的流水号初次调用接口时包号为1，后续请求包号在返回参数总包数范围内顺序增加；";
    }];
    readonly template: {
        readonly pclsh: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "300000020";
    readonly apiName: "查询增量下载海关缴款书信息接口";
    readonly abilityCode: "203067";
    readonly serverCode: "CXZLXZHGJKSXX";
    readonly sourceDoc: "用票能力/乐企归集能力说明文档-V2.013.docx";
    readonly sectionTitle: "16.查询增量下载海关缴款书信息";
    readonly fields: [{
        readonly key: "gjrq";
        readonly name: "归集日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD（当前日期前7天内的某一天或当天）";
    }, {
        readonly key: "nsrsbh";
        readonly name: "统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hgjkslx";
        readonly name: "海关缴款书类型";
        readonly type: "String";
        readonly length: "1";
        readonly required: "是";
        readonly description: "1增值税海关缴款书2消费税海关缴款书";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "否";
        readonly description: "数据包号，当数据量过大时会进行分包处理；新的归集日期初次调用接口时包号为1，后续请求包号在返回参数总包数范围内顺序增加；";
    }];
    readonly template: {
        readonly gjrq: "";
        readonly nsrsbh: "";
        readonly hgjkslx: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "400000001";
    readonly apiName: "获取当前税款所属期与当期税款所属期统计状态";
    readonly abilityCode: "203065";
    readonly serverCode: "HQDQSKSSQYDQSKSSQTJZT";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "1.获取当前税款所属期与当期税款所属期统计状态";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly gfsbh: "";
    };
}, {
    readonly apiIdentity: "400000002";
    readonly apiName: "批量上传抵扣发票";
    readonly abilityCode: "203065";
    readonly serverCode: "PLFPDKGX";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "2.批量上传抵扣发票";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gxlxDm";
        readonly name: "勾选类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：申请抵扣02：撤销抵扣03：申请不抵扣04：撤销不抵扣";
    }, {
        readonly key: "skssq";
        readonly name: "税款所属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "税款所属期为正常申报的税款所属期或者为一般纳税人追溯期的税款所属期。1、当为追溯期税款所属期时必填，如果为正常税款所属期时可空2、当勾选类型为“02”、“04”时，不传格式YYYYMM";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "String";
        readonly length: "12";
        readonly required: "否";
        readonly description: "发票类型为：01、03、04、08、10、14、15传纸质发票代码，其他发票类型无需传入";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "发票类型为：01、03、04、08、10、14、15传纸质发票号码发票类型为：51、61、81、82、83、85、86、87传20位数字化电子发票号码";
    }, {
        readonly key: "ckznxzmbh";
        readonly name: "出口转内销证明编号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "否";
        readonly description: "如为出口转内销需上传转内销证明编号";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票03：机动车销售统一发票04：增值税普通发票（特殊票种02农产品发票、21会员单位非投资性黄金、22客户标准黄金）08：增值税电子专用发票10：增值税电子普通发票（特殊票种02农产品发票、21会员单位非投资性黄金、22客户标准黄金）14：通行费发票51：电子发票（铁路电子客票）61：电子发票（航空运输客票电子行程单）81：电子发票（增值税专用发票）82：电子发票（普通发票，特定要素类型码值为08且有效抵扣税额大于0的通行费发票；特定要素为12或16的农产品发票；）85：纸质发票（增值税专用发票）86：纸质发票（普通发票，特定要素为12或16的农产品发票）83：机动车销售电子统一发票87：纸质发票（机动车销售统一发票）";
    }, {
        readonly key: "bdklx";
        readonly name: "不抵扣类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "否";
        readonly description: "申请勾选类型选择03：申请不抵扣时，需选择以下不抵扣类型1：用于非应税项目2：用于免税项目3：用于集体福利或者个人消费4：遭受非正常损失5：其他";
    }, {
        readonly key: "bdkyy";
        readonly name: "不抵扣原因";
        readonly type: "String";
        readonly length: "300";
        readonly required: "否";
        readonly description: "不抵扣类型选择为5：其他时，需要录入不抵扣原因";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly gxlxDm: "";
        readonly skssq: "";
        readonly fpmx: [{
            readonly kprq: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly ckznxzmbh: "";
            readonly fplx: "";
            readonly bdklx: "";
            readonly bdkyy: "";
        }];
    };
}, {
    readonly apiIdentity: "400000003";
    readonly apiName: "批量上传退税发票";
    readonly abilityCode: "203064";
    readonly serverCode: "PLFPTSGXQR";
    readonly sourceDoc: "用票能力/乐企增值税退税勾选能力说明文档-V2.013.docx";
    readonly sectionTitle: "1.批量上传退税发票";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "String";
        readonly length: "22";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "String";
        readonly length: "12";
        readonly required: "是";
        readonly description: "发票类型为：01、08传纸质发票代码，其他发票类型无需传入";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "发票类型为：01、08传纸质发票号码发票类型为：81、85传20位数字化电子发票号码";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票08：增值税电子专用发票81：电子发票（增值税专用发票）85：纸质发票（增值税专用发票）";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly fpmx: [{
            readonly kprq: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly fplx: "";
        }];
    };
}, {
    readonly apiIdentity: "400000004";
    readonly apiName: "批量上传入账发票";
    readonly abilityCode: "203057";
    readonly serverCode: "PLSCRZFP";
    readonly sourceDoc: "用票能力/乐企发票入账能力说明文档-V1.004.docx";
    readonly sectionTitle: "1.批量上传入账发票";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "String";
        readonly length: "12";
        readonly required: "否";
        readonly description: "数字化电子发票代码可为空";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "数字化电子发票，发票号码20位";
    }, {
        readonly key: "skssq";
        readonly name: "入账属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "格式为：YYYYMM。当“申请勾选类型”为“02”,“03”,“04”,“05”时入账属期必填，“06”无需填写。";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01-增值税专用发票02-货物运输业增值税专用发票03-机动车销售统一发票04-增值税普通发票08-增值税电子专用发票10-增值税电子普通发票11-卷式发票14-通行费发票15-二手车销售统一发票81-电子发票（增值税专用发票）82-电子发票（普通发票）83-机动车销售电子统一发票84-二手车销售电子统一发票85-纸质发票（增值税专用发票）86-纸质发票（普通发票）87-纸质发票（机动车销售统一发票）88-纸质发票（二手车销售统一发票）61-电子发票（航空运输客票电子行程单）51-电子发票（铁路电子客票）";
    }, {
        readonly key: "sqgxlx";
        readonly name: "申请勾选类型";
        readonly type: "String";
        readonly length: "1";
        readonly required: "是";
        readonly description: "02：入账（企业所得税税前扣除）03：入账（企业所得税不扣除）04：入账（个人所得税经营所得税前扣除）05：入账（个人所得税经营所得不扣除）06：入账撤销";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly fpmx: [{
            readonly kprq: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly skssq: "";
            readonly fplx: "";
            readonly sqgxlx: "";
        }];
    };
}, {
    readonly apiIdentity: "400000005";
    readonly apiName: "查询发票抵扣勾选处理结果";
    readonly abilityCode: "203065";
    readonly serverCode: "CXFPDKGXCLJG";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "3.查询发票抵扣勾选处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000006";
    readonly apiName: "查询发票退税勾选处理结果";
    readonly abilityCode: "203064";
    readonly serverCode: "CXFPTSGXQRCLJG";
    readonly sourceDoc: "用票能力/乐企增值税退税勾选能力说明文档-V2.013.docx";
    readonly sectionTitle: "2.查询发票退税勾选处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000007";
    readonly apiName: "查询发票入账处理结果";
    readonly abilityCode: "203057";
    readonly serverCode: "CXFPRZCLJG";
    readonly sourceDoc: "用票能力/乐企发票入账能力说明文档-V1.004.docx";
    readonly sectionTitle: "2.查询发票入账处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000008";
    readonly apiName: "申请抵扣统计";
    readonly abilityCode: "203065";
    readonly serverCode: "SQCXDKTJ";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "6.申请抵扣统计";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "纳税人识别号/总机构纳税人识别号";
    }, {
        readonly key: "sqbz";
        readonly name: "申请标志";
        readonly type: "String";
        readonly length: "1";
        readonly required: "是";
        readonly description: "1：申请统计2：撤销统计";
    }, {
        readonly key: "skssq";
        readonly name: "税款所属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "税款所属期为正常申报的税款所属期或者为一般纳税人追溯期的税款所属期。1、当为追溯期税款所属期时必填，如果为正常税款所属期时可空2、格式YYYYMM";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly sqbz: "";
        readonly skssq: "";
    };
}, {
    readonly apiIdentity: "400000009";
    readonly apiName: "查询申请统计处理结果";
    readonly abilityCode: "203065";
    readonly serverCode: "CXTJCLJG";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "7.查询申请统计处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000010";
    readonly apiName: "申请确认抵扣统计";
    readonly abilityCode: "203065";
    readonly serverCode: "SQQRDKTJ";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "8.申请确认抵扣统计";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "纳税人识别号/总机构纳税人识别号";
    }, {
        readonly key: "sqbz";
        readonly name: "申请标志";
        readonly type: "String";
        readonly length: "1";
        readonly required: "是";
        readonly description: "1：申请确认2：撤销确认";
    }, {
        readonly key: "skssq";
        readonly name: "税款所属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "税款所属期为正常申报的税款所属期或者为一般纳税人追溯期的税款所属期。1、当为追溯期税款所属期时必填，如果为正常税款所属期时可空2、格式YYYYMM";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly sqbz: "";
        readonly skssq: "";
    };
}, {
    readonly apiIdentity: "400000011";
    readonly apiName: "查询确认统计处理结果";
    readonly abilityCode: "203065";
    readonly serverCode: "CXQRTJCLJG";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "9.查询确认统计处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000012";
    readonly apiName: "获取当前税款所属期发票抵扣勾选处理结果";
    readonly abilityCode: "203065";
    readonly serverCode: "HQDQSKSSQFPDKGXCLJG";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "10.获取税款所属期发票抵扣勾选处理结果";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "cxym";
        readonly name: "查询页码";
        readonly type: "int";
        readonly length: "";
        readonly required: "否";
        readonly description: "不传默认为1，可根据返回的总页数调整所需要查询的页码数据";
    }, {
        readonly key: "skssq";
        readonly name: "税款所属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "税款所属期为正常申报的税款所属期或者为一般纳税人追溯期的税款所属期。当为追溯期税款所属期时必填，如果为正常税款所属期时可空格式YYYYMM";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly cxym: 0;
        readonly skssq: "";
    };
}, {
    readonly apiIdentity: "400000015";
    readonly apiName: "未勾选数据初始化清单下载申请";
    readonly abilityCode: "203065";
    readonly serverCode: "WGXSJCSHQDXZSQDKGX";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "15.未勾选数据初始化清单下载申请";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ywlx";
        readonly name: "业务类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：抵扣业务09：待处理农产品发票确认";
    }, {
        readonly key: "pzzl";
        readonly name: "凭证种类";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：发票02：出口转内销发票03：海关缴款书04：出口转内销海关缴款书05：代扣代缴完税凭证";
    }, {
        readonly key: "kpyf";
        readonly name: "起始开票月份";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "申请下载起始开票月份，格式YYYYMM1、为空时，默认查询从“结束开票月份”倒推近三月数据2、“起始开票月份”和“结束开票月份”都为空时，默认查询近三月（不含当月）数据";
    }, {
        readonly key: "jskpyf";
        readonly name: "结束开票月份";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "申请下载结束开票月份，格式YYYYMM1、为空时，默认查询截止到当前月份数据";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly ywlx: "";
        readonly pzzl: "";
        readonly kpyf: "";
        readonly jskpyf: "";
    };
}, {
    readonly apiIdentity: "4000000151";
    readonly apiName: "未勾选数据初始化清单下载申请（退税勾选）";
    readonly abilityCode: "203064";
    readonly serverCode: "WGXSJCSHQDXZSQTSGX";
    readonly sourceDoc: "用票能力/乐企增值税退税勾选能力说明文档-V2.013.docx";
    readonly sectionTitle: "5.未勾选数据初始化清单下载申请";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ywlx";
        readonly name: "业务类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "03：退税业务";
    }, {
        readonly key: "pzzl";
        readonly name: "凭证种类";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：发票03：海关缴款书";
    }, {
        readonly key: "kpyf";
        readonly name: "起始开票月份";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "申请下载起始开票月份至当前自然月如未传入则查询近三月YYYYMM";
    }, {
        readonly key: "jskpyf";
        readonly name: "结束开票月份";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "申请下载结束开票月份，格式YYYYMM1、为空时，默认查询截止到当前月份数据";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly ywlx: "";
        readonly pzzl: "";
        readonly kpyf: "";
        readonly jskpyf: "";
    };
}, {
    readonly apiIdentity: "4000000152";
    readonly apiName: "未勾选数据初始化清单下载申请（代办退税勾选）";
    readonly abilityCode: "203066";
    readonly serverCode: "WGXSJCSHQDXZSQDBTSGX";
    readonly sourceDoc: "用票能力/乐企代办退税勾选能力说明文档-V2.011.docx";
    readonly sectionTitle: "3.未勾选数据初始化清单下载申请";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ywlx";
        readonly name: "业务类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "04：代办退税业务";
    }, {
        readonly key: "pzzl";
        readonly name: "凭证种类";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：发票";
    }, {
        readonly key: "kpyf";
        readonly name: "起始开票月份";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "申请下载起始开票月份， 格式YYYYMM1、为空时，默认查询从“结束开票月份”倒推近三月数据2、“起始开票月份”和“结束开票月份”都为空时，默认查询近三月（不含当月）数据";
    }, {
        readonly key: "jskpyf";
        readonly name: "结束开票月份";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "申请下载结束开票月份，格式YYYYMM1、为空时，默认查询截止到当前月份数据";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly ywlx: "";
        readonly pzzl: "";
        readonly kpyf: "";
        readonly jskpyf: "";
    };
}, {
    readonly apiIdentity: "4000000154";
    readonly apiName: "未勾选数据初始化清单下载申请（农产品）";
    readonly abilityCode: "203108";
    readonly serverCode: "WGXSJCSHQDXZSQNCP";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "16.未勾选数据初始化清单下载申请";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ywlx";
        readonly name: "业务类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "09：待处理农产品发票确认12：加计扣除业务";
    }, {
        readonly key: "pzzl";
        readonly name: "凭证种类";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：发票03：海关缴款书";
    }, {
        readonly key: "kpyf";
        readonly name: "起始开票月份";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "申请下载起始开票月份，格式YYYYMM1、为空时，默认查询从“结束开票月份”倒推近三月数据2、“起始开票月份”和“结束开票月份”都为空时，默认查询近三月（不含当月）数据";
    }, {
        readonly key: "jskpyf";
        readonly name: "结束开票月份";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "申请下载结束开票月份，格式YYYYMM1、为空时，默认查询截止到当前月份数据";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly ywlx: "";
        readonly pzzl: "";
        readonly kpyf: "";
        readonly jskpyf: "";
    };
}, {
    readonly apiIdentity: "400000016";
    readonly apiName: "未勾选数据初始化清单下载申请反馈";
    readonly abilityCode: "203065";
    readonly serverCode: "WGXSJCSHQDXZSQFKDKGX";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "16.未勾选数据初始化清单下载申请反馈";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "是";
        readonly description: "数据包号，当数据量过大时会进行分包处理，初始包号1";
    }];
    readonly template: {
        readonly pclsh: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "4000000161";
    readonly apiName: "未勾选数据初始化清单下载申请反馈（退税勾选）";
    readonly abilityCode: "203064";
    readonly serverCode: "WGXSJCSHQDXZSQFKTSGX";
    readonly sourceDoc: "用票能力/乐企增值税退税勾选能力说明文档-V2.013.docx";
    readonly sectionTitle: "6.未勾选数据初始化清单下载申请反馈";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "是";
        readonly description: "数据包号，当数据量过大时会进行分包处理，初始包号1";
    }];
    readonly template: {
        readonly pclsh: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "4000000162";
    readonly apiName: "未勾选数据初始化清单下载申请反馈（代办退税勾选）";
    readonly abilityCode: "203066";
    readonly serverCode: "WGXSJCSHQDXZSQFKDBTSGX";
    readonly sourceDoc: "用票能力/乐企代办退税勾选能力说明文档-V2.011.docx";
    readonly sectionTitle: "4.未勾选数据初始化清单下载申请反馈";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "是";
        readonly description: "数据包号，当数据量过大时会进行分包处理，初始包号1";
    }];
    readonly template: {
        readonly pclsh: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "4000000164";
    readonly apiName: "未勾选数据初始化清单下载申请反馈（农产品）";
    readonly abilityCode: "203108";
    readonly serverCode: "WGXSJCSHQDXZSQFKNCP";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "17.未勾选数据初始化清单下载申请反馈";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "packageno";
        readonly name: "包号";
        readonly type: "String";
        readonly length: "5";
        readonly required: "是";
        readonly description: "数据包号，当数据量过大时会进行分包处理，初始包号1";
    }];
    readonly template: {
        readonly pclsh: "";
        readonly packageno: "";
    };
}, {
    readonly apiIdentity: "400000017";
    readonly apiName: "批量上传海关缴款书抵扣勾选";
    readonly abilityCode: "203065";
    readonly serverCode: "PLHGJKSDKGX";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "4.批量上传海关缴款书抵扣勾选";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gxlxDm";
        readonly name: "勾选类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：申请抵扣02：撤销抵扣03：申请不抵扣04：撤销不抵扣";
    }, {
        readonly key: "skssq";
        readonly name: "税款所属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "税款所属期为正常申报的税款所属期或者为一般纳税人追溯期的税款所属期。1、当为追溯期税款所属期时必填，如果为正常税款所属期时可空2、当勾选类型为“02”、“04”时，不传格式YYYYMM";
    }, {
        readonly key: "jkshm";
        readonly name: "缴款书号码";
        readonly type: "String";
        readonly length: "22";
        readonly required: "是";
        readonly description: "缴款书号码";
    }, {
        readonly key: "ckznxzmbh";
        readonly name: "出口转内销证明编号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "否";
        readonly description: "如为出口转内销需上传转内销证明编号";
    }, {
        readonly key: "tfrq";
        readonly name: "填发日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "格式为YYYYMMDD";
    }, {
        readonly key: "bdklx";
        readonly name: "不抵扣类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "否";
        readonly description: "申请勾选类型选择03：申请不抵扣时，需选择以下不抵扣类型1：用于非应税项目2：用于免税项目3：用于集体福利或者个人消费4：遭受非正常损失5：其他";
    }, {
        readonly key: "bdkyy";
        readonly name: "不抵扣原因";
        readonly type: "String";
        readonly length: "300";
        readonly required: "否";
        readonly description: "不抵扣类型选择为5：其他时，需要录入不抵扣原因";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly gxlxDm: "";
        readonly skssq: "";
        readonly hgjksmx: [{
            readonly jkshm: "";
            readonly ckznxzmbh: "";
            readonly tfrq: "";
            readonly bdklx: "";
            readonly bdkyy: "";
        }];
    };
}, {
    readonly apiIdentity: "400000018";
    readonly apiName: "查询海关缴款书抵扣勾选处理结果";
    readonly abilityCode: "203065";
    readonly serverCode: "CXHGJKSDKGXCLJG";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "5.查询海关缴款书抵扣勾选处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000019";
    readonly apiName: "获取当前税款所属期海关缴款书抵扣勾选处理结果";
    readonly abilityCode: "203065";
    readonly serverCode: "HQDQSKSSQHGJKSDKGXCLJG";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "11.获取税款所属期海关缴款书抵扣勾选处理结果";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "纳税人识别号";
    }, {
        readonly key: "cxym";
        readonly name: "查询页码";
        readonly type: "int";
        readonly length: "";
        readonly required: "否";
        readonly description: "不传默认为1，可根据返回的总页数调整所需要查询的页码数据";
    }, {
        readonly key: "skssq";
        readonly name: "税款所属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "税款所属期为正常申报的税款所属期或者为一般纳税人追溯期的税款所属期。当为追溯期税款所属期时必填，如果为正常税款所属期时可空格式YYYYMM";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly cxym: 0;
        readonly skssq: "";
    };
}, {
    readonly apiIdentity: "400000020";
    readonly apiName: "批量上传退税海关缴款书";
    readonly abilityCode: "203064";
    readonly serverCode: "PLHGJKSTSGXQR";
    readonly sourceDoc: "用票能力/乐企增值税退税勾选能力说明文档-V2.013.docx";
    readonly sectionTitle: "3.批量上传退税海关缴款书";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "tfrq";
        readonly name: "填发日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "jkshm";
        readonly name: "缴款书号码";
        readonly type: "String";
        readonly length: "50";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly jksmx: [{
            readonly tfrq: "";
            readonly jkshm: "";
        }];
    };
}, {
    readonly apiIdentity: "400000021";
    readonly apiName: "查询海关缴款书退税勾选处理结果";
    readonly abilityCode: "203064";
    readonly serverCode: "CXHGJKSTSGXQRCLJG";
    readonly sourceDoc: "用票能力/乐企增值税退税勾选能力说明文档-V2.013.docx";
    readonly sectionTitle: "4.查询海关缴款书退税勾选处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000022";
    readonly apiName: "批量上传入账海关缴款书";
    readonly abilityCode: "203057";
    readonly serverCode: "PLSCRZHGJKS";
    readonly sourceDoc: "用票能力/乐企发票入账能力说明文档-V1.004.docx";
    readonly sectionTitle: "5.批量上传入账海关缴款书";
    readonly fields: [{
        readonly key: "jkdwrnsrsbh";
        readonly name: "缴款单位人纳税人识别号";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hgjkshm";
        readonly name: "海关缴款书号码";
        readonly type: "String";
        readonly length: "75";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "tfrq";
        readonly name: "填发日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "skssq";
        readonly name: "入账属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "格式为：YYYYMM。当“申请勾选类型”为“02”,“03”,“04”,“05”时入账属期必填，“06”无需填写。";
    }, {
        readonly key: "sqgxlx";
        readonly name: "申请勾选类型";
        readonly type: "String";
        readonly length: "1";
        readonly required: "是";
        readonly description: "02：入账（企业所得税税前扣除）03：入账（企业所得税不扣除）04：入账（个人所得税经营所得税前扣除）05：入账（个人所得税经营所得不扣除）06：入账撤销";
    }];
    readonly template: {
        readonly jkdwrnsrsbh: "";
        readonly hgjksmx: [{
            readonly hgjkshm: "";
            readonly tfrq: "";
            readonly skssq: "";
            readonly sqgxlx: "";
        }];
    };
}, {
    readonly apiIdentity: "400000023";
    readonly apiName: "查询海关缴款书入账处理结果";
    readonly abilityCode: "203057";
    readonly serverCode: "CXHGJKSRZCLJG";
    readonly sourceDoc: "用票能力/乐企发票入账能力说明文档-V1.004.docx";
    readonly sectionTitle: "6.查询海关缴款书入账处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000024";
    readonly apiName: "批量上传增值税代扣代缴完税凭证抵扣勾选";
    readonly abilityCode: "203065";
    readonly serverCode: "PLSCZZSDKDJWSPZDKGX";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "12.批量上传增值税代扣代缴完税凭证抵扣勾选";
    readonly fields: [{
        readonly key: "kjywrsbh";
        readonly name: "扣缴义务人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gxlxDm";
        readonly name: "勾选类型代码";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：申请抵扣02：撤销抵扣03：申请不抵扣04：撤销不抵扣";
    }, {
        readonly key: "skssq";
        readonly name: "税款所属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "税款所属期为正常申报的税款所属期或者为一般纳税人追溯期的税款所属期。1、当为追溯期税款所属期时必填，如果为正常税款所属期时可空2、当勾选类型为“02”、“04”时，可空格式YYYYMM";
    }, {
        readonly key: "dkdjwspzh";
        readonly name: "代扣代缴完税凭证号";
        readonly type: "String";
        readonly length: "22";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "tfrq";
        readonly name: "填发日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "bkjnsrsbh";
        readonly name: "被扣缴义务人统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "有统一码用统一码，无统一码用纳税人识别号";
    }, {
        readonly key: "bdklx";
        readonly name: "不抵扣类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "否";
        readonly description: "申请勾选类型选择03：申请不抵扣时，需选择以下不抵扣类型1：用于非应税项目2：用于免税项目3：用于集体福利或者个人消费4：遭受非正常损失5：其他";
    }, {
        readonly key: "bdkyy";
        readonly name: "不抵扣原因";
        readonly type: "String";
        readonly length: "300";
        readonly required: "否";
        readonly description: "不抵扣类型选择为5：其他时，需要录入不抵扣原因";
    }];
    readonly template: {
        readonly kjywrsbh: "";
        readonly gxlxDm: "";
        readonly skssq: "";
        readonly dkdjmx: [{
            readonly dkdjwspzh: "";
            readonly tfrq: "";
            readonly bkjnsrsbh: "";
            readonly bdklx: "";
            readonly bdkyy: "";
        }];
    };
}, {
    readonly apiIdentity: "400000025";
    readonly apiName: "查询增值税代扣代缴完税凭证抵扣勾选处理结果";
    readonly abilityCode: "203065";
    readonly serverCode: "CXZZSDKDJWSPZDKGXCLJG";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "13.查询增值税代扣代缴完税凭证抵扣勾选处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000026";
    readonly apiName: "获取当前税款所属期代扣代缴完税凭证抵扣勾选处理结果";
    readonly abilityCode: "203065";
    readonly serverCode: "HQDQSKSSQDKDJWSPZDKGXCLJG";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "14.获取税款所属期代扣代缴完税凭证抵扣勾选处理结果";
    readonly fields: [{
        readonly key: "kjywrsbh";
        readonly name: "扣缴义务人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "否";
        readonly description: "";
    }, {
        readonly key: "cxym";
        readonly name: "查询页码";
        readonly type: "int";
        readonly length: "";
        readonly required: "否";
        readonly description: "不传默认为1，可根据返回的总页数调整所需要查询的页码数据";
    }, {
        readonly key: "skssq";
        readonly name: "税款所属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "否";
        readonly description: "税款所属期为正常申报的税款所属期或者为一般纳税人追溯期的税款所属期。当为追溯期税款所属期时必填，如果为正常税款所属期时可空格式YYYYMM";
    }];
    readonly template: {
        readonly kjywrsbh: "";
        readonly cxym: 0;
        readonly skssq: "";
    };
}, {
    readonly apiIdentity: "400000029";
    readonly apiName: "汇总纳税人机构列表查询";
    readonly abilityCode: "203065";
    readonly serverCode: "HZNSRJGLBCX";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "22.汇总纳税人机构列表查询";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "总机构纳税人识别号";
    }];
    readonly template: {
        readonly gfsbh: "";
    };
}, {
    readonly apiIdentity: "400000030";
    readonly apiName: "总分机构汇总勾选确认";
    readonly abilityCode: "203065";
    readonly serverCode: "ZFJGHZGXQR";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "23.总分机构汇总勾选确认";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "总机构纳税人识别号";
    }];
    readonly template: {
        readonly gfsbh: "";
    };
}, {
    readonly apiIdentity: "400000031";
    readonly apiName: "申请税款所属期变更";
    readonly abilityCode: "203065";
    readonly serverCode: "SQSKSSQBG";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "24.申请税款所属期变更";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "bgsq";
        readonly name: "变更属期";
        readonly type: "String";
        readonly length: "6";
        readonly required: "是";
        readonly description: "YYYYMM申请变更到的税款所属期";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly bgsq: "";
    };
}, {
    readonly apiIdentity: "400000032";
    readonly apiName: "申请注销勾选";
    readonly abilityCode: "203065";
    readonly serverCode: "SQZXGX";
    readonly sourceDoc: "用票能力/乐企增值税抵扣勾选能力说明文档-V3.020.docx";
    readonly sectionTitle: "25.申请注销勾选";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "sqbz";
        readonly name: "申请标志";
        readonly type: "String";
        readonly length: "1";
        readonly required: "是";
        readonly description: "1：申请注销勾选2：撤销注销勾选";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly sqbz: "";
    };
}, {
    readonly apiIdentity: "400000033";
    readonly apiName: "批量上传待处理农产品发票确认清单接口";
    readonly abilityCode: "203108";
    readonly serverCode: "PLSCDCLNCPFPQRQD";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "1.批量上传待处理农产品发票确认清单";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ncplx";
        readonly name: "农产品类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "1：自产农产品销售发票2：从小规模处购进的3%农产品专票";
    }, {
        readonly key: "gxlxDm";
        readonly name: "勾选类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "农产品类型为1：自产农产品销售发票时可填写13：属于自产14：不属于自产15：部分属于自产农产品类型为2：从小规模处购进的3%农产品专票时可填写16：按票面金额和基础扣除率17：按票面税额";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "String";
        readonly length: "12";
        readonly required: "否";
        readonly description: "发票类型为：01、04、08、10传纸质发票代码，其他发票类型无需传入";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "发票类型为：01、04、08、10传纸质发票号码发票类型为：81、85传20位数字化电子发票号码";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "农产品类型为1：自产农产品销售发票时可填写04：增值税普通发票10：增值税电子普通发票农产品类型为2：从小规模处购进的3%农产品专票时可填写01：增值税专用发票08：增值税电子专用发票81：电子发票（增值税专用发票）85：纸质发票（增值税专用发票）";
    }, {
        readonly key: "ncpbfje";
        readonly name: "农产品部分金额";
        readonly type: "Number";
        readonly length: "18,2";
        readonly required: "否";
        readonly description: "勾选类型代码为15：部分属于自产时，必填其他情况为空";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly ncplx: "";
        readonly gxlxDm: "";
        readonly fpmx: [{
            readonly kprq: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly fplx: "";
            readonly ncpbfje: 0;
        }];
    };
}, {
    readonly apiIdentity: "400000034";
    readonly apiName: "查询批量上传待处理农产品发票确认清单处理结果接口";
    readonly abilityCode: "203108";
    readonly serverCode: "CXPLSCDCLNCPFPQRQDCLJG";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "2.查询批量上传待处理农产品发票确认清单处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000035";
    readonly apiName: "批量上传税务机关代开农产品发票补录信息接口";
    readonly abilityCode: "203108";
    readonly serverCode: "PLSCSWJGDKNCPFPBLXX";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "5.批量上传税务机关代开农产品发票补录信息";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "String";
        readonly length: "12";
        readonly required: "否";
        readonly description: "发票类型为：01、04、08、10传纸质发票代码，其他发票类型无需传入";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "发票类型为：01、04、08、10传纸质发票号码发票类型为：81、82、85、86传20位数字化电子发票号码";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票04：增值税普通发票08：增值税电子专用发票10：增值税电子普通发票81：电子发票（增值税专用发票）82：电子发票（普通发票）85：纸质发票（增值税专用发票）86：纸质发票（普通发票）";
    }, {
        readonly key: "yxdkse";
        readonly name: "有效抵扣税额";
        readonly type: "Number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ncpbfje";
        readonly name: "农产品部分金额";
        readonly type: "Number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ncpbfse";
        readonly name: "农产品部分税额";
        readonly type: "Number";
        readonly length: "18,2";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly fpmx: [{
            readonly kprq: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly fplx: "";
            readonly yxdkse: 0;
            readonly ncpbfje: 0;
            readonly ncpbfse: 0;
        }];
    };
}, {
    readonly apiIdentity: "400000037";
    readonly apiName: "批量上传农产品海关缴款书加计扣除补录信息接口";
    readonly abilityCode: "203108";
    readonly serverCode: "PLSCNCPHGJKSJJKCBLXX";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "3.批量上传农产品海关缴款书加计扣除补录信息";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "hgjkshm";
        readonly name: "海关缴款书号码";
        readonly type: "String";
        readonly length: "22";
        readonly required: "是";
        readonly description: "海关缴款书号码";
    }, {
        readonly key: "tfrq";
        readonly name: "填发日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "ncpbfwsjg";
        readonly name: "农产品部分完税价格";
        readonly type: "Number";
        readonly length: "18，2";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly hgjksmx: [{
            readonly hgjkshm: "";
            readonly tfrq: "";
            readonly ncpbfwsjg: 0;
        }];
    };
}, {
    readonly apiIdentity: "400000038";
    readonly apiName: "查询批量上传农产品海关缴款书加计扣除补录信息接口";
    readonly abilityCode: "203108";
    readonly serverCode: "CXPLSCNCPHGJKSJJKCBLXXCLJG";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "4.查询批量上传农产品海关缴款书加计扣除补录信息处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000039";
    readonly apiName: "批量上传农产品发票加计扣除勾选清单接口";
    readonly abilityCode: "203108";
    readonly serverCode: "PLSCNCPFPJJKCGXQD";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "8.批量上传农产品发票加计扣除勾选清单";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gxlxDm";
        readonly name: "勾选类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "18：申请加计19：撤销加计20：申请全部项目不加计21：撤销全部项目不加计";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "String";
        readonly length: "12";
        readonly required: "否";
        readonly description: "发票类型为：01、04、08、10传纸质发票代码，其他发票类型无需传入";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "发票类型为：01、04、08、10传纸质发票号码发票类型为：81、85传20位数字化电子发票号码";
    }, {
        readonly key: "ckznxzmbh";
        readonly name: "出口转内销证明编号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "否";
        readonly description: "如为出口转内销需上传转内销证明编号";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票04：增值税普通发票08：增值税电子专用发票10：增值税电子普通发票81：电子发票（增值税专用发票）82：电子发票（普通发票）85：纸质发票（增值税专用发票）86：纸质发票（普通发票）";
    }, {
        readonly key: "bcjjkcse";
        readonly name: "本次加计扣除税额";
        readonly type: "Number";
        readonly length: "18，2";
        readonly required: "否";
        readonly description: "勾选类型为18：申请加计时必填";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly gxlxDm: "";
        readonly fpmx: [{
            readonly kprq: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly ckznxzmbh: "";
            readonly fplx: "";
            readonly bcjjkcse: 0;
        }];
    };
}, {
    readonly apiIdentity: "400000040";
    readonly apiName: "查询农产品发票加计扣除勾选处理结果接口";
    readonly abilityCode: "203108";
    readonly serverCode: "CXNCPFPJJKCGXCLJG";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "9.查询农产品发票加计扣除勾选处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000041";
    readonly apiName: "批量上传农产品海关缴款书加计扣除勾选清单接口";
    readonly abilityCode: "203108";
    readonly serverCode: "PLSCNCPHGJKSJJKCGXQD";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "10.批量上传农产品海关缴款书加计扣除勾选清单";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "gxlxDm";
        readonly name: "勾选类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "18：申请加计19：撤销加计20：申请全部项目不加计21：撤销全部项目不加计";
    }, {
        readonly key: "hgjkshm";
        readonly name: "海关缴款书号码";
        readonly type: "String";
        readonly length: "22";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "ckznxzmbh";
        readonly name: "出口转内销证明编号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "否";
        readonly description: "如为出口转内销需上传转内销证明编号";
    }, {
        readonly key: "tfrq";
        readonly name: "填发日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "bcjjkcse";
        readonly name: "本次加计扣除税额";
        readonly type: "Number";
        readonly length: "18，2";
        readonly required: "否";
        readonly description: "勾选类型为18：申请加计时必填";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly gxlxDm: "";
        readonly hgjksmx: [{
            readonly hgjkshm: "";
            readonly ckznxzmbh: "";
            readonly tfrq: "";
            readonly bcjjkcse: 0;
        }];
    };
}, {
    readonly apiIdentity: "400000042";
    readonly apiName: "查询农产品海关缴款书加计扣除勾选处理结果接口";
    readonly abilityCode: "203108";
    readonly serverCode: "CXNCPHGJKSJJKCGXCLJG";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "11.查询农产品海关缴款书加计扣除勾选处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000043";
    readonly apiName: "查询发票农产品商品编码列表接口";
    readonly abilityCode: "203108";
    readonly serverCode: "CXFPNCPSPBMLB";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "14.查询发票农产品商品编码列表";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly gfsbh: "";
    };
}, {
    readonly apiIdentity: "400000044";
    readonly apiName: "批量发票代办退税勾选接口";
    readonly abilityCode: "203066";
    readonly serverCode: "PLFPDBGX";
    readonly sourceDoc: "用票能力/乐企代办退税勾选能力说明文档-V2.011.docx";
    readonly sectionTitle: "1.批量上传代办退税发票";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方统一社会信用代码/纳税人识别号";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }, {
        readonly key: "kprq";
        readonly name: "开票日期";
        readonly type: "String";
        readonly length: "8";
        readonly required: "是";
        readonly description: "YYYYMMDD";
    }, {
        readonly key: "fpdm";
        readonly name: "发票代码";
        readonly type: "String";
        readonly length: "12";
        readonly required: "否";
        readonly description: "发票类型为：01、08传纸质发票代码，其他发票类型无需传入";
    }, {
        readonly key: "fphm";
        readonly name: "发票号码";
        readonly type: "String";
        readonly length: "20";
        readonly required: "是";
        readonly description: "发票类型为：01、08传纸质发票号码发票类型为：81、85传20位数字化电子发票号码";
    }, {
        readonly key: "fplx";
        readonly name: "发票类型";
        readonly type: "String";
        readonly length: "2";
        readonly required: "是";
        readonly description: "01：增值税专用发票08：增值税电子专用发票81：电子发票（增值税专用发票）85：纸质发票（增值税专用发票）";
    }];
    readonly template: {
        readonly gfsbh: "";
        readonly fpmx: [{
            readonly kprq: "";
            readonly fpdm: "";
            readonly fphm: "";
            readonly fplx: "";
        }];
    };
}, {
    readonly apiIdentity: "400000045";
    readonly apiName: "查询发票代办退税勾选处理结果接口";
    readonly abilityCode: "203066";
    readonly serverCode: "CXDBTSGX";
    readonly sourceDoc: "用票能力/乐企代办退税勾选能力说明文档-V2.011.docx";
    readonly sectionTitle: "2.查询发票代办退税勾选处理结果";
    readonly fields: [{
        readonly key: "pclsh";
        readonly name: "批次流水号";
        readonly type: "String";
        readonly length: "32";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly pclsh: "";
    };
}, {
    readonly apiIdentity: "400000046";
    readonly apiName: "查询海关缴款书农产品海关税号列表";
    readonly abilityCode: "203108";
    readonly serverCode: "CXHGJKSNCPHGSHLB";
    readonly sourceDoc: "用票能力/乐企农产品加计扣除勾选能力说明文档-V2.009.docx";
    readonly sectionTitle: "15.查询海关缴款书农产品海关税号列表";
    readonly fields: [{
        readonly key: "gfsbh";
        readonly name: "购买方纳税人识别号/统一社会信用代码";
        readonly type: "String";
        readonly length: "30";
        readonly required: "是";
        readonly description: "";
    }];
    readonly template: {
        readonly gfsbh: "";
    };
}];
