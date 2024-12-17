const { colors } = require('./app/styles/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        accent: colors.accent,
        text: colors.text,
        background: colors.background,
      },
      backgroundImage: {
        'gradient-primary': `linear-gradient(135deg, ${colors.primary.green}, ${colors.primary.blue})`,
      },
    },
  },
  plugins: [],
}

