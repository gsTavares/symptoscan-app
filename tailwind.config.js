/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/screens/**/*.{js,jsx,ts,tsx}", 
    "./src/components/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: "OpenSans_400Regular",
        semibold: "OpenSans_600SemiBold",
        bold: "OpenSans_700Bold"
      }
    },
  },
  plugins: [],
}

