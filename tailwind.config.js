module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Hind Siliguri',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '740px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#FF7235',
        accentHover: '#e05216',
        grey: '#F5F5F5',
      },
      backgroundImage: {
        // imagens de background aqui
        bg1: "url('/src/assets/background.png')",
        Image1: "url('/src/assets/Imagem1.png')",
        Image2: "url('/src/assets/Imagem2.png')",
        Image3: "url('/src/assets/Imagem3.png')",
      },
    },
  },
  plugins: [],
};
