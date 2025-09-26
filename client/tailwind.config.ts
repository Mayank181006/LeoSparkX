/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // important for toggling dark mode by adding 'dark' class
    content: [
        './app/**/*.{ts,tsx}', // or './pages/**/*.{ts,tsx}' if using pages dir
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["var(--font-poppins)", "sans-serif"],
                inter: ["var(--font-inter)", "sans-serif"],
                nunito: ["var(--font-nunito-sans)", "sans-serif"],
            },
        }

    },
    plugins: [],
};
