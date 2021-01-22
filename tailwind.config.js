module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                'big': '8.138vw',
                'heading': '2.1875vw',
                'project': '18vh'
            },
            colors: {
                'space-cadet': '#2E294E',
                'eggshell': '#F1E9DA',
            },
            fontFamily: {
                'inter': ['"Inter Bold"', 'serif'],
                'elgoc-thin': ['"Elgoc Thin"', 'serif'],
                'elgoc-thin-alt': ['"Elgoc Thin Alt"', 'serif'],
            },
            zIndex: {
                '-10': '-10',
            }
        },
    },
    variants: {},
    plugins: [],
}