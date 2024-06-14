/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-color':'#000002',
        'btn-border':'#959596',
        'nav-font':'#868687',
        'text-btn':'#502A13',
        'title-text':'#DDDEDE',
        'white-color':'rgba(255, 255, 255, 0.6)',
        'lightBrown':'#BD8F68',
        'lightOrange':"#C2966F"
      },
      fontFamily: {
        lemonada: ['Lemonada', 'sans'], 
        Poppins: ['Poppins', 'serif'],   
      },
      backgroundImage: {
        'natural-perf': "url('/src/assets/naturalPerfume.png')",
        'forWomen': "url('/src/assets/forwomen.png')",
       
      
       

      }
    },
  },
  plugins: [],
}

