import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { defaultTheme } from "../ui/theme/theme";
import { Theme } from "../ui/theme/themeTypes";

interface ThemeContextType {
  theme: Theme;
  updateTheme: (newHue: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hue, setHue] = useState(() => {
    const storedHue = localStorage.getItem("hue");
    return storedHue ? parseInt(storedHue, 10) : defaultTheme.hue.primary;
  });

  useEffect(() => {
    localStorage.setItem("hue", hue.toString());
  }, [hue]);

  const theme = useMemo(() => {
    const primaryColor = `hsl(${hue}, 70%, 65%)`;
    const lightColor = `hsl(${hue}, 45%, 95%)`;
    const darkColor = `hsl(${hue}, 20%, 55%)`;
    const shadowPrimary = `0 0.8rem 1.5rem hsla(${hue}, 38%, 42%, 0.28)`;

    const updatedTheme: Theme = {
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        primary: primaryColor,
        light: lightColor,
        dark: darkColor,
      },
      shadow: {
        ...defaultTheme.shadow,
        primary: shadowPrimary,
      },
      hue: {
        ...defaultTheme.hue,
        primary: hue,
      },
    };

    return updatedTheme;
  }, [hue]);

  const updateTheme = (newHue: number) => {
    setHue(newHue);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Something went wrong within the theme context.");
  }
  return context;
};

export default ThemeContextProvider;
