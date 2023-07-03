/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            pink: "#801060",
            purple: "#030620",
            white: "#ffffff",
        },
        fontFamily: {
            sans: ["'Open Sans'", "sans-serif"],
            serif: ["'Scope One'", "serif"],
        },
        plugins: [],
    },
}
