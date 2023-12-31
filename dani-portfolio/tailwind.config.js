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
            white: "#FFF",
            lightPurple: "#7D8FFF",
            lighterPurple: "#D6DBF6",
            lightGray: "#F6F6F6",
            gray: "#E7E7E7",
            green: "#04EC6F",
        },
        fontFamily: {
            sans: ["var(--font-open_sans)"],
            serif: ["var(--font-scope_one)"],
            display: ["var(--font-bevan)"],
        },
        fontWeight: {
            normal: 400,
            bold: 700,
        },
        extend: {
            animation: {
                "show-up": "show-up 1s ease-in-out",
                enlarge: "enlarge 2.5s ease-in-out",
                appear: "appear 0.25s ease-in-out",
                disappear: "appear 0.25s ease-in-out reverse",
                moveOnPath: "moveOnPath 10s linear infinite",
                dropdown: "dropdown 0.25s ease-in-out",
                dropdownReverse: "dropdown 0.25s ease-in-out reverse",
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
                appear: {
                    "0%": { opacity: 0, transform: "scale(0.7)" },
                    "100%": { opacity: 1, transform: "scale(1)" },
                },
                moveOnPath: {
                    "0%": { "offset-distance": "0%" },
                    "100%": { "offset-distance": "100%" },
                },
                dropdown: {
                    "0%": { opacity: 0, top: "1rem" },
                    "100%": { opacity: 1, top: "5rem" },
                },
            },
        },
    },
}
