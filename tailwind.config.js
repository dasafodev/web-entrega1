module.exports = {
  purge: {
    enabled: true,
    content: [
        './**/*.html',
        './**/*.css',
    ]
},
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
            'red-brand': "#F63758"
          },
          fontFamily: {
            sans: ['Nunito', 'sans-serif']
          },
      },
      
    },
    variants: {},
    plugins: [],
  }