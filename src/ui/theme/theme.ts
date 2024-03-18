import type { Theme } from "./themeTypes";

function createTheme() {
  const hue = {
    primary: 205,
    black: "10%",
    dark: "55%",
    light: "95%",
    white: "100%",
  };

  const colors = {
    primary: `hsl(${hue.primary}, 70%, 65%)`,
    white: `hsl(0, 0%, ${hue.white})`,
    light: `hsl(${hue.primary}, 45%, ${hue.light})`,
    black: `hsl(0, 0%, ${hue.black})`,
    dark: `hsl(${hue.primary}, 20%, ${hue.dark})`,
  };

  const theme: Theme = {
    fonts: {
      montserrat: "Montserrat",
    },
    fontWeights: {
      light: 300,
      normal: 400,
      semibold: 500,
      bold: 600,
    },
    lineHeight: {
      general: "1.1rem",
    },
    borderRadius: {
      borderRadius1: "1.2rem",
      borderRadius2: "0.8rem",
      borderRadius3: "0.5rem",
    },
    textSizesDesktop: {
      h1: "3rem",
      h2: "2rem",
      h3: "1.6rem",
      h4: "1.4rem",
      h5: "0.95rem",
      h6: "0.8rem",
      p: "1rem",
    },
    textSizesMobile: {
      h1: "2.4rem",
      h2: "1.8rem",
      h3: "1.4rem",
      h4: "1rem",
      h5: "0.95rem",
      h6: "0.8rem",
      p: "0.8rem",
    },
    contentWidth: {
      lg: "76%",
      md: "90%",
    },
    transition: "all 500ms ease-in-out",
    colors,
    hue,
    zIndex: {
      "10": 10,
    },
    buttonVariants: {
      primary: {
        backgroundColor: colors.primary,
        color: "white",
        hoverColor: colors.primary,
        hoverBg: "transparent",
        hoverBorder: colors.primary,
      },
      light: {
        backgroundColor: colors.light,
        color: colors.black,
        hoverColor: colors.dark,
        hoverBg: "transparent",
        hoverBorder: colors.light,
      },
    },
  };

  return theme;
}

const theme = createTheme();

export default theme;
