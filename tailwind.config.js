module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FA7D00E1",
          secondary: "#eabafc",
          accent: "#5F9CFF",
          neutral: "#F1EEEE",
          "base-100": "#D8D6D6",
          info: "#378CC8",
          success: "#28BD75",
          warning: "#BE9A09",
          error: "#F91018",
        },
        dark: {
          primary: "#38d838",
          secondary: "#0C68B8",
          accent: "#5F9CFF",
          neutral: "#1C1C27",
          "base-100": "#252525",
          info: "#74CAE7",
          success: "#1D8B63",
          warning: "#E2B308",
          error: "#FC5F8B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
