module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ],
    },
  },
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--bg-background-primary)',
        },
        typo: {
          primary: 'var(--text-typo-primary)',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
