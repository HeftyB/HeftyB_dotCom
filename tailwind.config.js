module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            roman: 'upper-roman',
        },
        extend: {
            keyframes: {
                shakes: {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(90deg)'}
                },
                blowUpModal: {
                    '0%': {transform: 'scale(0)', opacity: '0'},
                    '100%': {transform: 'scale(1)', opacity: '1'}
                },
                blowUpModalTwo: {
                    '0%': {transform: 'scale(1)', opacity: '1'},
                    '100%': {transform: 'scale(0)', opacity: '0'}
                }
            },
            animation: {
                shakes: "shakes 0.5s ease-in-out infinite alternate",
                "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
                blowUpModal: "blowUpModal 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
                blowUpModalTwo: "blowUpModalTwo 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
            },
            scale: {
                '-1': '-1'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
}
