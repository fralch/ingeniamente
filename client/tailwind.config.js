export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            }
        },
    },
    safelist: [
        {
            pattern: /(bg|text)-(blue|amber|cyan|sky|indigo|purple|slate|orange|emerald|red|violet|rose|fuchsia|stone|yellow|zinc|lime|teal)-(50|100|300|400|500|600)/,
        },
    ],
    plugins: [],
}
