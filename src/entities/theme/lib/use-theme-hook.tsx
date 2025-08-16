import { useContext } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeConst,
  ThemeContext,
  type UseThemeResults,
} from ".";

export const useTheme = (): UseThemeResults => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ThemeConst.DARK
      ? ThemeConst.LIGHT
      : ThemeConst.DARK;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

    return { theme, toggleTheme };
};