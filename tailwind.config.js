module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    applyComplexClasses: true,
  },
  purge: {
    // needs to be set if we want to purge all unused
    // @tailwind/typography styles
    mode: "all",
    content: ["./src/**/*.svelte", "./src/**/*.html"],
  },
  theme: {
    extend: {},
    typography: {
      default: {
        css: {
          maxWidth: "none",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};