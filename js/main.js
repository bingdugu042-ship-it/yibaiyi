/**
 * 艺百艺 - 沈阳音乐教育平台
 * Main JavaScript File
 */

// ========================================
// Teacher Data - 教师数据
// ========================================
const teachersData = [
    {
        id: 1,
        name: "周老师",
        instrument: "小提琴/中提琴",
        category: "violin",
        area: "和平区",
        image: "images/02_6731bc40000000001a03595c_沈阳｜和平区｜小提琴老师_1.webp",
        honors: ["郎朗同台", "辽视春晚"],
        description: "中提琴演奏硕士研究生，中国音乐家协会会员。2018年与郎朗同台合作辽宁电视台春晚，2023年与郎朗、吉娜、孙楠同台合作辽视春晚。",
        education: "沈阳音乐学院硕士",
        noteId: "6731bc40000000001a03595c"
    },
    {
        id: 2,
        name: "王老师",
        instrument: "小提琴",
        category: "violin",
        area: "和平区",
        image: "images/03_67ca7ad500000000090163aa_沈阳｜和平区｜小提琴老师_1.webp",
        honors: ["辽宁省第九", "人民大会堂"],
        description: "毕业于沈阳音乐学院附中，辽宁省第九练耳满分成绩考入沈阳音乐学院，授课近千余，多次在人民大会堂演出。",
        education: "沈阳音乐学院",
        noteId: "67ca7ad500000000090163aa"
    },
    {
        id: 3,
        name: "薄老师",
        instrument: "小提琴",
        category: "violin",
        area: "和平区",
        image: "images/04_67c8164d000000000602be49_沈阳｜和平区｜小提琴老师_1.webp",
        honors: ["白玉兰一等奖", "香港国际音乐节"],
        description: "2021年以优异成绩考入沈阳音乐学院管弦系，2022年白玉兰国际音乐节一等奖，2023年香港国际音乐节一等奖。",
        education: "沈阳音乐学院",
        noteId: "67c8164d000000000602be49"
    },
    {
        id: 4,
        name: "房老师",
        instrument: "小提琴",
        category: "violin",
        area: "沈河区",
        image: "images/05_67c8158c00000000060384bf_沈阳｜沈河区｜小提琴老师_1.webp",
        honors: ["桃李杯优秀教师", "紫荆花优秀教师"],
        description: "具有国家教育部教师资质认证，师从著名小提琴演奏家靳延平老师，全优成绩毕业于沈阳音乐学院。",
        education: "沈阳音乐学院",
        noteId: "67c8158c00000000060384bf"
    },
    {
        id: 5,
        name: "马老师",
        instrument: "小提琴",
        category: "violin",
        area: "沈河区",
        image: "images/06_67c8104b000000000e0056cc_沈阳｜沈河区｜小提琴老师_1.webp",
        honors: ["新加坡国际比赛", "香港国际大赛"],
        description: "2003年进入沈阳音乐学院附小，2023年第二届新加坡国际音乐比赛小提琴演奏家组优异奖，莫斯科国立师范大学深造。",
        education: "沈阳音乐学院/莫斯科国立师范大学",
        noteId: "67c8104b000000000e0056cc"
    },
    {
        id: 6,
        name: "王老师",
        instrument: "小提琴",
        category: "violin",
        area: "浑南区",
        image: "images/07_67c80ee1000000000302b878_沈阳｜浑南区｜小提琴老师_1.webp",
        honors: ["优秀指导教师", "考级通过率100%"],
        description: "中国音乐学院、四川音乐学院优秀指导教师，2015年以黑龙江省第一成绩考入沈阳音乐学院，考级通过率100%。",
        education: "沈阳音乐学院",
        noteId: "67c80ee1000000000302b878"
    },
    {
        id: 7,
        name: "冯老师",
        instrument: "钢琴",
        category: "piano",
        area: "铁西广场",
        image: "images/13_675cf34c000000000203444b_沈阳｜铁西广场｜钢琴老师_1.webp",
        honors: ["桃李杯园丁奖", "香港国际金奖"],
        description: "毕业于沈阳音乐学院音乐教育专业，5年教学经验。2020年优秀指导教师，2022年香港国际青少年艺术大赛模范指导教师。",
        education: "沈阳音乐学院",
        noteId: "675cf34c000000000203444b"
    },
    {
        id: 8,
        name: "许峪宁老师",
        instrument: "小提琴",
        category: "violin",
        area: "北塔",
        image: "images/14_67582f9c00000000020271cd_沈阳｜北塔｜小提琴老师_1.webp",
        honors: ["韩国春川金奖", "辽视春晚导师"],
        description: "毕业于沈阳音乐学院管弦器乐教育系，2014年韩国春川国际音乐比赛金奖，2024年辽视春晚最佳导师。",
        education: "沈阳音乐学院",
        noteId: "67582f9c00000000020271cd"
    },
    {
        id: 9,
        name: "宁老师",
        instrument: "声乐",
        category: "vocal",
        area: "长白",
        image: "images/15_67581aee00000000020266e7_沈阳｜长白｜声乐老师_1.webp",
        honors: ["全国金奖", "考级通过率100%"],
        description: "沈阳音乐学院声乐教学法硕士，2024年璇歌中国声乐歌手大奖赛美声组全国金奖，考级通过率100%。",
        education: "沈阳音乐学院硕士",
        noteId: "67581aee00000000020266e7"
    },
    {
        id: 10,
        name: "徐老师",
        instrument: "电吉他",
        category: "guitar",
        area: "和平区",
        image: "images/09_6788c157000000001601aeeb_沈阳｜和平区｜电吉他老师_1.webp",
        honors: ["全国第四", "辽宁吉他大赛"],
        description: "师从沈阳音乐学院李涵老师，2019年以全国第四成绩考入沈阳音乐学院流行器乐电吉他演奏系，全国青年艺术大赛一等奖。",
        education: "沈阳音乐学院",
        noteId: "6788c157000000001601aeeb"
    },
    {
        id: 11,
        name: "徐晓琦老师",
        instrument: "钢琴",
        category: "piano",
        area: "和平区",
        image: "images/23_674d7fe5000000000201860e_沈阳｜和平区｜钢琴老师_1.webp",
        honors: ["香港公开赛一等奖", "中韩国际二等奖"],
        description: "钢琴教龄五年，毕业于沈阳音乐学院附属中等音乐学校，香港公开赛专业组一等奖，中韩国际公开赛专业组二等奖。",
        education: "沈阳音乐学院",
        noteId: "674d7fe5000000000201860e"
    },
    {
        id: 12,
        name: "胡老师",
        instrument: "钢琴",
        category: "piano",
        area: "大东区",
        image: "images/24_674d7ea40000000002029015_沈阳｜大东区｜钢琴老师_1.webp",
        honors: ["桃李杯优秀教师", "肖邦比赛优秀教师"],
        description: "沈阳音乐学院毕业，桃李杯钢琴比赛优秀指导教师，肖邦青少年钢琴比赛优秀指导教师，北方钢琴文艺汇演评委。",
        education: "沈阳音乐学院",
        noteId: "674d7ea40000000002029015"
    },
    {
        id: 13,
        name: "管晨辰老师",
        instrument: "钢琴",
        category: "piano",
        area: "和平区",
        image: "images/25_6746c81f0000000002039848_沈阳｜和平区｜钢琴老师_1.webp",
        honors: ["KAWAI大赛三等奖", "李斯特大赛二等奖"],
        description: "钢琴教龄三年，12岁考完中央音乐学院九级，KAWAI亚洲钢琴大赛青年组三等奖，第五届李斯特国际青少年钢琴大赛二等奖。",
        education: "沈阳音乐学院",
        noteId: "6746c81f0000000002039848"
    },
    {
        id: 14,
        name: "杨老师",
        instrument: "钢琴",
        category: "piano",
        area: "浑南区",
        image: "images/26_67458f4100000000060156a6_沈阳｜浑南区｜钢琴老师_1.webp",
        honors: ["辽宁省艺术展演二等奖", "优秀钢琴伴奏"],
        description: "沈阳音乐学院钢琴系优秀毕业生，辽宁人民艺术剧院附属艺术学校钢琴专业主教教师，国家四级演奏员。",
        education: "沈阳音乐学院",
        noteId: "67458f4100000000060156a6"
    },
    {
        id: 15,
        name: "姜老师",
        instrument: "钢琴/调律",
        category: "piano",
        area: "和平区",
        image: "images/31_6737508d000000001a035e7a_沈阳｜和平区｜钢琴老师_1.webp",
        honors: ["视奏水平299", "演奏水平740"],
        description: "毕业于沈阳音乐学院，师从邵申弘教授，视奏水平299，钢琴演奏水平740，同时从事钢琴调律工作，考级通过率高。",
        education: "沈阳音乐学院",
        noteId: "6737508d000000001a035e7a"
    },
    {
        id: 16,
        name: "刘老师",
        instrument: "钢琴",
        category: "piano",
        area: "沈河区",
        image: "images/34_67371acc000000001d03a94a_沈阳｜沈河区｜钢琴老师_1.webp",
        honors: ["考级通过率100%", "三角钢琴授课"],
        description: "毕业于沈阳音乐学院钢琴系，硕士学位，教龄十余年，三角钢琴授课，考级通过率100%，每年定期组织学生参加比赛演出。",
        education: "沈阳音乐学院硕士",
        noteId: "67371acc000000001d03a94a"
    },
    {
        id: 17,
        name: "盖老师",
        instrument: "钢琴",
        category: "piano",
        area: "浑南区",
        image: "images/51_673369f1000000003c014222_沈阳｜浑南区｜钢琴老师_1.webp",
        honors: ["勃兰登堡一等奖", "紫荆花优秀教师"],
        description: "2011年考入沈阳音乐学院附中，2014年考入沈阳音乐学院，荣获勃兰登堡比赛专业组一等奖，紫荆花大赛优秀指导教师。",
        education: "沈阳音乐学院",
        noteId: "673369f1000000003c014222"
    },
    {
        id: 18,
        name: "孟老师",
        instrument: "钢琴",
        category: "piano",
        area: "沈北新区",
        image: "images/41_67347649000000001a035be5_沈阳｜沈北新区｜钢琴老师_1.webp",
        honors: ["华为峰会演奏", "辽宁赛区第一名"],
        description: "毕业于沈阳音乐学院钢琴系演奏专业，2019年辽宁华为峰会开幕担任钢琴演奏，擅长钢琴、古筝、竹笛、箫。",
        education: "沈阳音乐学院",
        noteId: "67347649000000001a035be5"
    },
    {
        id: 19,
        name: "卢老师",
        instrument: "声乐",
        category: "vocal",
        area: "沈北新区",
        image: "images/08_67a18fca0000000018007ed3_沈阳｜沈北新区｜声乐老师_1.webp",
        honors: ["辽宁省第40名", "辽宁卫视合唱指导"],
        description: "就读于辽宁大学美声表演专业，2021年辽宁省统考美声表演全省第40名，2022年参加辽宁卫视《音漫》合唱指导教师。",
        education: "辽宁大学",
        noteId: "67a18fca0000000018007ed3"
    },
    {
        id: 20,
        name: "孙老师",
        instrument: "声乐",
        category: "vocal",
        area: "沈北新区",
        image: "images/39_673576d7000000003c01c9db_沈阳｜沈北新区｜声乐老师_1.webp",
        honors: ["辽宁省第27名", "前1%专业排名"],
        description: "沈阳师范大学美声表演系，辽宁省音乐演唱专业27名（共2200余人），特别有耐心，肯吃苦耐劳。",
        education: "沈阳师范大学",
        noteId: "673576d7000000003c01c9db"
    },
    {
        id: 21,
        name: "刘畅老师",
        instrument: "声乐",
        category: "vocal",
        area: "大东区",
        image: "images/28_673c78b8000000000203bb2a_沈阳｜大东区｜声乐老师_1.webp",
        honors: ["辽宁歌剧院", "阎维文同台"],
        description: "毕业于沈阳音乐学院声乐歌剧系，曾担任辽宁歌剧院合唱团女高音，2021年辽宁省新年音乐会与阎维文老师同台演出。",
        education: "沈阳音乐学院",
        noteId: "673c78b8000000000203bb2a"
    },
    {
        id: 22,
        name: "王老师",
        instrument: "声乐",
        category: "vocal",
        area: "和平区",
        image: "images/54_6732073b000000003c019861_沈阳｜和平区｜声乐老师_1.webp",
        honors: ["中国好声音季军", "CCTV全国百强"],
        description: "就读于沈阳音乐学院，中国好声音人气季军，CCTV青年歌手大赛全国百强沈阳冠军，个人单曲《无畏之年》《天后》等。",
        education: "沈阳音乐学院",
        noteId: "6732073b000000003c019861"
    },
    {
        id: 23,
        name: "边宇老师",
        instrument: "吉他",
        category: "guitar",
        area: "东中街",
        image: "images/17_6753f54900000000060171da_沈阳｜东中街｜吉他老师_1.webp",
        honors: ["原创歌曲发行", "近百场演出"],
        description: "毕业于沈阳理工大学，出版发行原创歌曲《风很凉》等，民谣吉他弹唱领域先进教学理念，近百场乐队及个人演出经验。",
        education: "沈阳理工大学",
        noteId: "6753f54900000000060171da"
    },
    {
        id: 24,
        name: "赵老师",
        instrument: "吉他",
        category: "guitar",
        area: "铁西区",
        image: "images/45_673449c2000000003c0193c8_沈阳｜铁西区｜吉他老师_1.webp",
        honors: ["辽视春晚", "合作汪苏泷"],
        description: "沈阳音乐学院现代音乐学院流行电吉他演奏专业，合作艺人：汪苏泷、艾热等，2022年辽宁春晚《青春闪耀》演出。",
        education: "沈阳音乐学院",
        noteId: "673449c2000000003c0193c8"
    },
    {
        id: 25,
        name: "吴老师",
        instrument: "吉他",
        category: "guitar",
        area: "和平区",
        image: "images/50_67336cd3000000003c016059_沈阳｜和平区｜吉他老师_1.webp",
        honors: ["中央音乐学院授权", "考级评委"],
        description: "从业13年经验丰富，可可吉他工作室创始人，中央音乐学院官方授权吉他教室，中国艺术特长生考级评委。",
        education: "中央音乐学院授权",
        noteId: "67336cd3000000003c016059"
    },
    {
        id: 26,
        name: "赵芷骏老师",
        instrument: "小提琴",
        category: "violin",
        area: "和平区",
        image: "images/27_673c7987000000000202d545_沈阳｜和平区｜小提琴老师_1.webp",
        honors: ["十级20人+", "金奖30人+"],
        description: "毕业于沈阳音乐学院，已通过小提琴十级专业人数超20人，获得全国性质比赛金奖人数超30人，教学风格轻松幽默。",
        education: "沈阳音乐学院",
        noteId: "673c7987000000000202d545"
    },
    {
        id: 27,
        name: "张老师",
        instrument: "小提琴",
        category: "violin",
        area: "大东区",
        image: "images/29_67375f4d000000003c01cad5_沈阳｜大东区｜小提琴老师_1.webp",
        honors: ["15年教学经验", "俄罗斯国际比赛"],
        description: "毕业于沈阳音乐学院管弦系，师从著名小提琴教育家李晓育教授，教学经验十五年，俄罗斯国际音乐公开赛最佳指导教师。",
        education: "沈阳音乐学院",
        noteId: "67375f4d000000003c01cad5"
    },
    {
        id: 28,
        name: "杨宇老师",
        instrument: "小提琴",
        category: "violin",
        area: "铁西区",
        image: "images/22_67512b980000000002019100_沈阳｜铁西区｜小提琴老师_1.webp",
        honors: ["辽视春晚", "中央音乐学院"],
        description: "5岁学琴，毕业于沈阳音乐学院管弦系和中央音乐学院，2018年受邀参加辽视春晚与郎朗同台演出，香港国际小提琴大赛铜奖。",
        education: "沈阳音乐学院/中央音乐学院",
        noteId: "67512b980000000002019100"
    },
    {
        id: 29,
        name: "王世耀老师",
        instrument: "小提琴/中提琴",
        category: "violin",
        area: "沈河区",
        image: "images/20_6753a8fb000000000202a900_沈阳｜沈河区｜小提琴老师_1.webp",
        honors: ["辽视春晚", "辽宁交响乐团"],
        description: "现专业中提琴小提琴，沈阳音乐学院管弦器乐教育系，辽宁交响乐团演奏员，沈阳青年交响乐团副首席，辽视春晚演出。",
        education: "沈阳音乐学院",
        noteId: "6753a8fb000000000202a900"
    },
    {
        id: 30,
        name: "董老师",
        instrument: "长笛",
        category: "wind",
        area: "浑南区",
        image: "images/32_67374e27000000003c01c7a0_沈阳｜浑南区｜长笛老师_1.webp",
        honors: ["笛龄24年", "考级通过率100%"],
        description: "吉林艺术学院音乐表演长笛专业，笛龄24年，14年教学经验，中国长笛联合会会员，中国音乐学院考级通过率100%。",
        education: "吉林艺术学院",
        noteId: "67374e27000000003c01c7a0"
    },
    {
        id: 31,
        name: "李老师",
        instrument: "长笛",
        category: "wind",
        area: "浑南区",
        image: "images/33_67371d08000000001d0384ff_沈阳｜浑南区｜长笛老师_1.webp",
        honors: ["白玉兰优秀教师", "蜂鸟大赛优秀教师"],
        description: "2015年毕业开始从事长笛教育，培养超过100名学员，2023年受聘担任铁路实验小学管乐团长笛声部主讲教师。",
        education: "沈阳师范大学",
        noteId: "67371d08000000001d0384ff"
    },
    {
        id: 32,
        name: "马老师",
        instrument: "小号",
        category: "wind",
        area: "浑南区",
        image: "images/35_6737171b000000003c016f1e_沈阳｜浑南区｜小号老师_1.webp",
        honors: ["郎朗同台", "吕思清同台"],
        description: "中国小号专业委员会理事，国家三级演奏员，前凉山交响乐团小号首席，与郎朗、吕思清等艺术家合作演出。",
        education: "东北大学",
        noteId: "6737171b000000003c016f1e"
    },
    {
        id: 33,
        name: "李老师",
        instrument: "小号",
        category: "wind",
        area: "沈河区",
        image: "images/40_6735751b000000003c01f862_沈阳｜沈河区｜小号老师_1.webp",
        honors: ["辽宁北方交响乐团", "多校乐团指导"],
        description: "毕业于沈阳音乐学院爵士小号专业，原辽宁北方交响乐团小号演奏员，受聘于多所学校担任铜管乐器指导教师。",
        education: "沈阳音乐学院",
        noteId: "6735751b000000003c01f862"
    },
    {
        id: 34,
        name: "佟老师",
        instrument: "萨克斯",
        category: "wind",
        area: "沈北新区",
        image: "images/43_673470a4000000003c014704_沈阳｜沈北新区｜萨克斯老师_1.webp",
        honors: ["乐团比赛第二名", "大师课经历"],
        description: "毕业于沈阳音乐学院，师从尹鹏翰先生，2016年沈阳市中小学生乐团比赛第二名，曾上日本萨克斯大师须川展也大师课。",
        education: "沈阳音乐学院",
        noteId: "673470a4000000003c014704"
    },
    {
        id: 35,
        name: "段老师",
        instrument: "古筝",
        category: "chinese",
        area: "沈河区",
        image: "images/44_67344c56000000003c017828_沈阳｜沈河区｜古筝老师_1.webp",
        honors: ["吉尼斯世界纪录", "全国新筝大赛银奖"],
        description: "中国东方乐团演奏家，2007年随中国东方乐团赴新加坡、泰国演出，曾获全国首届新筝大赛银奖，带领学生创造吉尼斯世界纪录。",
        education: "中国东方乐团",
        noteId: "67344c56000000003c017828"
    },
    {
        id: 36,
        name: "白老师",
        instrument: "阮",
        category: "chinese",
        area: "沈阳",
        image: "images/10_67693575000000000b015c5e_沈阳｜阮 老师_1.webp",
        honors: ["中韩国际一等奖", "新加坡铜奖"],
        description: "沈阳音乐学院2022级本科生，北方民族乐团成员，中韩国际音乐比赛阮青年高校组一等奖，新加坡南洋国际音乐大赛铜奖。",
        education: "沈阳音乐学院",
        noteId: "67693575000000000b015c5e"
    },
    {
        id: 37,
        name: "袁老师",
        instrument: "竹笛",
        category: "chinese",
        area: "浑南区",
        image: "images/38_673616c9000000003c01abc6_沈阳｜浑南区｜竹笛老师_1.webp",
        honors: ["全国第一考入", "新加坡华乐大赛一等奖"],
        description: "毕业于沈阳音乐学院民族器乐教育系，2016年以全国第一成绩考入，2018年第三届新加坡莱佛士国际华乐大赛专业组一等奖。",
        education: "沈阳音乐学院",
        noteId: "673616c9000000003c01abc6"
    },
    {
        id: 38,
        name: "刘老师",
        instrument: "古筝",
        category: "chinese",
        area: "浑南区",
        image: "images/53_67335e40000000001a035147_沈阳｜浑南区｜古筝老师_1.webp",
        honors: ["新加坡金奖", "考级通过率100%"],
        description: "毕业于沈阳音乐学院，新加坡音乐青年组专业组古筝金奖，考级通过率100%，学生比赛多次荣获金银奖。",
        education: "沈阳音乐学院",
        noteId: "67335e40000000001a035147"
    },
    {
        id: 39,
        name: "何老师",
        instrument: "打击乐",
        category: "other",
        area: "浑南区",
        image: "images/52_673368a1000000003c01ac1c_沈阳｜浑南区｜打击乐老师_1.webp",
        honors: ["IPEA优秀指导", "中新国际音乐比赛评委"],
        description: "毕业于沈阳音乐学院管弦系打击乐专业，辽宁省打击乐协会常任理事，2024年IPEA优秀指导老师，中新国际音乐比赛评委。",
        education: "沈阳音乐学院",
        noteId: "673368a1000000003c01ac1c"
    },
    {
        id: 40,
        name: "邱老师",
        instrument: "双簧管/萨克斯",
        category: "wind",
        area: "浑南区",
        image: "images/59_6731c8bb000000001d039561_沈阳｜浑南区｜双簧管老师_1.webp",
        honors: ["谭盾音乐会", "音悦家年度优秀教师"],
        description: "九岁开始学习双簧管，2014年参演指挥家谭盾举办的西安丝绸之路音乐会，2022年音悦家APP年度优秀教师。",
        education: "沈阳音乐学院",
        noteId: "6731c8bb000000001d039561"
    },
    {
        id: 41,
        name: "徐赫阳老师",
        instrument: "大提琴",
        category: "other",
        area: "长白",
        image: "images/11_67651d73000000000b0144b2_沈阳｜长白｜大提琴老师_1.webp",
        honors: ["交响乐团首席", "桃李杯优秀教师"],
        description: "毕业于沈阳音乐学院，沈阳音乐学院交响乐团大提琴首席，桃李杯和紫荆花比赛优秀指导教师，深受家长一致好评。",
        education: "沈阳音乐学院",
        noteId: "67651d73000000000b0144b2"
    },
    {
        id: 42,
        name: "胡高熇老师",
        instrument: "大提琴",
        category: "other",
        area: "长白",
        image: "images/18_6753f00d000000000202c848_沈阳｜长白｜大提琴老师_1.webp",
        honors: ["莫扎特金奖", "百余次合奏演出"],
        description: "沈阳音乐学院音乐教育专业，参加过百余次合奏演出，2019年莫扎特大提琴演奏金奖，紫荆花杯、桃李杯优秀指导教师。",
        education: "沈阳音乐学院",
        noteId: "6753f00d000000000202c848"
    },
    {
        id: 43,
        name: "Arturo老师",
        instrument: "大提琴",
        category: "other",
        area: "和平区",
        image: "images/49_67337526000000001d03bd4c_沈阳｜和平区｜大提琴老师_1.webp",
        honors: ["国家艺术基金", "全国大学生艺术展演一等奖"],
        description: "参与国家艺术基金项目，大学期间担任沈阳师范大学青年交响乐团大提琴首席，教学风格幽默风趣，深受家长好评。",
        education: "沈阳师范大学",
        noteId: "67337526000000001d03bd4c"
    },
    {
        id: 44,
        name: "彭老师",
        instrument: "大提琴",
        category: "other",
        area: "和平区",
        image: "images/36_67361bf4000000003c01ec1d_沈阳｜和平区｜大提琴老师_1.webp",
        honors: ["德国汉诺威交流", "专业第2名"],
        description: "5岁起钢琴启蒙，大提琴琴龄17年，2015年以本专业第2名成绩考上沈阳音乐学院，2018年前往德国汉诺威音乐和戏剧学院学术交流。",
        education: "沈阳音乐学院",
        noteId: "67361bf4000000003c01ec1d"
    },
    {
        id: 45,
        name: "周老师",
        instrument: "大提琴",
        category: "other",
        area: "浑南区",
        image: "images/61_6731c34c000000001d03973b_沈阳｜浑南区｜大提琴老师_1.webp",
        honors: ["全国大学生艺术展演一等奖", "评剧《蔚凤英》"],
        description: "沈阳师范大学硕士研究生，2018年参演交响乐《节日序曲》获第五届全国大学生艺术展演团体一等奖，参与评剧《蔚凤英》排练及演出。",
        education: "沈阳师范大学硕士",
        noteId: "6731c34c000000001d03973b"
    },
    {
        id: 46,
        name: "关老师",
        instrument: "铜管",
        category: "wind",
        area: "皇姑区",
        image: "images/62_6731bf61000000003c015d36_沈阳｜皇姑区｜小号老师_1.webp",
        honors: ["中国新说唱伴奏", "CCTV录制"],
        description: "辽宁省沈阳市第十八届学生艺术节优秀指导教师，2018年在爱奇艺录制《中国新说唱》总决赛伴奏，CCTV-3《歌声飘过四十年》录制。",
        education: "沈阳大学",
        noteId: "6731bf61000000003c015d36"
    },
    {
        id: 47,
        name: "高老师",
        instrument: "小提琴",
        category: "violin",
        area: "大连",
        image: "images/58_6731d8fc000000001a036614_大连｜新高园区｜小提琴老师_1.webp",
        honors: ["勃兰登堡一等奖", "红旗颂音乐会"],
        description: "毕业于沈阳音乐学院管弦器乐教育系小提琴教育专业，2019年勃兰登堡全国音乐大赛青年组一等奖，2021年随沈阳音乐学院学生管弦乐团参加红旗颂主题音乐会。",
        education: "沈阳音乐学院",
        noteId: "6731d8fc000000001a036614"
    },
    {
        id: 48,
        name: "蒋老师",
        instrument: "钢琴调律",
        category: "other",
        area: "沈阳",
        image: "images/48_6734353c000000001d03aa24_沈阳｜国家高级钢琴调律师_1.webp",
        honors: ["国家高级调律师", "音乐会调律经验"],
        description: "国家注册高级钢琴调律师，辽宁省钢琴调律师协会会员，曾为多所高等艺术院校调琴，多次给音乐会和著名国际钢琴家服务于钢琴调律。",
        education: "沈阳音乐学院",
        noteId: "6734353c000000001d03aa24"
    },
    {
        id: 49,
        name: "谢老师",
        instrument: "声乐/钢琴",
        category: "vocal",
        area: "浑南区",
        image: "images/60_6731c5fc000000003c01f355_沈阳｜浑南区｜声乐老师_1.webp",
        honors: ["星光校园二等奖", "多名学生考入沈音"],
        description: "本科毕业于沈阳音乐学院，硕士期间在国外求学，曾执导学生考入沈阳音乐学院、哈尔滨音乐学院、哈尔滨师范学院。",
        education: "沈阳音乐学院/国外硕士",
        noteId: "6731c5fc000000003c01f355"
    },
    {
        id: 50,
        name: "刘老师",
        instrument: "长笛",
        category: "wind",
        area: "皇姑区",
        image: "images/56_6731dca2000000001a035014_沈阳｜皇姑区｜长笛老师_1.webp",
        honors: ["12年教学经验", "东北地区金奖"],
        description: "沈阳师范大学音乐学院硕士研究生，从事长笛教学工作12年，指导学生《万疆》长笛四重奏获得东北地区长笛合奏比赛金奖。",
        education: "沈阳师范大学硕士",
        noteId: "6731dca2000000001a035014"
    },
    {
        id: 51,
        name: "月月老师",
        instrument: "长笛",
        category: "wind",
        area: "大东区",
        image: "images/37_67361a17000000001a035b4b_沈阳｜大东区｜长笛老师_1.webp",
        honors: ["省级优秀毕业生", "9年教学经验"],
        description: "本科及研究生均毕业于沈阳音乐学院，在校期间多次获得学业奖学金并荣获省级优秀毕业生称号，有九年长笛专业教学经验。",
        education: "沈阳音乐学院硕士",
        noteId: "67361a17000000001a035b4b"
    }
];

// ========================================
// Instrument Data - 乐器数据
// ========================================
const instrumentsData = [
    { name: "钢琴", icon: "🎹", count: 10, category: "western" },
    { name: "小提琴", icon: "🎻", count: 15, category: "western" },
    { name: "吉他", icon: "🎸", count: 6, category: "western" },
    { name: "长笛", icon: "🎵", count: 5, category: "western" },
    { name: "小号", icon: "🎺", count: 3, category: "western" },
    { name: "萨克斯", icon: "🎷", count: 2, category: "western" },
    { name: "大提琴", icon: "🎻", count: 5, category: "western" },
    { name: "打击乐", icon: "🥁", count: 1, category: "western" },
    { name: "双簧管", icon: "🎵", count: 1, category: "western" },
    { name: "声乐", icon: "🎤", count: 8, category: "vocal" },
    { name: "古筝", icon: "🏮", count: 3, category: "chinese" },
    { name: "竹笛", icon: "🎋", count: 1, category: "chinese" },
    { name: "阮", icon: "🎵", count: 1, category: "chinese" },
    { name: "钢琴调律", icon: "🔧", count: 1, category: "other" }
];

// ========================================
// Honor Images - 荣誉图片
// ========================================
const honorImages = [
    "images-honor/0bb88640a2c3557e113f1637bac58e2.jpg",
    "images-honor/18ecce615785ff484e5ea34cadc7073.jpg",
    "images-honor/3803c355dde04407de3e741e50c72d6.jpg",
    "images-honor/493a8690a0074b01ddbe19eb9647408.jpg",
    "images-honor/4e5492cfc6b531b5fe38457124d32c6.jpg",
    "images-honor/62bf395532ea6c011dc3a62640f0a32.jpg",
    "images-honor/7e034302f940932b78da8da8efd2310.jpg",
    "images-honor/8d096d7ef5b7debc0e729d4bb79f4cf.jpg",
    "images-honor/a6e2765909eeee26dfaa92b411b5e33.jpg",
    "images-honor/a8d58e83ba56423d262b69a278a8dea.jpg",
    "images-honor/e64f862096ca5a3e2f774141acfd630.jpg",
    "images-honor/f649a436e197faa51d3a49f804b771b.jpg"
];

// ========================================
// DOM Elements
// ========================================
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('backToTop');
const teachersGrid = document.getElementById('teachersGrid');
const instrumentsGrid = document.getElementById('instrumentsGrid');
const honorTrack = document.getElementById('honorTrack');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const contactForm = document.getElementById('contactForm');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const teacherModal = document.getElementById('teacherModal');
const modalClose = document.getElementById('modalClose');

// State
let displayedTeachers = 9;
let currentFilter = 'all';

// ========================================
// Teacher Modal - 教师详情弹窗
// ========================================
function openTeacherModal(teacherId) {
    const teacher = teachersData.find(t => t.id === teacherId);
    if (!teacher) return;

    // Encode image path
    const imgPath = teacher.image.split('/').map((part, i, arr) => {
        if (i === arr.length - 1) {
            return encodeURIComponent(part);
        }
        return part;
    }).join('/');

    // Update modal content
    document.getElementById('modalName').textContent = teacher.name;
    document.getElementById('modalEducation').textContent = teacher.education;
    document.getElementById('modalInstrument').textContent = `🎹 ${teacher.instrument}`;
    document.getElementById('modalArea').textContent = `📍 ${teacher.area}`;
    document.getElementById('modalEducationDetail').textContent = teacher.education;
    document.getElementById('modalDescription').textContent = teacher.description;
    document.getElementById('modalBadge').textContent = teacher.area;

    // Set Xiaohongshu link
    const xhsLink = document.getElementById('modalXhsLink');
    if (teacher.noteId) {
        xhsLink.href = `https://www.xiaohongshu.com/explore/${teacher.noteId}`;
        xhsLink.target = '_blank';
        xhsLink.rel = 'noopener noreferrer';
    }

    // Set image
    const modalImage = document.getElementById('modalImage');
    const modalFallback = document.getElementById('modalFallback');

    modalImage.src = imgPath;
    modalImage.alt = teacher.name;
    modalImage.style.display = 'block';
    modalFallback.style.display = 'none';

    modalImage.onerror = function() {
        this.style.display = 'none';
        modalFallback.style.display = 'flex';
        document.getElementById('modalFallbackIcon').textContent = teacher.instrument.charAt(0);
        document.getElementById('modalFallbackName').textContent = teacher.name;
    };

    // Render honors
    const honorsContainer = document.getElementById('modalHonors');
    honorsContainer.innerHTML = teacher.honors.map(h =>
        `<span class="honor-item">🏆 ${h}</span>`
    ).join('');

    // Show modal
    teacherModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTeacherModal() {
    teacherModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal events
if (modalClose) {
    modalClose.addEventListener('click', closeTeacherModal);
}

if (teacherModal) {
    teacherModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeTeacherModal();
        }
    });
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && teacherModal.classList.contains('active')) {
        closeTeacherModal();
    }
});

// Add click events to teacher cards
function addTeacherCardEvents() {
    const cards = document.querySelectorAll('.teacher-card');
    cards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            // Don't open modal if clicking the button or link
            if (e.target.classList.contains('teacher-btn') || e.target.closest('.teacher-btn')) {
                return;
            }

            const toShow = currentFilter === 'all'
                ? teachersData.slice(0, displayedTeachers)
                : teachersData.filter(t => t.category === currentFilter).slice(0, displayedTeachers);

            if (toShow[index]) {
                openTeacherModal(toShow[index].id);
            }
        });
    });
}

// ========================================
// Mobile Menu
// ========================================
if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', function() {
    // Wait for all welcome text to animate in
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.opacity = '1';
    }, 3000);
});

// ========================================
// Navigation
// ========================================
window.addEventListener('scroll', function() {
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Back to top
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========================================
// Render Instruments
// ========================================
function renderInstruments(category = 'all') {
    const filtered = category === 'all'
        ? instrumentsData
        : instrumentsData.filter(i => i.category === category);

    instrumentsGrid.innerHTML = filtered.map(inst => `
        <div class="instrument-item" onclick="filterTeachersByInstrument('${inst.name}')">
            <span class="icon">${inst.icon}</span>
            <span class="name">${inst.name}</span>
            <span class="count">${inst.count}位老师</span>
        </div>
    `).join('');
}

// Instrument tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderInstruments(this.dataset.category);
    });
});

// Filter teachers by instrument
function filterTeachersByInstrument(instrumentName) {
    scrollToSection('teachers');
    setTimeout(() => {
        currentFilter = 'all';
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');

        const filtered = teachersData.filter(t =>
            t.instrument.includes(instrumentName)
        );
        renderTeachers(filtered);
    }, 500);
}

// ========================================
// Render Teachers
// ========================================
function renderTeachers(teachers = null) {
    const data = teachers || teachersData;
    const toShow = teachers ? data : data.slice(0, displayedTeachers);

    teachersGrid.innerHTML = toShow.map((teacher, index) => {
        // Encode image path for Chinese characters
        const imgPath = teacher.image.split('/').map((part, i) => {
            if (i === teacher.image.split('/').length - 1) {
                return encodeURIComponent(part);
            }
            return part;
        }).join('/');

        return `
        <div class="teacher-card" style="animation-delay: ${index * 0.08}s">
            <div class="teacher-card-img-wrapper">
                <img src="${imgPath}" alt="${teacher.name}" class="teacher-card-img"
                     loading="lazy"
                     onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'img-fallback\\'><span class=\\'fallback-icon\\'>${teacher.instrument.charAt(0)}</span><span class=\\'fallback-name\\'>${teacher.name}</span></div><span class=\\'teacher-card-badge\\'>${teacher.area}</span>';">
                <span class="teacher-card-badge">${teacher.area}</span>
                <div class="teacher-card-overlay">
                    <span class="overlay-text">查看详情</span>
                </div>
            </div>
            <div class="teacher-card-body">
                <div class="teacher-card-header">
                    <h3 class="teacher-card-name">${teacher.name}</h3>
                    <span class="teacher-education">${teacher.education}</span>
                </div>
                <div class="teacher-card-meta">
                    <span class="meta-tag instrument-tag">🎹 ${teacher.instrument}</span>
                    ${teacher.honors.slice(0, 2).map(h => `<span class="meta-tag honor-tag">🏆 ${h}</span>`).join('')}
                </div>
                <p class="teacher-card-desc">${teacher.description}</p>
                <div class="teacher-card-footer">
                    <span class="teacher-area">📍 ${teacher.area}</span>
                    <a href="https://www.xiaohongshu.com/explore/${teacher.noteId}" target="_blank" rel="noopener noreferrer" class="teacher-btn" onclick="event.stopPropagation();">前往小红书</a>
                </div>
            </div>
        </div>
        `;
    }).join('');

    // Update load more button
    if (!teachers && displayedTeachers >= data.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }

    // Add click events to cards
    setTimeout(() => addTeacherCardEvents(), 100);
}

// Teacher filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;

        const filtered = currentFilter === 'all'
            ? teachersData
            : teachersData.filter(t => t.category === currentFilter);

        displayedTeachers = 9;
        renderTeachers(filtered);
    });
});

// Load more
loadMoreBtn.addEventListener('click', function() {
    displayedTeachers += 9;
    const filtered = currentFilter === 'all'
        ? teachersData
        : teachersData.filter(t => t.category === currentFilter);
    renderTeachers(filtered);
});

// ========================================
// Render Honor Images
// ========================================
function renderHonorImages() {
    // Duplicate for infinite scroll effect
    const images = [...honorImages, ...honorImages];
    honorTrack.innerHTML = images.map(src => `
        <img src="${src}" alt="荣誉资质" onerror="this.style.display='none'">
    `).join('');
}

// ========================================
// Contact Form - 表单提交
// ========================================
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = '<span>发送中...</span>';
    submitBtn.disabled = true;

    try {
        // Submit to Formspree
        const response = await fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Success
            showSuccessMessage('🎉 感谢您的留言！我们会尽快与您联系。');
            this.reset();
        } else {
            // Error
            showSuccessMessage('❌ 发送失败，请稍后重试或直接联系我们。');
        }
    } catch (error) {
        // Network error
        showSuccessMessage('❌ 网络错误，请检查网络连接后重试。');
    }

    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
});

// Success message function
function showSuccessMessage(message) {
    const successMsg = document.createElement('div');
    successMsg.innerHTML = message;
    successMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #FFB3BA 0%, #C3B1E1 100%);
        color: white;
        padding: 30px 50px;
        border-radius: 25px;
        font-size: 1.2rem;
        font-weight: 600;
        box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        text-align: center;
        max-width: 90%;
    `;
    document.body.appendChild(successMsg);

    // Add animation style
    if (!document.getElementById('pop-style')) {
        const style = document.createElement('style');
        style.id = 'pop-style';
        style.textContent = `
            @keyframes popIn {
                0% { transform: translate(-50%, -50%) scale(0) rotate(-10deg); }
                50% { transform: translate(-50%, -50%) scale(1.1) rotate(5deg); }
                100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            }
            @keyframes popOut {
                0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => {
        successMsg.style.animation = 'popOut 0.4s ease forwards';
        setTimeout(() => successMsg.remove(), 400);
    }, 3000);
}

// ========================================
// Counter Animation
// ========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-num[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .teacher-card, .instrument-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========================================
// Fun Interactions
// ========================================

// Sparkle on note click
document.querySelectorAll('.note').forEach(note => {
    note.addEventListener('click', function(e) {
        for (let i = 0; i < 6; i++) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                font-size: 1.5rem;
                pointer-events: none;
                z-index: 9999;
                animation: sparkleAnim 0.8s ease-out forwards;
                --tx: ${(Math.random() - 0.5) * 80}px;
                --ty: ${(Math.random() - 0.5) * 80}px;
            `;
            document.body.appendChild(sparkle);
        }
    });
});

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnim {
        0% { transform: translate(0, 0) scale(1); opacity: 1; }
        100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
    }
`;
document.head.appendChild(sparkleStyle);

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    renderInstruments();
    renderTeachers();
    renderHonorImages();
    animateCounters();

    // Add teacher card click events after initial render
    setTimeout(() => addTeacherCardEvents(), 200);
});
