module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluoise: {
          DEFAULT: "#6DEAC9",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#F3FDFA",
          300: "#C6F7EA",
          400: "#9AF0D9",
          500: "#6DEAC9",
          600: "#40E4B9",
          700: "#1ED3A3",
          800: "#18A681",
          900: "#117A5E",
        },
        shakespeare: {
          DEFAULT: "#55ADDC",
          50: "#FFFFFF",
          100: "#FEFFFF",
          200: "#D4EAF6",
          300: "#AAD6ED",
          400: "#7FC1E5",
          500: "#55ADDC",
          600: "#2B98D3",
          700: "#237AA8",
          800: "#1A5B7E",
          900: "#113D54",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
