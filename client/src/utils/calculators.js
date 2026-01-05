export const calculateTemp = (val, unit) => {
    if (isNaN(val)) return null;
    let c, f, k, re, ra;

    if (unit === 'c') {
        c = val;
        f = (val * 9 / 5) + 32;
        k = val + 273.15;
        re = val * 0.8;
        ra = (val + 273.15) * 1.8;
    } else if (unit === 'f') {
        c = (val - 32) * 5 / 9;
        f = val;
        k = (val - 32) * 5 / 9 + 273.15;
        re = (val - 32) * 4 / 9;
        ra = val + 459.67;
    } else if (unit === 'k') {
        c = val - 273.15;
        f = (val - 273.15) * 9 / 5 + 32;
        k = val;
        re = (val - 273.15) * 0.8;
        ra = val * 1.8;
    } else if (unit === 're') {
        c = val * 1.25;
        f = (val * 2.25) + 32;
        k = (val * 1.25) + 273.15;
        re = val;
        ra = (val * 2.25) + 491.67;
    } else if (unit === 'ra') {
        c = (val - 491.67) * 5 / 9;
        f = val - 459.67;
        k = val * 5 / 9;
        re = (val - 491.67) * 4 / 9;
        ra = val;
    }

    return [
        { label: 'Celsius', value: c.toFixed(2) + ' °C' },
        { label: 'Fahrenheit', value: f.toFixed(2) + ' °F' },
        { label: 'Kelvin', value: k.toFixed(2) + ' K' },
        { label: 'Réaumur', value: re.toFixed(2) + ' °R' },
        { label: 'Rankine', value: ra.toFixed(2) + ' °Ra' }
    ];
};

export const calculateLength = (val, unit) => {
    if (isNaN(val)) return null;
    let m;
    switch (unit) {
        case 'm': m = val; break;
        case 'cm': m = val / 100; break;
        case 'km': m = val * 1000; break;
        case 'pulg': m = val * 0.0254; break;
        case 'ft': m = val * 0.3048; break;
        case 'yd': m = val * 0.9144; break;
        case 'mi': m = val * 1609.344; break;
        case 'um': m = val / 1000000; break;
        case 'nm': m = val / 1000000000; break;
        case 'ang': m = val / 10000000000; break;
        case 'nmi': m = val * 1852; break;
    }

    return [
        { label: 'Metros', value: m.toFixed(4) + ' m' },
        { label: 'Centímetros', value: (m * 100).toFixed(2) + ' cm' },
        { label: 'Kilómetros', value: (m / 1000).toFixed(6) + ' km' },
        { label: 'Pulgadas', value: (m / 0.0254).toFixed(2) + ' pulg' },
        { label: 'Pies', value: (m / 0.3048).toFixed(2) + ' ft' },
        { label: 'Yardas', value: (m / 0.9144).toFixed(2) + ' yd' },
        { label: 'Millas', value: (m / 1609.344).toFixed(6) + ' mi' },
        { label: 'Micrómetros', value: (m * 1000000).toExponential(2) + ' µm' },
        { label: 'Nanómetros', value: (m * 1000000000).toExponential(2) + ' nm' },
        { label: 'Angstroms', value: (m * 10000000000).toExponential(2) + ' Å' },
        { label: 'Millas Náuticas', value: (m / 1852).toFixed(6) + ' nmi' }
    ];
};

export const calculateArea = (val, unit) => {
    if (isNaN(val)) return null;
    let m2;
    switch (unit) {
        case 'm2': m2 = val; break;
        case 'km2': m2 = val * 1000000; break;
        case 'cm2': m2 = val / 10000; break;
        case 'in2': m2 = val * 0.00064516; break;
        case 'ft2': m2 = val * 0.09290304; break;
        case 'yd2': m2 = val * 0.83612736; break;
        case 'mi2': m2 = val * 2589988.110336; break;
        case 'ac': m2 = val * 4046.8564224; break;
        case 'ha': m2 = val * 10000; break;
    }

    return [
        { label: 'Metros²', value: m2.toFixed(4) + ' m²' },
        { label: 'Kilómetros²', value: (m2 / 1000000).toFixed(6) + ' km²' },
        { label: 'Centímetros²', value: (m2 * 10000).toFixed(2) + ' cm²' },
        { label: 'Pulgadas²', value: (m2 / 0.00064516).toFixed(2) + ' in²' },
        { label: 'Pies²', value: (m2 / 0.09290304).toFixed(2) + ' ft²' },
        { label: 'Yardas²', value: (m2 / 0.83612736).toFixed(2) + ' yd²' },
        { label: 'Millas²', value: (m2 / 2589988.110336).toFixed(6) + ' mi²' },
        { label: 'Acres', value: (m2 / 4046.8564224).toFixed(6) + ' ac' },
        { label: 'Hectáreas', value: (m2 / 10000).toFixed(6) + ' ha' }
    ];
};

export const calculateVolume = (val, unit) => {
    if (isNaN(val)) return null;
    let m3;
    switch (unit) {
        case 'm3': m3 = val; break;
        case 'l': m3 = val / 1000; break;
        case 'in3': m3 = val * 0.000016387064; break;
        case 'ft3': m3 = val * 0.028316846592; break;
        case 'gal_us': m3 = val * 0.003785411784; break;
        case 'gal_imp': m3 = val * 0.00454609; break;
        case 'cm3': m3 = val / 1000000; break;
        case 'ml': m3 = val / 1000000; break;
        case 'yd3': m3 = val * 0.764554857984; break;
        case 'oz': m3 = val * 0.0000295735295625; break;
    }

    return [
        { label: 'Metros³', value: m3.toFixed(6) + ' m³' },
        { label: 'Litros', value: (m3 * 1000).toFixed(4) + ' L' },
        { label: 'Pulgadas³', value: (m3 / 0.000016387064).toFixed(4) + ' in³' },
        { label: 'Pies³', value: (m3 / 0.028316846592).toFixed(4) + ' ft³' },
        { label: 'Galones US', value: (m3 / 0.003785411784).toFixed(4) + ' US gal' },
        { label: 'Galones Imp.', value: (m3 / 0.00454609).toFixed(4) + ' imp gal' },
        { label: 'Centím.³', value: (m3 * 1000000).toFixed(2) + ' cm³' },
        { label: 'Mililitros', value: (m3 * 1000000).toFixed(2) + ' ml' },
        { label: 'Yardas³', value: (m3 / 0.764554857984).toFixed(4) + ' yd³' },
        { label: 'Onzas', value: (m3 / 0.0000295735295625).toFixed(4) + ' oz' }
    ];
};

export const calculateWeight = (val, unit) => {
    if (isNaN(val)) return null;
    let kg;
    switch (unit) {
        case 'kg': kg = val; break;
        case 'lb': kg = val * 0.45359237; break;
        case 'oz': kg = val * 0.028349523125; break;
        case 'uk_ton': kg = val * 1016.0469088; break;
        case 'us_ton': kg = val * 907.18474; break;
        case 'ton': kg = val * 1000; break;
        case 'g': kg = val / 1000; break;
        case 'mg': kg = val / 1000000; break;
        case 'ng': kg = val / 1000000000000; break;
        case 'pg': kg = val / 1000000000000000; break;
        case 'ug': kg = val / 1000000000; break;
    }

    return [
        { label: 'Kilogramos', value: kg.toFixed(4) + ' kg' },
        { label: 'Libras', value: (kg / 0.45359237).toFixed(4) + ' lbs' },
        { label: 'Onzas', value: (kg / 0.028349523125).toFixed(4) + ' oz' },
        { label: 'Ton. UK', value: (kg / 1016.0469088).toFixed(6) + ' uk ton' },
        { label: 'Ton. US', value: (kg / 907.18474).toFixed(6) + ' us ton' },
        { label: 'Ton. Métricas', value: (kg / 1000).toFixed(6) + ' ton' },
        { label: 'Gramos', value: (kg * 1000).toFixed(2) + ' g' },
        { label: 'Miligramos', value: (kg * 1000000).toFixed(2) + ' mg' },
        { label: 'Nanogramos', value: (kg * 1000000000000).toExponential(2) + ' ng' },
        { label: 'Picogramos', value: (kg * 1000000000000000).toExponential(2) + ' pg' },
        { label: 'Microgramos', value: (kg * 1000000000).toExponential(2) + ' µg' }
    ];
};

export const calculateSpeed = (val, unit) => {
    if (isNaN(val)) return null;
    let ms;
    switch (unit) {
        case 'ms': ms = val; break;
        case 'kmh': ms = val / 3.6; break;
        case 'ft_min': ms = val * 0.00508; break;
        case 'ft_s': ms = val * 0.3048; break;
        case 'mph': ms = val * 0.44704; break;
        case 'kn': ms = val * 0.514444444; break;
    }

    return [
        { label: 'm/s', value: ms.toFixed(2) },
        { label: 'km/h', value: (ms * 3.6).toFixed(2) },
        { label: 'ft/min', value: (ms / 0.00508).toFixed(2) },
        { label: 'ft/s', value: (ms / 0.3048).toFixed(2) },
        { label: 'mph', value: (ms / 0.44704).toFixed(2) },
        { label: 'Nudos', value: (ms / 0.514444444).toFixed(2) + ' kt' }
    ];
};

export const calculatePressure = (val, unit) => {
    if (isNaN(val)) return null;
    let pa;
    switch (unit) {
        case 'pa': pa = val; break;
        case 'bar': pa = val * 100000; break;
        case 'mmh2o': pa = val * 9.80665; break;
        case 'kgcm2': pa = val * 98066.5; break;
        case 'psi': pa = val * 6894.76; break;
        case 'psf': pa = val * 47.88025898; break;
        case 'inh2o': pa = val * 249.08891; break;
        case 'fth2o': pa = val * 2989.06692; break;
        case 'atm': pa = val * 101325; break;
        case 'kgfm2': pa = val * 9.80665; break;
        case 'kgfcm2': pa = val * 98066.5; break;
    }

    return [
        { label: 'Pascales', value: pa.toFixed(2) + ' Pa' },
        { label: 'Bar', value: (pa / 100000).toFixed(6) + ' bar' },
        { label: 'mm H2O', value: (pa / 9.80665).toFixed(2) + ' mm H2O' },
        { label: 'kg/cm²', value: (pa / 98066.5).toFixed(6) + ' kg/cm²' },
        { label: 'PSI', value: (pa / 6894.76).toFixed(4) + ' psi' },
        { label: 'PSF', value: (pa / 47.88025898).toFixed(4) + ' psf' },
        { label: 'Inches H2O', value: (pa / 249.08891).toFixed(4) + ' in H2O' },
        { label: 'ft H2O', value: (pa / 2989.06692).toFixed(4) + ' ft H2O' },
        { label: 'Atmósferas', value: (pa / 101325).toFixed(6) + ' atm' },
        { label: 'kgf/m²', value: (pa / 9.80665).toFixed(2) + ' kgf/m²' },
        { label: 'kgf/cm²', value: (pa / 98066.5).toFixed(6) + ' kgf/cm²' }
    ];
};

export const calculateFlow = (val, unit) => {
    if (isNaN(val)) return null;
    let lmin;
    switch (unit) {
        case 'm3s': lmin = val * 60000; break;
        case 'm3m': lmin = val * 1000; break;
        case 'm3h': lmin = val * 16.6666667; break;
        case 'ls': lmin = val * 60; break;
        case 'lmin': lmin = val; break;
        case 'lh': lmin = val / 60; break;
        case 'gpm': lmin = val * 3.78541178; break;
        case 'gpd': lmin = val * 0.002628758; break;
        case 'cfm': lmin = val * 28.3168466; break;
        case 'gpm_imp': lmin = val * 4.54609; break;
        case 'gpd_imp': lmin = val * 0.0031570069; break;
    }

    return [
        { label: 'm³/s', value: (lmin / 60000).toFixed(6) },
        { label: 'm³/min', value: (lmin / 1000).toFixed(4) },
        { label: 'm³/h', value: (lmin / 16.6666667).toFixed(4) },
        { label: 'L/s', value: (lmin / 60).toFixed(4) },
        { label: 'L/min', value: lmin.toFixed(4) },
        { label: 'L/h', value: (lmin * 60).toFixed(2) },
        { label: 'GPM (US)', value: (lmin / 3.78541178).toFixed(4) },
        { label: 'GPD (US)', value: (lmin / 0.002628758).toFixed(2) },
        { label: 'CFM', value: (lmin / 28.3168466).toFixed(4) },
        { label: 'GPM (Imp)', value: (lmin / 4.54609).toFixed(4) },
        { label: 'GPD (Imp)', value: (lmin / 0.0031570069).toFixed(2) }
    ];
};
