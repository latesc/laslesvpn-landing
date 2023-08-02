/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            sansSerif: ["Rubik", "sans-serif"],
        },
        extend: {
            dropShadow: {
                button: "0px 24px 24px rgba(245, 56, 56, 0.35)",
                stats: "0px 32px 24px rgba(13, 16, 37, 0.06)"
            },
            width: {
                "4/9": "44.4444444%",
                "5/9": "55.5555555%",

            },
            colors: {
                primary: {
                    DEFAULT: "#F53838",
                    dark: "#D00000",
                },
                copy: {
                    h: "#0B132A",
                    p: "#4F5665",
                }
            },
            zIndex: {
                nav: "999",
            }
        },
    },
    plugins: [],
}

