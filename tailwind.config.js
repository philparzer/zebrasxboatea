module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee", "cursive"],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateX(10px) translateY(40px)' },
          '50%': { transform: 'translateY(25px) translateX(-10px)' },
          '75%': { transform: 'translateY(80px) translateX(30px)' }
        },
        clouds: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateX(25px)' },
          '75%': { transform: 'translateX(-25px) ' }
        },

        clouds1: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateY(25px)' },
          '75%': { transform: 'translateX(-25px)' }
        },

        clouds2: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateX(25px) translateY(40px)' },
          '75%': { transform: 'translateX(-25px)' }
        },
        gradientMove: {
          '0%': {backgroundPosition: "0%  50%"},
          '100%': {backgroundPosition: "0%  50%"},
          "50%": {backgroundPosition: "100%  50%"}
        },
        backgroundMove: {
          "0%": {backgroundPosition:"50% 2%"},
          "50%": {backgroundPosition:"51% 99%"},
          "100%": {backgroundPosition:"50% 2%"}
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        clouds1: 'clouds 20s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite',
        clouds2: 'clouds1 20s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite',
        clouds3: 'clouds2 20s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite',
        gradientMove: 'gradientMove 20s infinite',
        backgroundMove: 'backgroundMove ease-in-out 10s infinite',
      },
    },
    
  },
  plugins: [],
}