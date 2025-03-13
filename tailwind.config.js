import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: "#f5f2ff",
                    100: "#ece8ff",
                    200: "#dcd4ff",
                    300: "#c3b1ff",
                    400: "#a685ff",
                    500: "#8146ff",
                    600: "#7c30f7",
                    700: "#6e1ee3",
                    800: "#5b18bf",
                    900: "#4c169c",
                    950: "#2e0b6a",
                },
                secondary: {
                    50: "#fdf3ff",
                    100: "#f9e6ff",
                    200: "#f5ccff",
                    300: "#efa3ff",
                    400: "#e76dff",
                    500: "#db48ff",
                    600: "#bf16e3",
                    700: "#a10ebd",
                    800: "#860e9a",
                    900: "#71117e",
                    950: "#4a0055",
                },
                "secondary-blue": {
                    50: "#eef5ff",
                    100: "#dae8ff",
                    200: "#bdd8ff",
                    300: "#90c0ff",
                    400: "#579aff",
                    500: "#3577fc",
                    600: "#1f57f1",
                    700: "#1741de",
                    800: "#1936b4",
                    900: "#1a328e",
                    950: "#152156",
                },
            },
        },
    },

    plugins: [forms],
};
