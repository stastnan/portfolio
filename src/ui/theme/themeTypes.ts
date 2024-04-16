export interface Hue {
  primary: number;
  white: string;
  light: string;
  black: string;
  dark: string;
  background?: string;
}

export interface Theme {
  fonts: {
    montserrat: string;
  };
  fontWeights: {
    light: number;
    normal: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    general: string;
    small: string;
    middle: string;
  };
  borderRadius: {
    borderRadius1: string;
    borderRadius2: string;
    borderRadius3: string;
  };
  textSizesDesktop: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    p: string;
  };
  textSizesMobile: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    p: string;
  };
  contentWidth: {
    lg: string;
    md: string;
  };
  transition: string;
  colors: {
    primary: string;
    white: string;
    light: string;
    black: string;
    dark: string;
    background?: string;
    activeLink?: string;
  };
  hue: Hue;
  zIndex: {
    "10": number;
    "100": number;
    "5": number;
  };

  shadow: {
    primary: string;
    footer: string;
  };
}
