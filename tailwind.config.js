/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                crimson: ['"Crimson Text"', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                main: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",
            },
            colors: {
                "main-light": "#243c5a",
            },
        },
    },
    plugins: [],
};
