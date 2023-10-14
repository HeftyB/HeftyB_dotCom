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
                },
                downAndOut: {
                    '0%': {width: '2%', height: '1%'},
                    '25%': {width: '25%', height: '65%'},
                    '50%': {height: '100%', width: '55%'},
                    '75%': {height: '90%', width: '75%'},
                    '100%': {width: '100%', height: '100%'}
                },
                sideSlide: {
                    '0%': {opacity: '0', transform: 'translateX(60px)'},
                    '80%': {transform: 'translateX(60px)'},
                    '100%': {opacity: '1', transform: 'translateX(0px)'}
                },
                rollIn: {
                    '0%': {
                        transform: 'translateX(-50%) rotateY(90deg)'
                    },
                    '60%': {
                        transform: 'translateX(0)'
                    },
                    '100%': {
                        transform: 'rotateY(0deg)'
                    }
                },
                rollOut: {
                    '0%': {
                        transform: 'translateX(0) rotateY(0)'
                    },
                    '30%': {
                        transform: 'translateX(15%) rotateY(-83.75deg)'
                    },
                    '35%': {
                        transform: 'translateX(20%) rotateY(-90deg)'
                    },
                    '100%': {
                        transform: 'translateX(50%) rotateY(-90deg)'
                    }
                }
            },
            animation: {
                shakes: "shakes 0.5s ease-in-out infinite alternate",
                "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
                "spin-2": "spin 0.5s ease-in-out forwards",
                blowUpModal: "blowUpModal 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
                blowUpModalTwo: "blowUpModalTwo 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
                downAndOut: "downAndOut 1.5s ease-in-out forwards",
                outAndDown: "downAndOut 1.5s linear backwards",
                sideSlide: "translateX 300ms 180ms ease-in-out forwards",
                rollIn: "rollIn 10s linear forwards",
                rollOut: "rollOut 10s linear forwards",
                rollBackIn: "rollOut 10s linear backwards",
                rollBackOut: "rollIn 10s linear backwards"
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
