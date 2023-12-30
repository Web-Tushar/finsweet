tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        navbg:'#0D0D0D',
        white: '#fff',
        primary: '#FFD2A4',
        navbtn: '#1C1D28',
        black: '#161722',
        light_oragne:'#FFF5EB',
        watch_bg: '#F5F2F0',
        upcomungbg: 'linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%);'
      },
      maxWidth: {
        'container': '1280px',
      },
      fontFamily: {
        'RobotoCondensed':  "'Roboto Condensed', sans-serif",
        
      },
      backgroundImage: {
        'banner': "url('./images/banner.jpg')",
        overlay: ' linear-gradient(92deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%);',
        
        
      }
    }
  }
}
