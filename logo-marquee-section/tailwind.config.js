/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html", // Path to your HTML files
      "./src/**/*.{html,js}", // Path to your JS/React/Vue files (if using a framework)
    ],
    theme: {
      extend: {
        animation: {
          slide: 'slide 30s linear infinite',
        },
        keyframes: {
          slide: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(calc(-100% - 78.5px))' },
          }
        },
      },
    },
    plugins: [],
  }
  