/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                softBlue: 'hsl(215, 51%, 70%)',
                cyan: 'hsl(178, 100%, 50%)',
                darkBlueBg: 'hsl(217, 54%, 11%)',
                darkBlueCardBg: 'hsl(216, 50%, 16%)',
                darkBlueLine: 'hsl(215, 32%, 27%)',
                white: 'hsl(0, 0%, 100%)',
            },
        },
    },
    plugins: [require('daisyui')],
};
