/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            lightPink: "#E993B7",
            pink: "#951A7A",
            darkPink: "#801060",
            purple: "#030620",
            white: "#ffffff",
            lightPurple: "#7D8FFF",
        },
        fontFamily: {
            sans: ["var(--font-open_sans)"],
            serif: ["var(--font-scope_one)"],
            display: ["var(--font-bevan)"],
        },
        extend: {
            animation: {
                "show-up": "show-up 1s ease-in-out",
                enlarge: "enlarge 2.5s ease-in-out",
            },
            keyframes: {
                "show-up": {
                    "0%": { transform: "translate(var(--fromX), var(--fromY))" },
                    "100%": { transform: "translate(0, 0)" },
                },
                enlarge: {
                    "0%": { transform: "scale(0.72)" },
                    "20%": { transform: "scale(0.7)" },
                    "100%": { transform: "scale(1)" },
                },
            },
        },
    },
}
