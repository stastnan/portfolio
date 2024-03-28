import { Theme } from "./themeTypes";

export const defaultTheme: Theme = {
  fonts: {
    montserrat: "Montserrat, sans-serif",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
  },
  lineHeight: {
    general: "1.8rem",
    small: "1.1rem",
    middle: "1.3rem",
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
    p: "0.9rem",
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
  hue: {
    primary: 207,
    white: "100%",
    light: "95%",
    black: "10%",
    dark: "55%",
    background: "hsl(0, 0%, 95%)",
  },
  transition: "all 500ms ease-in-out",
  colors: {
    primary: "hsl(207, 70%, 65%)",
    white: "hsl(0, 0%, 100%)",
    light: "hsl(207, 45%, 95%)",
    black: "hsl(0, 0%, 10%)",
    dark: "hsl(207, 20%, 55%)",
  },
  zIndex: {
    "10": 10,
    "100": 100,
  },
  shadow: {
    primary:
      "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)",
    footer: "0px 3px 3px -2px rgba(0, 0, 0, 0.2)",
  },
};
