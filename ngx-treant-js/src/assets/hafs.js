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

    var hafs = {
        id: 0,
        HTMLclass: 'rawi',
        text: {
            name: 'حفص',
        },
    },
    obaid_bin_sabbah = {
        id: 1,
        parent: hafs.id,
        text: {
            name: 'عبيد بن الصباح',
        },
    },
    ahmad_elashnani = {
        id: 2,
        parent: obaid_bin_sabbah.id,
        text: {
            name: 'الأشناني',
        },
    },
    ali_elhashemy = {
        id: 3,
        parent: ahmad_elashnani.id,
        text: {
            name: 'علي الهاشمي',
        },
    },
    abolhasan_bin_ghalbon = {
        id: 4,
        parent: ali_elhashemy.id,
        text: {
            name: 'أبو الحسن بن غلبون',
        },
    },
    aboamr_eldani = {
        id: 5,
        parent: abolhasan_bin_ghalbon.id,
        text: {
            name: 'أبو عمرو الداني',
        },
    },
    abodawood_elomawi = {
        id: 6,
        parent: aboamr_eldani.id,
        text: {
            name: 'أبو داود سليمان بن نجاح الأموي',
        },
    },
    abolhasan_bin_hothail = {
        id: 7,
        parent: abodawood_elomawi.id,
        text: {
            name: 'أبو الحسن بن هذيل',
        },
    },
    alshatebei = {
        id: 8,
        parent: abolhasan_bin_hothail.id,
        text: {
            name: 'الشاطبي',
        },
    },
    chart_config = [
        hafs,
        obaid_bin_sabbah,
        ahmad_elashnani,
        ali_elhashemy,
        abolhasan_bin_ghalbon,
        aboamr_eldani,
        abodawood_elomawi,
        abolhasan_bin_hothail,
        alshatebei,
    ];

export default chart_config;
