module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.vue'],
        extractors: [
          {
            extractor: class {
              static extract(content) {
                console.log(process.env.NODE_ENV)
                return content.match(/[a-zA-Z0-9-:_/]+/g) || [];
              }
            },
            extensions: ['vue'],
          },
        ],
      })
    ] : [],
  ]
}
