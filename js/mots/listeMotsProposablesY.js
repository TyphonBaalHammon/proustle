(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListeMotsProposablesY = /** @class */ (function () {
        function ListeMotsProposablesY() {
        }
        ListeMotsProposablesY.Dictionnaire = ["YAACOUBI",
            "YAAKU",
            "YABEM",
            "YABRIR",
            "YACARE",
            "YACARES",
            "YACHMAK",
            "YACHT",
            "YACHTING",
            "YACHTINGS",
            "YACHTMAN",
            "YACHTMANS",
            "YACHTMEN",
            "YACHTS",
            "YACHTSMAN",
            "YACHTSMEN",
            "YACHTSWOMAN",
            "YACHTWOMAN",
            "YACHTWOMANS",
            "YACKIER",
            "YACKIERS",
            "YACKS",
            "YACONO",
            "YACOUBA",
            "YACOUBI",
            "YAFIL",
            "YAGAN",
            "YAGHNOBI",
            "YAGOUBI",
            "YAGUA",
            "YAGUAS",
            "YAHOURT",
            "YAINVILLAISE",
            "YAINVILLAISES",
            "YAINVILLE",
            "YAKAN",
            "YAKANS",
            "YAKAS",
            "YAKINIKU",
            "YAKITORI",
            "YAKOMA",
            "YAKOMAS",
            "YAKOUBI",
            "YAKOUT",
            "YAKOUTE",
            "YAKOUTES",
            "YAKTARO",
            "YAKTAROS",
            "YAKUSA",
            "YAKUSAS",
            "YAKUZA",
            "YAKUZAS",
            "YALIS",
            "YAMACHICHOISE",
            "YAMBASSA",
            "YAMBASSAS",
            "YAMINAHUA",
            "YANDOU",
            "YANDOUS",
            "YANEZ",
            "YANGBEN",
            "YANGHIR",
            "YANGS",
            "YANICHE",
            "YANKE",
            "YANKEE",
            "YANKEES",
            "YANKES",
            "YANKISTE",
            "YANKISTES",
            "YANNICK",
            "YANOMAMI",
            "YANOMAMIS",
            "YANSI",
            "YANZI",
            "YAOIS",
            "YAOURT",
            "YAOURTIER",
            "YAOURTIERE",
            "YAOURTIERES",
            "YAOURTIERS",
            "YAOURTS",
            "YARCHAGUMBA",
            "YARDIN",
            "YARDS",
            "YARMOLA",
            "YARRIC",
            "YARSAGUMBA",
            "YARSAGUMBU",
            "YASHARGUMBA",
            "YASMINE",
            "YASSA",
            "YASSAI",
            "YASSAIENT",
            "YASSAIS",
            "YASSAIT",
            "YASSAMES",
            "YASSANT",
            "YASSAS",
            "YASSASSE",
            "YASSASSENT",
            "YASSASSES",
            "YASSASSIEZ",
            "YASSASSIONS",
            "YASSAT",
            "YASSATES",
            "YASSE",
            "YASSENT",
            "YASSER",
            "YASSERA",
            "YASSERAI",
            "YASSERAIENT",
            "YASSERAIS",
            "YASSERAIT",
            "YASSERAS",
            "YASSERENT",
            "YASSEREZ",
            "YASSERIEZ",
            "YASSERIONS",
            "YASSERONS",
            "YASSERONT",
            "YASSES",
            "YASSEZ",
            "YASSIEZ",
            "YASSINE",
            "YASSIONS",
            "YASSONS",
            "YATAGAN",
            "YATAGANS",
            "YATES",
            "YAUDE",
            "YAUDES",
            "YAVAPAI",
            "YAVAPAIS",
            "YAWDANCHI",
            "YAWELMANI",
            "YAWORSKY",
            "YAZIDI",
            "YAZIDIS",
            "YAZIDISME",
            "YAZIDISMES",
            "YBANEZ",
            "YBARRA",
            "YCARD",
            "YCHOUSSOISE",
            "YCHOUSSOISES",
            "YDOISE",
            "YDOISES",
            "YEARLING",
            "YEARLINGS",
            "YEBLE",
            "YEBLERON",
            "YEBLERONNAISE",
            "YEBLES",
            "YEBULIEN",
            "YEBULIENNE",
            "YEBULIENNES",
            "YEBULIENS",
            "YEGACE",
            "YEGACEE",
            "YEGACEES",
            "YEGACES",
            "YELLE",
            "YEMENITE",
            "YEMENITES",
            "YENES",
            "YENICHE",
            "YENICHES",
            "YENITE",
            "YENNOISE",
            "YENNOISES",
            "YENOTTE",
            "YEODET",
            "YEOMAN",
            "YEOMANERIE",
            "YEOMANERIES",
            "YEOMANRY",
            "YEOMANS",
            "YEOMEN",
            "YERROISE",
            "YERROISES",
            "YERSIN",
            "YERSINIA",
            "YERSINIOSE",
            "YERSINIOSES",
            "YERVANTIAN",
            "YERVILLAISE",
            "YERVILLAISES",
            "YERVILLE",
            "YESHIVA",
            "YESHIVAS",
            "YETIS",
            "YEULE",
            "YEULES",
            "YEUSAIE",
            "YEUSE",
            "YEUSES",
            "YEVROISE",
            "YEVROISES",
            "YEYEE",
            "YEYEES",
            "YEYEFICATION",
            "YEYEFICATIONS",
            "YEYES",
            "YEZIDI",
            "YEZIDIS",
            "YEZIDISME",
            "YEZIDISMES",
            "YFFINIACAISE",
            "YFFINIACAISES",
            "YGOSSAISE",
            "YGOSSAISES",
            "YGOUF",
            "YGRANDAISE",
            "YGRANDAISES",
            "YHARRASSARRY",
            "YIDDISCH",
            "YIDDISH",
            "YIDDISHOPHONE",
            "YIDDISHS",
            "YIDICH",
            "YIDICHE",
            "YIDICHES",
            "YINDJIBARNDI",
            "YINLONG",
            "YINLONGS",
            "YMARE",
            "YMAROISE",
            "YMAROISES",
            "YMONVILLOISE",
            "YMONVILLOISES",
            "YNESTA",
            "YNIESTA",
            "YOANN",
            "YOBIBIT",
            "YOBIBITS",
            "YOBIOCTET",
            "YOBIOCTETS",
            "YOCOM",
            "YOCTOAMPERE",
            "YOCTOAMPERES",
            "YOCTOBEL",
            "YOCTOBELS",
            "YOCTOCANDELA",
            "YOCTOCANDELAS",
            "YOCTOCOULOMB",
            "YOCTOCOULOMBS",
            "YOCTOFARAD",
            "YOCTOFARADS",
            "YOCTOGRAMME",
            "YOCTOGRAMMES",
            "YOCTOGRAY",
            "YOCTOGRAYS",
            "YOCTOHENRY",
            "YOCTOHENRYS",
            "YOCTOHERTZ",
            "YOCTOHM",
            "YOCTOHMS",
            "YOCTOJOULE",
            "YOCTOJOULES",
            "YOCTOKATAL",
            "YOCTOKATALS",
            "YOCTOKELVIN",
            "YOCTOKELVINS",
            "YOCTOLITRE",
            "YOCTOLITRES",
            "YOCTOLUMEN",
            "YOCTOLUMENS",
            "YOCTOMETRE",
            "YOCTOMETRES",
            "YOCTOMETRIQUE",
            "YOCTOMOLE",
            "YOCTOMOLES",
            "YOCTONEWTON",
            "YOCTONEWTONS",
            "YOCTOOHM",
            "YOCTOOHMS",
            "YOCTOPASCAL",
            "YOCTOPASCALS",
            "YOCTORADIAN",
            "YOCTORADIANS",
            "YOCTOSECONDE",
            "YOCTOSECONDES",
            "YOCTOSIEVERT",
            "YOCTOSIEVERTS",
            "YOCTOTESLA",
            "YOCTOTESLAS",
            "YOCTOVOLT",
            "YOCTOVOLTS",
            "YOCTOWATT",
            "YOCTOWATTS",
            "YOCTOWEBER",
            "YOCTOWEBERS",
            "YODHS",
            "YODISA",
            "YODISAI",
            "YODISAIENT",
            "YODISAIS",
            "YODISAIT",
            "YODISAMES",
            "YODISANT",
            "YODISAS",
            "YODISASSE",
            "YODISASSENT",
            "YODISASSES",
            "YODISASSIEZ",
            "YODISASSIONS",
            "YODISAT",
            "YODISATES",
            "YODISATION",
            "YODISE",
            "YODISEE",
            "YODISEES",
            "YODISENT",
            "YODISER",
            "YODISERA",
            "YODISERAI",
            "YODISERAIENT",
            "YODISERAIS",
            "YODISERAIT",
            "YODISERAS",
            "YODISERENT",
            "YODISEREZ",
            "YODISERIEZ",
            "YODISERIONS",
            "YODISERONS",
            "YODISERONT",
            "YODISES",
            "YODISEZ",
            "YODISIEZ",
            "YODISIONS",
            "YODISONS",
            "YODLA",
            "YODLAI",
            "YODLAIENT",
            "YODLAIS",
            "YODLAIT",
            "YODLAMES",
            "YODLANT",
            "YODLAS",
            "YODLASSE",
            "YODLASSENT",
            "YODLASSES",
            "YODLASSIEZ",
            "YODLASSIONS",
            "YODLAT",
            "YODLATES",
            "YODLE",
            "YODLENT",
            "YODLER",
            "YODLERA",
            "YODLERAI",
            "YODLERAIENT",
            "YODLERAIS",
            "YODLERAIT",
            "YODLERAS",
            "YODLERENT",
            "YODLEREZ",
            "YODLERIEZ",
            "YODLERIONS",
            "YODLERONS",
            "YODLERONT",
            "YODLES",
            "YODLEZ",
            "YODLIEZ",
            "YODLIONS",
            "YODLONS",
            "YOGAS",
            "YOGHI",
            "YOGHOURT",
            "YOGHOURTHS",
            "YOGHOURTS",
            "YOGIQUE",
            "YOGIQUES",
            "YOGIS",
            "YOGISME",
            "YOGISMES",
            "YOGISTE",
            "YOGISTES",
            "YOGOURT",
            "YOGOURTS",
            "YOGUI",
            "YOGUISME",
            "YOGUISMES",
            "YOGUISTE",
            "YOGUISTES",
            "YOHIMBE",
            "YOHIMBEHE",
            "YOHIMBEHES",
            "YOHIMBES",
            "YOHIMBINE",
            "YOKOZUNA",
            "YOKOZUNAS",
            "YOLAI",
            "YOLAIENT",
            "YOLAIS",
            "YOLAIT",
            "YOLAMES",
            "YOLANDE",
            "YOLANT",
            "YOLAS",
            "YOLASSE",
            "YOLASSENT",
            "YOLASSES",
            "YOLASSIEZ",
            "YOLASSIONS",
            "YOLAT",
            "YOLATES",
            "YOLENT",
            "YOLER",
            "YOLERA",
            "YOLERAI",
            "YOLERAIENT",
            "YOLERAIS",
            "YOLERAIT",
            "YOLERAS",
            "YOLERENT",
            "YOLEREZ",
            "YOLERIEZ",
            "YOLERIONS",
            "YOLERONS",
            "YOLERONT",
            "YOLES",
            "YOLEUR",
            "YOLEZ",
            "YOLIER",
            "YOLIERS",
            "YOLIEZ",
            "YOLIONS",
            "YOLITHES",
            "YOLONS",
            "YONIS",
            "YONNAISE",
            "YONNAISES",
            "YONNE",
            "YONVALOISE",
            "YONVALOISES",
            "YOONER",
            "YOONS",
            "YORKAISE",
            "YORKAISES",
            "YORKIE",
            "YOROUBA",
            "YOROUBAS",
            "YORUBA",
            "YORUBOIDE",
            "YORUBOIDES",
            "YOTTAAMPERE",
            "YOTTAAMPERES",
            "YOTTABEL",
            "YOTTABELS",
            "YOTTABIT",
            "YOTTABITS",
            "YOTTABYTE",
            "YOTTABYTES",
            "YOTTACANDELA",
            "YOTTACANDELAS",
            "YOTTACOULOMB",
            "YOTTACOULOMBS",
            "YOTTAFARAD",
            "YOTTAFARADS",
            "YOTTAGRAMME",
            "YOTTAGRAMMES",
            "YOTTAGRAY",
            "YOTTAGRAYS",
            "YOTTAHENRY",
            "YOTTAHENRYS",
            "YOTTAHERTZ",
            "YOTTAJOULE",
            "YOTTAJOULES",
            "YOTTAKATAL",
            "YOTTAKATALS",
            "YOTTAKELVIN",
            "YOTTAKELVINS",
            "YOTTALITRE",
            "YOTTALITRES",
            "YOTTALUMEN",
            "YOTTALUMENS",
            "YOTTAMETRE",
            "YOTTAMETRES",
            "YOTTAMETRIQUE",
            "YOTTAMOLE",
            "YOTTAMOLES",
            "YOTTANEWTON",
            "YOTTANEWTONS",
            "YOTTAOCTET",
            "YOTTAOCTETS",
            "YOTTAOHM",
            "YOTTAOHMS",
            "YOTTAPASCAL",
            "YOTTAPASCALS",
            "YOTTARADIAN",
            "YOTTARADIANS",
            "YOTTASECONDE",
            "YOTTASECONDES",
            "YOTTASIEVERT",
            "YOTTASIEVERTS",
            "YOTTATESLA",
            "YOTTATESLAS",
            "YOTTAVOLT",
            "YOTTAVOLTS",
            "YOTTAWATT",
            "YOTTAWATTS",
            "YOTTAWEBER",
            "YOTTAWEBERS",
            "YOUDS",
            "YOUGOSLAVE",
            "YOUGOSLAVES",
            "YOUINOU",
            "YOULE",
            "YOUNG",
            "YOUNSI",
            "YOUPALA",
            "YOUPALAS",
            "YOUPIK",
            "YOUPIKE",
            "YOUPIN",
            "YOUPINE",
            "YOUPINERIE",
            "YOUPINERIES",
            "YOUPINES",
            "YOUPINS",
            "YOURTE",
            "YOURTES",
            "YOUSSEF",
            "YOUTRE",
            "YOUTRES",
            "YOUTRON",
            "YOUTRONS",
            "YOUTSA",
            "YOUTSAI",
            "YOUTSAIENT",
            "YOUTSAIS",
            "YOUTSAIT",
            "YOUTSAMES",
            "YOUTSANT",
            "YOUTSAS",
            "YOUTSASSE",
            "YOUTSASSENT",
            "YOUTSASSES",
            "YOUTSASSIEZ",
            "YOUTSASSIONS",
            "YOUTSAT",
            "YOUTSATES",
            "YOUTSE",
            "YOUTSENT",
            "YOUTSER",
            "YOUTSERA",
            "YOUTSERAI",
            "YOUTSERAIENT",
            "YOUTSERAIS",
            "YOUTSERAIT",
            "YOUTSERAS",
            "YOUTSERENT",
            "YOUTSEREZ",
            "YOUTSERIEZ",
            "YOUTSERIONS",
            "YOUTSERONS",
            "YOUTSERONT",
            "YOUTSES",
            "YOUTSEZ",
            "YOUTSIEZ",
            "YOUTSIONS",
            "YOUTSONS",
            "YOUTZA",
            "YOUTZAI",
            "YOUTZAIENT",
            "YOUTZAIS",
            "YOUTZAIT",
            "YOUTZAMES",
            "YOUTZANT",
            "YOUTZAS",
            "YOUTZASSE",
            "YOUTZASSENT",
            "YOUTZASSES",
            "YOUTZASSIEZ",
            "YOUTZASSIONS",
            "YOUTZAT",
            "YOUTZATES",
            "YOUTZE",
            "YOUTZENT",
            "YOUTZER",
            "YOUTZERA",
            "YOUTZERAI",
            "YOUTZERAIENT",
            "YOUTZERAIS",
            "YOUTZERAIT",
            "YOUTZERAS",
            "YOUTZERENT",
            "YOUTZEREZ",
            "YOUTZERIEZ",
            "YOUTZERIONS",
            "YOUTZERONS",
            "YOUTZERONT",
            "YOUTZES",
            "YOUTZEZ",
            "YOUTZIEZ",
            "YOUTZIONS",
            "YOUTZONS",
            "YOUVOI",
            "YOUVOIS",
            "YOUYOU",
            "YOUYOUS",
            "YOUYOUTA",
            "YOUYOUTAI",
            "YOUYOUTAIENT",
            "YOUYOUTAIS",
            "YOUYOUTAIT",
            "YOUYOUTAMES",
            "YOUYOUTANT",
            "YOUYOUTAS",
            "YOUYOUTASSE",
            "YOUYOUTASSENT",
            "YOUYOUTASSES",
            "YOUYOUTASSIEZ",
            "YOUYOUTAT",
            "YOUYOUTATES",
            "YOUYOUTE",
            "YOUYOUTENT",
            "YOUYOUTER",
            "YOUYOUTERA",
            "YOUYOUTERAI",
            "YOUYOUTERAIS",
            "YOUYOUTERAIT",
            "YOUYOUTERAS",
            "YOUYOUTERENT",
            "YOUYOUTEREZ",
            "YOUYOUTERIEZ",
            "YOUYOUTERIONS",
            "YOUYOUTERONS",
            "YOUYOUTERONT",
            "YOUYOUTES",
            "YOUYOUTEZ",
            "YOUYOUTIEZ",
            "YOUYOUTIONS",
            "YOUYOUTONS",
            "YOYOS",
            "YOYOTA",
            "YOYOTAI",
            "YOYOTAIENT",
            "YOYOTAIS",
            "YOYOTAIT",
            "YOYOTAMES",
            "YOYOTANT",
            "YOYOTANTE",
            "YOYOTAS",
            "YOYOTASSE",
            "YOYOTASSENT",
            "YOYOTASSES",
            "YOYOTASSIEZ",
            "YOYOTASSIONS",
            "YOYOTAT",
            "YOYOTATES",
            "YOYOTE",
            "YOYOTENT",
            "YOYOTER",
            "YOYOTERA",
            "YOYOTERAI",
            "YOYOTERAIENT",
            "YOYOTERAIS",
            "YOYOTERAIT",
            "YOYOTERAS",
            "YOYOTERENT",
            "YOYOTEREZ",
            "YOYOTERIEZ",
            "YOYOTERIONS",
            "YOYOTERONS",
            "YOYOTERONT",
            "YOYOTES",
            "YOYOTEZ",
            "YOYOTIEZ",
            "YOYOTIONS",
            "YOYOTONS",
            "YOYOTTA",
            "YOYOTTAI",
            "YOYOTTAIENT",
            "YOYOTTAIS",
            "YOYOTTAIT",
            "YOYOTTAMES",
            "YOYOTTANT",
            "YOYOTTAS",
            "YOYOTTASSE",
            "YOYOTTASSENT",
            "YOYOTTASSES",
            "YOYOTTASSIEZ",
            "YOYOTTASSIONS",
            "YOYOTTAT",
            "YOYOTTATES",
            "YOYOTTE",
            "YOYOTTENT",
            "YOYOTTER",
            "YOYOTTERA",
            "YOYOTTERAI",
            "YOYOTTERAIENT",
            "YOYOTTERAIS",
            "YOYOTTERAIT",
            "YOYOTTERAS",
            "YOYOTTERENT",
            "YOYOTTEREZ",
            "YOYOTTERIEZ",
            "YOYOTTERIONS",
            "YOYOTTERONS",
            "YOYOTTERONT",
            "YOYOTTES",
            "YOYOTTEZ",
            "YOYOTTIEZ",
            "YOYOTTIONS",
            "YOYOTTONS",
            "YPERITE",
            "YPERITES",
            "YPONOMEUTE",
            "YPONOMEUTES",
            "YPORT",
            "YPORTAISE",
            "YPORTAISES",
            "YPREAU",
            "YPREAUX",
            "YPRESIEN",
            "YPRESIENS",
            "YPREVILLAISE",
            "YPREVILLAISES",
            "YPSILONIEN",
            "YPSILONIENNE",
            "YPSILONIENNES",
            "YPSILONIENS",
            "YQUEBEUF",
            "YQUEBOISE",
            "YQUEBOISES",
            "YQUELON",
            "YQUELONNAISE",
            "YQUELONNAISES",
            "YRIEIX",
            "YRONDOISE",
            "YRONDOISES",
            "YSABEAU",
            "YSALINE",
            "YSERN",
            "YSEULT",
            "YSOPET",
            "YSOPETS",
            "YSSANDONNAISE",
            "YSSINGELAISE",
            "YSSINGELAISES",
            "YSSOISE",
            "YSSOISES",
            "YTASSE",
            "YTIER",
            "YTOURNEL",
            "YTRACOISE",
            "YTRACOISES",
            "YTRIEN",
            "YTRIENNE",
            "YTRIENNES",
            "YTRIENS",
            "YTTERBATE",
            "YTTERBATES",
            "YTTERBINE",
            "YTTERBINES",
            "YTTERBITE",
            "YTTERBIUM",
            "YTTRIA",
            "YTTRIALITE",
            "YTTRIAS",
            "YTTRIFERE",
            "YTTRIFERES",
            "YTTRIUM",
            "YUANS",
            "YUCATEQUE",
            "YUCCA",
            "YUCCAS",
            "YUCUNA",
            "YUKATA",
            "YUKATAS",
            "YUKIS",
            "YUKOS",
            "YULZARI",
            "YUPPIES",
            "YUQUI",
            "YUQUIS",
            "YURACARE",
            "YURAKARE",
            "YURAKARES",
            "YURIS",
            "YURITI",
            "YUROK",
            "YUSSOISE",
            "YUSSOISES",
            "YUSTE",
            "YUTZOISE",
            "YUTZOISES",
            "YUZUS",
            "YVARS",
            "YVART",
            "YVECRIQUAISE",
            "YVECRIQUAISES",
            "YVECRIQUE",
            "YVEEN",
            "YVEENNE",
            "YVEENNES",
            "YVEENS",
            "YVELIN",
            "YVELINES",
            "YVERNOGEAU",
            "YVETOT",
            "YVETOTAISE",
            "YVETOTAISES",
            "YVETTE",
            "YVIASAISE",
            "YVIASAISES",
            "YVIGNACAISE",
            "YVIGNACAISES",
            "YVILLAISE",
            "YVILLAISES",
            "YVOIRIEN",
            "YVOIRIENNE",
            "YVOIRIENNES",
            "YVOIRIENS",
            "YVOISIEN",
            "YVOISIENNE",
            "YVOISIENNES",
            "YVOISIENS",
            "YVONNE",
            "YVRACAISE",
            "YVRACAISES",
            "YVRAIE",
            "YVRANDAISE",
            "YVRANDAISES",
            "YVREEN",
            "YVREENNE",
            "YVREENNES",
            "YVREENS",
            "YZERNOISE",
            "YZERNOISES",
            "YZERONNAISE",
            "YZERONNAISES",
            "YZEURIEN",
            "YZEURIENNE",
            "YZEURIENNES",
            "YZEURIENS",
            "YZEUROISE",
            "YZEUROISES",
            "YZEUX",
            "YZOSSAISE",
            "YZOSSAISES",
        ];
        return ListeMotsProposablesY;
    }());
    exports.default = ListeMotsProposablesY;
});
//# sourceMappingURL=listeMotsProposablesY.js.map