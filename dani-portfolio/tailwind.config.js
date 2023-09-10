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
            lighterPink: "#F9C2D7",
            brightPink: "#DB005B",
            pink: "#951A7A",
            darkPink: "#801060",
            darkPurple: "#030620",
            purple: "#21082F",
            lightBlue: "#97FAEE",
            blue: "#4168FF",
            darkBlue: "#0F0726",
            white: "#ffffff",
            lightPurple: "#7D8FFF",
            lighterPurple: "#c4d0ff",
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
