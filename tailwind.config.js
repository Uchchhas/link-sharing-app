module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            tablet: '1440px',
            laptop: '1599px',
            desktop: '1600px',
        },
        fontFamily: {
            sans: ["'Noto Sans', sans-serif"],
        },
        extend: {
            colors: {
                'artboard': '#F5F4F6',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
