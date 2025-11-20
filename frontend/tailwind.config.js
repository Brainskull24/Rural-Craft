/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'craft-brown': '#8B4513',
        'craft-tan': '#D2B48C',
        'craft-cream': '#F5E6D3',
        'craft-terracotta': '#E07A5F',
        'craft-olive': '#6B8E23',
        'craft-rust': '#B7410E',
        'craft-earth': '#A0522D',
      },
    },
  },
  plugins: [],
}

