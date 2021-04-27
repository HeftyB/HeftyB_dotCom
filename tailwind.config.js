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
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(90deg)' }
                }
            },
            animation: {
                shakes: "shakes 0.5s ease-in-out infinite alternate",
                "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite"
            },
            scale: {
                '-1': '-1'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
