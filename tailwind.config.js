module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend:{
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        grayPrimary:'#D3D4D9',
        graySecondary:'#F2F2F2',
        grayTertiary:'#4D4D4D',
        grayMuted:'#808080',
        grayBG:'#FAFAFA',
        grayBgSecondary:'#E6E6E6',
        sidebarBG:'#1E2640',
        hover:'#363C53',
        white:'#FFFFFF',
        borderLight:'#D9D9D9',
        textPrimary:'#1A181E',
        blue:'#126EB4',
        lavendarBg:'#E6E6FA',
        lavendarPrimary:'#a78bfa',
        lavendarSecondary:'#c4b5fd'
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

