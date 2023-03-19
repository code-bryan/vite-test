module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/domain/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          black: '#000000',
          white: '#FFFFFF',
          primary: {
            100: "#F1621A",
            80: "#FF7C29",
            70: "#FF9653",
            50: "#FFB07E",
            30: "#FFCAA9",
            20: '#FFD7BE',
            10: '#FFF1E9',
          },
          neutral: {
            100: '#252932',
            80: '#616671',
            40: '#BBC0CC',
            30: '#D9DDE7',
            20: '#F4F4F4'
          },
          semantic: {
            sucesss: '#1C8A00',
            warning: '#D07000',
            error: '#A20000',
          },
        }
      }
    },
  },
  plugins: [],
}
