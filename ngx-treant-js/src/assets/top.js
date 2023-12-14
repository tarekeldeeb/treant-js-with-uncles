var nonly = function (c) {
    const allowed = ['text', 'name'];
    const filtered = Object.keys(c)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
            obj[key] = c[key];
            return obj;
        }, {});
    return filtered;
};

var allah = {
        id: 0,
        HTMLclass: 'wahi',
        text: {
            name: 'رب العزة',
        },
        image: 'assets/pix/1.png',
    },
    jebril = {
        id: 1,
        parent: allah.id,
        HTMLclass: 'wahi',
        text: {
            name: 'جبريل',
        },
        image: 'assets/pix/2.png',
    },
    muhammad = {
        id: 2,
        parent: jebril.id,
        HTMLclass: 'wahi',
        text: {
            name: 'رسول الله',
        },
        image: 'assets/pix/3.png',
    },
    zaid_bin_thabet = {
        id: 3,
        parent: muhammad.id,
        HTMLclass: 'sahabi',
        childrenDropLevel: 1,
        text: {
            name: 'زيد بن ثابت',
        },
    },
    ali_bin_abitaleb = {
        id: 4,
        parent: muhammad.id,
        HTMLclass: 'sahabi',
        childrenDropLevel: 1,
        text: {
            name: 'علي بن أبي طالب',
        },
    },
    othman_bin_affan = {
        id: 5,
        parent: muhammad.id,
        HTMLclass: 'sahabi',
        childrenDropLevel: 1,
        text: {
            name: 'عثمان بن عفان',
        },
    },
    abdullah_bin_masood = {
        id:6,
        parent: muhammad.id,
        HTMLclass: 'sahabi',
        childrenDropLevel: 1,
        text: {
            name: 'عبد الله بن مسعود',
        },
    },
    abuldardaa = {
        id: 7,
        parent: muhammad.id,
        HTMLclass: 'sahabi',
        childrenDropLevel: 1,
        text: {
            name: 'أبو الدرداء',
        },
    },
    obay_bin_kaab = {
        id: 8,
        parent: muhammad.id,
        HTMLclass: 'sahabi',
        text: {
            name: 'أبي بن كعب',
        },
    },
    abo_mosa_alashaari = {
        id: 9,
        parent: muhammad.id,
        HTMLclass: 'sahabi',
        childrenDropLevel: 1,
        text: {
            name: 'أبو موسى الأشعري',
        },
    },
    zir_bin_hubaish = {
        id:10,
        parent: abdullah_bin_masood.id,
        HTMLclass: 'tabei',
        uncles: [nonly(ali_bin_abitaleb)],
        text: {
            name: 'زر بن حبيش',
        },
    },
    eldoali = {
        id:11,
        parent: ali_bin_abitaleb.id,
        HTMLclass: 'tabei',
        text: {
            name: 'أبو الأسود الدؤلي',
        },
    },
    abo_horaira = {
        id:12,
        parent: obay_bin_kaab.id,
        HTMLclass: 'sahabi',
        text: {
            name: 'أبو هريرة',
        },
    },
    abdullah_bin_abbas = {
        id: 13,
        parent: obay_bin_kaab.id,
        uncles: [nonly(zaid_bin_thabet)],
        HTMLclass: 'sahabi',
        text: {
            name: 'عبد الله بن عباس',
        },
    },
    derbas_mawla_bin_abbas = {
        id: 14,
        parent: abdullah_bin_abbas.id,
        HTMLclass: 'tabei',
        text: {
            name: 'درباس مولى بن عباس',
        },
    },
    abdullah_bin_abi_ayyash = {
        id:15,
        parent: obay_bin_kaab.id,
        HTMLclass: 'sahabi',
        text: {
            name: 'عبد الله بن أبي عياش',
        },
    },
    abdullah_elsulami = {
        id:16,
        parent: ali_bin_abitaleb.id,
        uncles: [
            nonly(obay_bin_kaab),
            nonly(abdullah_bin_masood),
            nonly(othman_bin_affan),
            nonly(zaid_bin_thabet),
        ],
        childrenDropLevel: 0,
        HTMLclass: 'tabei',
        text: {
            name: 'أبو عبد الرحمن السُلمي',
        },
    },
    saad_elshaibany = {
        id: 17,
        parent: abdullah_bin_masood.id,
        HTMLclass: 'tabei',
        text: {
            name: 'سعد بن إياس الشيباني',
        },
    },
    assem = {
        id: 18,
        parent: abdullah_elsulami.id,
        childrenDropLevel: 2,
        HTMLclass: 'qari7',
        text: {
            name: 'عاصم بن أبي النجود',
        },
    },
    hafs = {
        id: 19,
        parent: assem.id,
        HTMLclass: 'rawi',
        text: {
            name: 'حفص',
        },
    },
    shoba = {
        id:20,
        parent: assem.id,
        HTMLclass: 'rawi',
        text: {
            name: 'شعبة',
        },
    },
    alaaraj = {
        id: 21,
        parent: abo_horaira.id,
        HTMLclass: 'tabei',
        childrenDropLevel: 1,
        uncles: [nonly(abdullah_bin_abbas), nonly(abdullah_bin_abi_ayyash)],
        text: {
            name: 'الأعرج',
        },
    },
    abo_gaafar_almadani_pseudo = {
        id: 22,
        parent: abdullah_bin_abbas.id,
        childrenDropLevel: 0,
        pseudo: true,
    },
    abo_gaafar_almadani = {
        id: 23,
        parent: abo_gaafar_almadani_pseudo.id,
        HTMLclass: 'qari10',
        uncles: [nonly(abdullah_bin_abi_ayyash), nonly(abo_horaira)],
        childrenDropLevel: 2,
        text: {
            name: 'أبو جعفر المدني',
        },
    },
    ibn_werdan = {
        id: 24,
        parent: abo_gaafar_almadani.id,
        HTMLclass: 'rawi',
        text: {
            name: 'ابن وردان',
        },
    },
    ibn_jumaz = {
        id:25,
        parent: abo_gaafar_almadani.id,
        HTMLclass: 'rawi',
        text: {
            name: 'ابن جماز',
        },
    },
    nafee = {
        id:26,
        parent: alaaraj.id,
        childrenDropLevel: 1,
        uncles: [nonly(abo_gaafar_almadani)],
        HTMLclass: 'qari7',
        text: {
            name: 'نافع المدني',
        },
    },
    qaloon = {
        id: 27,
        parent: nafee.id,
        HTMLclass: 'rawi',

        text: {
            name: 'قالون',
        },
    },
    warsh = {
        id: 28,
        parent: nafee.id,
        HTMLclass: 'rawi',

        text: {
            name: 'ورش',
        },
    },
    ibn_katheer = {
        id: 29,
        parent: derbas_mawla_bin_abbas.id,
        childrenDropLevel: 1,
        HTMLclass: 'qari7',
        text: {
            name: 'ابن كثير المكي',
        },
    },
    ahmad_alnabbal = {
        id: 30,
        parent: ibn_katheer.id,
        HTMLclass: 'addnochild',
        text: {
            name: 'أحمد النبال',
        },
    },
    konbol = {
        id: 31,
        parent: ahmad_alnabbal.id,
        HTMLclass: 'rawi',

        text: {
            name: 'قنبل',
        },
    },
    ekrema_bin_soliman = {
        id: 32,
        parent: ibn_katheer.id,
        HTMLclass: 'addnochild',
        text: {
            name: 'عكرمة بن سليمان',
        },
    },
    albazzei = {
        id: 33,
        parent: ekrema_bin_soliman.id,
        HTMLclass: 'rawi',

        text: {
            name: 'البزي',
        },
    },
    saeed_bin_jubair = {
        id: 34,
        parent: abdullah_bin_abbas.id,
        HTMLclass: 'tabei',
        text: {
            name: 'سعيد بن جبير',
        },
    },
    abi_amr = {
        id: 35,
        parent: saeed_bin_jubair.id,
        HTMLclass: 'qari7',
        childrenDropLevel: 1,
        text: {
            name: 'أبي عمرو البصري',
        },
    },
    yahia_ibn_almubarak = {
        id: 36,
        parent: abi_amr.id,
        HTMLclass: 'addnochild',
        text: {
            name: 'يحيى بن المبارك',
        },
    },
    eldoori = {
        id: 37,
        parent: yahia_ibn_almubarak.id,
        HTMLclass: 'rawi',

        text: {
            name: 'الدوري',
        },
    },
    elsoosi = {
        id: 38,
        parent: yahia_ibn_almubarak.id,
        HTMLclass: 'rawi',

        text: {
            name: 'السوسي',
        },
    },
    almogheera_bin_abi_shehab = {
        id: 39,
        parent: othman_bin_affan.id,
        HTMLclass: 'tabei',
        text: {
            name: 'المغيرة بن أبي شهاب',
        },
    },
    ibn_amer_elshamy = {
        id: 40,
        HTMLclass: 'qari7',
        parent: almogheera_bin_abi_shehab.id,
        text: {
            name: 'ابن عامر الشامي',
        },
    },
    yahia_bin_alharith_althammary = {
        id: 41,
        parent: ibn_amer_elshamy.id,
        HTMLclass: 'addnochild',
        text: {
            name: 'يحيى بن الحارث الذماري',
        },
    },
    ayoub_bin_tameem = {
        id: 42,
        parent: yahia_bin_alharith_althammary.id,
        HTMLclass: 'addnochild',
        text: {
            name: 'أيوب بن تميم',
        },
    },
    hisham_bin_ammar = {
        id: 43,
        parent: ayoub_bin_tameem.id,
        HTMLclass: 'rawi',

        text: {
            name: 'هشام',
        },
    },
    ibn_thakwan = {
        id: 44,
        parent: ayoub_bin_tameem.id,
        HTMLclass: 'rawi',

        text: {
            name: 'ابن ذكوان',
        },
    },
    ibn_abi_laila = {
        id: 45,
        parent: ali_bin_abitaleb.id,
        HTMLclass: 'tabei',
        text: {
            name: 'ابن أبي ليلى',
        },
    },
    alaamash = {
        id: 46,
        parent: abdullah_bin_masood.id,
        HTMLclass: 'tabei',
        text: {
            name: 'الأعمش',
        },
    },
    hamza = {
        id: 47,
        parent: alaamash.id,
        HTMLclass: 'qari7',
        uncles: [nonly(ibn_abi_laila)],
        text: {
            name: 'حمزة الكوفي',
        },
    },
    solaim = {
        id: 48,
        parent: hamza.id,
        childrenDropLevel: 0,
        HTMLclass: 'addnochild',
        text: {
            name: 'سليم بن عيسى',
        },
    },
    khalaf_pseudo = {
        id: 49,
        parent: solaim.id,
        pseudo: true,
    },
    khalaf = {
        id: 50,
        parent: khalaf_pseudo.id,
        HTMLclass: 'rawi',

        text: {
            name: 'خلف',
        },
    },
    khallad_pseudo = {
        id: 51,
        parent: solaim.id,
        pseudo: true,
    },
    khallad = {
        id: 52,
        parent: khallad_pseudo.id,
        HTMLclass: 'rawi',

        text: {
            name: 'خلاد',
        },
    },
    alkasaaei = {
        id: 55,
        parent: hamza.id,
        HTMLclass: 'qari7',
        childrenDropLevel: 1,
        text: {
            name: 'الكسائي',
        },
    },
    abo_elharith = {
        id: 56,
        parent: alkasaaei.id,
        HTMLclass: 'rawi',

        text: {
            name: 'أبو الحارث',
        },
    },
    hafs_eldoori = {
        id: 57,
        parent: alkasaaei.id,
        HTMLclass: 'rawi',

        text: {
            name: 'الدوري',
        },
    },
    omran_bin_melhan = {
        id: 58,
        parent: abo_mosa_alashaari.id,
        HTMLclass: 'tabei',
        childrenDropLevel: 1,
        uncles: [nonly(abdullah_bin_abbas)],
        text: {
            name: 'عمران بن ملحان',
        },
    },
    abo_elashhab_elatared = {
        id: 59,
        parent: omran_bin_melhan.id,
        HTMLclass: 'addnochild',
        text: {
            name: 'أبو الأشهب العطارد',
        },
    },
    yaaqoob_elhadrami = {
        id: 60,
        parent: abo_elashhab_elatared.id,
        HTMLclass: 'qari10',
        childrenDropLevel: 0,
        text: {
            name: 'يعقوب الحضرمي',
        },
    },
    rooh = {
        id: 61,
        parent: yaaqoob_elhadrami.id,
        HTMLclass: 'rawi',
        text: {
            name: 'روح',
        },
    },
    rowais = {
        id: 62,
        parent: yaaqoob_elhadrami.id,
        HTMLclass: 'rawi',

        text: {
            name: 'رويس',
        },
    },
    khalaf_bin_hesham = {
        id: 63, 
        parent: solaim.id,
        HTMLclass: 'qari10',
        text: {
            name: 'خلف بن هشام',
        },
    },
    isaac_alwarraq = {
        id: 64,
        parent: khalaf_bin_hesham.id,
        HTMLclass: 'rawi',

        text: {
            name: 'إسحاق',
        },
    },
    edrees_alhaddad = {
        id: 65,
        parent: khalaf_bin_hesham.id,
        HTMLclass: 'rawi',

        text: {
            name: 'إدريس',
        },
    },
    chart_config = [
        allah,
        jebril,
        muhammad,
        zaid_bin_thabet,
        obay_bin_kaab,
        abo_mosa_alashaari,
        ali_bin_abitaleb,
        othman_bin_affan,
        abdullah_bin_masood,
        abo_horaira,
        abuldardaa,
        abdullah_bin_abbas,
        abdullah_bin_abi_ayyash,
        zir_bin_hubaish,
        abdullah_elsulami,
        saad_elshaibany,
        assem,
        hafs,
        shoba,
        alaaraj,
        abo_gaafar_almadani_pseudo,
        abo_gaafar_almadani,
        ibn_werdan,
        ibn_jumaz,
        nafee,
        qaloon,
        warsh,
        derbas_mawla_bin_abbas,
        ibn_katheer,
        ahmad_alnabbal,
        konbol,
        ekrema_bin_soliman,
        albazzei,
        eldoali,
        saeed_bin_jubair,
        abi_amr,
        yahia_ibn_almubarak,
        eldoori,
        elsoosi,
        almogheera_bin_abi_shehab,
        ibn_amer_elshamy,
        hisham_bin_ammar,
        ibn_thakwan,
        ibn_abi_laila,
        alaamash,
        hamza,
        solaim,
        khalaf_pseudo,
        khallad_pseudo,
        khalaf,
        khallad,
        yahia_bin_alharith_althammary,
        ayoub_bin_tameem,
        alkasaaei,
        abo_elharith,
        hafs_eldoori,
        omran_bin_melhan,
        abo_elashhab_elatared,
        yaaqoob_elhadrami,
        rooh,
        rowais,
        khalaf_bin_hesham,
        isaac_alwarraq,
        edrees_alhaddad,
    ];

export default chart_config;
