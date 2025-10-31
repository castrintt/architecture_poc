/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './App.{js,jsx,ts,tsx}',
        './index.{js,jsx,ts,tsx}'
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            boxShadow: {
                'custom': '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
            },
            fontFamily: {
                gloriola: ['Gloriola TRIAL', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

