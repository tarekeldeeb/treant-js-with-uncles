    var config = {
        container: "#basic-popover",
        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connemuhammadrsAnimation: "bounce",
            connemuhammadrsSpeed: 700
        }
    },
    allah = {
	HTMLclass:  'wahi',
        text: {
            name: "رب العزة",
        },
        image: "assets/pix/1.png"
    },
    jebril = {
        parent: allah,
	HTMLclass:  'wahi',
        text:{
            name: "جبريل",
        },
        image: "assets/pix/2.png"
    },
    muhammad = {
        parent: jebril,
	HTMLclass:  'wahi',
        text:{
            name: "رسول الله",
        },
        image: "assets/pix/3.png"
    },
    zaid_bin_thabet = {
        parent: muhammad,
	HTMLclass:  'sahabi',
	childrenDropLevel: 1,
        text:{
            name: "زيد بن ثابت"
        }
    },
    ali_bin_abitaleb = {
        parent: muhammad,
	HTMLclass:  'sahabi',
	childrenDropLevel: 1,
        text:{
            name: "علي بن أبي طالب"
        }
    },
    othman_bin_affan = {
        parent: muhammad,
	HTMLclass:  'sahabi',
	childrenDropLevel: 1,
        text:{
            name: "عثمان بن عفان"
        }
    },
    abdullah_bin_masood = {
        parent: muhammad,
	HTMLclass:  'sahabi',
	childrenDropLevel: 1,
        text:{
            name: "عبد الله بن مسعود"
        }
    },
    abuldardaa = {
        parent: muhammad,
	    HTMLclass:  'sahabi',
	    childrenDropLevel: 1,
        text:{
            name: "أبو الدرداء"
        }
    },		
    obay_bin_kaab = {
        parent: muhammad,
	HTMLclass:  'sahabi',
        text:{
            name: "أبي بن كعب"
        },
    },
    abo_mosa_alashaari = {
        parent: muhammad,
	HTMLclass:  'sahabi',
	childrenDropLevel: 1,
        text:{
            name: "أبو موسى الأشعري"
        },
    },
    zir_bin_hubaish = {
        parent: abdullah_bin_masood,
	    HTMLclass:  'tabei',
        uncles: [ali_bin_abitaleb],
        text:{
            name: "زر بن حبيش"
        }
    },
    eldoali = {
        parent: ali_bin_abitaleb,
	HTMLclass:  'tabei',
        text:{
            name: "أبو الأسود الدؤلي"
        }
    },	
    abo_horaira = {
        parent: obay_bin_kaab,
	HTMLclass:  'sahabi',
        text:{
            name: "أبو هريرة"
        }
    },
    abdullah_bin_abbas = {
        parent: obay_bin_kaab,
	uncles: [zaid_bin_thabet],
	HTMLclass:  'sahabi',
        text:{
            name: "عبد الله بن عباس"
        }
    },
	derbas_mawla_bin_abbas = {
        parent: abdullah_bin_abbas,
	HTMLclass:  'tabei',
        text:{
            name: "درباس مولى بن عباس"
        }
    },
    abdullah_bin_abi_ayyash = {
        parent: obay_bin_kaab,
	HTMLclass: 'sahabi',
        text:{
            name: "عبد الله بن أبي عياش"
        }
    },	
    abdullah_elsulami = {
        parent: ali_bin_abitaleb,
        uncles: [obay_bin_kaab, abdullah_bin_masood, othman_bin_affan, zaid_bin_thabet],
	childrenDropLevel: 0,
	HTMLclass: 'tabei',
        text:{
            name: "أبو عبد الرحمن السُلمي"
        }
    },	
    saad_elshaibany = {
        parent: abdullah_bin_masood,
	HTMLclass: 'tabei',
        text:{
            name: "سعد بن إياس الشيباني"
        },
    },
    assem = {
        parent: abdullah_elsulami,
	childrenDropLevel: 2,
	HTMLclass: 'qari7',
        text:{
            name: "عاصم بن أبي النجود"
        }
    },
    hafs = {
        parent: assem,
	HTMLclass: 'rawi',
        text:{
            name: "حفص"
        }
    },	
    shoba = {
        parent: assem,
	HTMLclass: 'rawi',
        text:{
            name: "شعبة"
        },
    },
	alaaraj = {
        parent: abo_horaira,
	    HTMLclass:  'tabei',
        childrenDropLevel: 1,
        uncles: [abdullah_bin_abbas, abdullah_bin_abi_ayyash],
        text:{
            name: "الأعرج"
        },
    },
	abo_gaafar_almadani_pseudo = {
        parent: abdullah_bin_abbas,
	childrenDropLevel: 0,
		pseudo: true,
    },
	abo_gaafar_almadani = {
        parent: abo_gaafar_almadani_pseudo,
	    HTMLclass:  'qari10',
        uncles:[abdullah_bin_abi_ayyash, abo_horaira],
	    childrenDropLevel: 2,
        text:{
            name: "أبو جعفر المدني"
        },
    },
	ibn_werdan = {
        parent: abo_gaafar_almadani,
	HTMLclass:  'rawi',
        text:{
            name: "ابن وردان"
        },
    },
	ibn_jumaz = {
        parent: abo_gaafar_almadani,
	HTMLclass:  'rawi',
        text:{
            name: "ابن جماز"
        },
    },
	nafee = {
        parent: alaaraj,
	childrenDropLevel: 1,
    uncles: [abo_gaafar_almadani],
	HTMLclass:  'qari7',
        text:{
            name: "نافع المدني"
        },
    },
	qaloon = {
        parent: nafee,
	HTMLclass: 'rawi',
 
         text:{
            name: "قالون"
        },
    },
	warsh = {
        parent: nafee,
	HTMLclass: 'rawi',
 
         text:{
            name: "ورش"
        },
    },
	ibn_katheer = {
        parent: derbas_mawla_bin_abbas,
	childrenDropLevel: 1,
	HTMLclass:  'qari7',
        text:{
            name: "ابن كثير المكي"
        },
    },
	ahmad_alnabbal = {
        parent: ibn_katheer,
        text:{
            name: "أحمد النبال"
        },
    },	
	konbol = {
        parent: ahmad_alnabbal,
	HTMLclass: 'rawi',
 
         text:{
            name: "قنبل"
        },
    },
	ekrema_bin_soliman = {
        parent: ibn_katheer,
        text:{
            name: "عكرمة بن سليمان"
        },
    },
	albazzei = {
        parent: ekrema_bin_soliman,
	HTMLclass: 'rawi',
 
         text:{
            name: "البزي"
        },
    },
	saeed_bin_jubair = {
        parent: abdullah_bin_abbas,
	HTMLclass:  'tabei',
        text:{
            name: "سعيد بن جبير"
        },
    },
	abi_amr = {
        parent: saeed_bin_jubair,
	HTMLclass:  'qari7',
	childrenDropLevel: 1,
        text:{
            name: "أبي عمرو البصري"
        },
    },
    yahia_ibn_almubarak = {
       parent: abi_amr,
	   text:{
            name: "يحيى بن المبارك"
        },
    },
	eldoori = {
        parent: yahia_ibn_almubarak,
	HTMLclass: 'rawi',
 
         text:{
            name: "الدوري"
        },
    },
	elsoosi = {
        parent: yahia_ibn_almubarak,
	HTMLclass: 'rawi',
 
         text:{
            name: "السوسي"
        },
    },
    almogheera_bin_abi_shehab = {
        parent: othman_bin_affan,
	HTMLclass:  'tabei',
        text:{
            name: "المغيرة بن أبي شهاب"
        },
    },
	ibn_amer_elshamy = {
	HTMLclass:  'qari7',
        parent: almogheera_bin_abi_shehab,
        text:{
            name: "ابن عامر الشامي"
        },
    },
    yahia_bin_alharith_althammary = {
        parent: ibn_amer_elshamy,
        text:{
            name: "يحيى بن الحارث الذماري"
        },
    },			
    ayoub_bin_tameem = {
        parent: yahia_bin_alharith_althammary,
        text:{
            name: "أيوب بن تميم"
        },
    },
    hisham_bin_ammar = {
        parent: ayoub_bin_tameem,
	HTMLclass: 'rawi',
 
         text:{
            name: "هشام"
        },
    },	
	ibn_thakwan = {
        parent: ayoub_bin_tameem,
	HTMLclass: 'rawi',
 
         text:{
            name: "ابن ذكوان"
        },
    },
	ibn_abi_laila = {
        parent: ali_bin_abitaleb,
	HTMLclass:  'tabei',
        text:{
            name: "ابن أبي ليلى"
        },
    },
	alaamash = {
        parent: abdullah_bin_masood,
	HTMLclass:  'tabei',
        text:{
            name: "الأعمش"
        },
    },	
	hamza = {
        parent: alaamash,
	    HTMLclass:  'qari7',
        uncles: [ibn_abi_laila],
        text:{
            name: "حمزة الكوفي"
        },
    },	
	solaim = {
        parent: hamza,
	childrenDropLevel: 0,
        text:{
            name: "سليم بن عيسى"
        },
    },
	khalaf_pseudo = {
		parent: solaim,
		pseudo: true,
	},	
	khalaf = {
        parent: khalaf_pseudo,
	HTMLclass: 'rawi',
 
         text:{
            name: "خلف"
        },
    },
	khallad_pseudo = {
		parent: solaim,
		pseudo: true,
	},		
	khallad = {
        parent: khallad_pseudo,
	HTMLclass: 'rawi',
 
         text:{
            name: "خلاد"
        },
    },	
	abo_yaaqoob_alazraq = {
        parent: warsh,
        text:{
            name: "ابو يعقوب الأزرق"
        },
    },	
	alasbahany = {
        parent: warsh,
        text:{
            name: "محمد الأصبهاني"
        },
    },		
	alkasaaei = {
        parent: hamza,
	HTMLclass:  'qari7',
	childrenDropLevel: 1,
        text:{
            name: "الكسائي"
        },
    },	
	abo_elharith = {
        parent: alkasaaei,
	HTMLclass: 'rawi',
 
         text:{
            name: "أبو الحارث"
        },
    },
	hafs_eldoori = {
        parent: alkasaaei,
	HTMLclass: 'rawi',
 
         text:{
            name: "الدوري"
        },
    },
	omran_bin_melhan = {
        parent: abo_mosa_alashaari,
	HTMLclass: 'tabei',
	childrenDropLevel: 1,
    uncles:[abdullah_bin_abbas],
        text:{
            name: "عمران بن ملحان"
        },
    },
	abo_elashhab_elatared = {
        parent: omran_bin_melhan,
        text:{
            name: "أبو الأشهب العطارد"
        },
    },
	yaaqoob_elhadrami = {
        parent: abo_elashhab_elatared,
	HTMLclass: 'qari10',
	childrenDropLevel: 0,
       text:{
            name: "يعقوب الحضرمي"
        },
    },
	rooh = {
        parent: yaaqoob_elhadrami,
	HTMLclass: 'rawi',
 
         text:{
            name: "روح"
        },
    },
	rowais = {
        parent: yaaqoob_elhadrami,
	HTMLclass: 'rawi',
 
         text:{
            name: "رويس"
        },
    },
	khalaf_bin_hesham = {
        parent: solaim,
	HTMLclass: 'qari10',
       text:{
            name: "خلف بن هشام"
        },
    },
	isaac_alwarraq = {
        parent: khalaf_bin_hesham,
	HTMLclass: 'rawi',
 
         text:{
            name: "إسحاق"
        },
    },	
	edrees_alhaddad = {
        parent: khalaf_bin_hesham,
	HTMLclass: 'rawi',
 
         text:{
            name: "إدريس"
        },
    },
	obaid_bin_sabbah = {
       parent: hafs,
       text:{
            name: "عبيد بن الصباح"
        },
    },
	ahmad_elashnani = {
       parent: obaid_bin_sabbah,
       text:{
            name: "الأشناني"
        },
    },	
	ali_elhashemy = {
       parent: ahmad_elashnani,
       text:{
            name: "علي الهاشمي"
        },
    },
	abolhasan_bin_ghalbon = {
       parent: ali_elhashemy,
       text:{
            name: "أبو الحسن بن غلبون"
        },
    },
	aboamr_eldani = {
       parent: abolhasan_bin_ghalbon,
       text:{
            name: "أبو عمرو الداني"
        },
    },
	abodawood_elomawi = {
       parent: aboamr_eldani,
       text:{
            name: "أبو داود سليمان بن نجاح الأموي"
        },
    },
	abolhasan_bin_hothail = {
       parent: abodawood_elomawi,
       text:{
            name: "أبو الحسن بن هذيل"
        },
    },	
	alshatebei = {
       parent: abolhasan_bin_hothail,
       text:{
            name: "الشاطبي"
        },
    },	
	
    chart_config = [
        config,
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
		abo_yaaqoob_alazraq,
		alasbahany,
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
		obaid_bin_sabbah ,
		ahmad_elashnani ,	
		ali_elhashemy,
		abolhasan_bin_ghalbon,
		aboamr_eldani, 
		abodawood_elomawi,
		abolhasan_bin_hothail,	
		alshatebei, 		
    ];

export default chart_config;

