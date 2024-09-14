/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container:{
      padding: {
        DEFAULT: '15px'
      }
    },

    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Open Sans'
    },
    backgroundImage:{
      hero : 'url(assets/images/iphones-7479304_1280.jpg)',
      grid: 'url()'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007BFF',  // Bleu
          hover: '#0056b3'  // Bleu plus foncé pour le survol
        },
        secondary: {
          DEFAULT: '#FF5722',  // Orange vif
          hover: '#E64A19'  // Orange plus foncé pour le survol
        },
        accent: {
          DEFAULT: '#FFC107',  // Jaune pour attirer l'attention
          secondary: '#FFEB3B',  // Jaune clair pour les accents secondaires
          hover: '#FFA000'  // Jaune plus foncé pour le survol
        },
        background: {
          light: '#F8F9FA',  // Blanc cassé pour le fond clair
          dark: '#343A40'  // Noir élégant pour les sections sombres
        },
        text: {
          primary: '#212529',  // Noir pour le texte principal
          secondary: '#6C757D',  // Gris pour le texte secondaire
          light: '#FFFFFF'  // Blanc pour le texte sur les sections sombres
        },
        success: {
          DEFAULT: '#28A745',  // Vert pour les messages de succès
          hover: '#218838'  // Vert plus foncé pour le survol
        },
        danger: {
          DEFAULT: '#DC3545',  // Rouge pour les messages d'erreur
          hover: '#C82333'  // Rouge plus foncé pour le survol
        },
        warning: {
          DEFAULT: '#FFC107',  // Jaune pour les avertissements
          hover: '#E0A800'  // Jaune plus foncé pour le survol
        },
        info: {
          DEFAULT: '#17A2B8',  // Bleu clair pour les informations
          hover: '#138496'  // Bleu plus foncé pour le survol
        }
      }
    }
    
  },
  plugins: [],
}

