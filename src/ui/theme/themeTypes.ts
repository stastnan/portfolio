interface Colors {
  primary: string;
  white: string;
  light: string;
  black: string;
  dark: string;
}

interface ButtonUI {
  backgroundColor: string;
  color: string;
  hoverColor: string;
  hoverBg: string;
  hoverBorder: string;
}

interface ButtonVariants {
  primary: ButtonUI;
  light: ButtonUI;
}

interface LineHeight {
  general: string;
  small: string;
  middle: string;
}

interface TextSizes {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  p: string;
}

interface BoxShadow {
  primary: string;
  footer: string;
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
  borderRadius: {
    borderRadius1: string;
    borderRadius2: string;
    borderRadius3: string;
  };
  contentWidth: {
    lg: string;
    md: string;
  };
  transition: string;
  colors: Colors;
  hue: {
    primary: number;
    black: string;
    dark: string;
    light: string;
    white: string;
  };
  zIndex: {
    "10": number;
  };
  buttonVariants: ButtonVariants;
  lineHeight: LineHeight;
  textSizesDesktop: TextSizes;
  textSizesMobile: TextSizes;
  shadow: BoxShadow;
}
