import { type FC, useMemo, useState } from 'react';

import {
  type IThemeProvider,
  LOCAL_STORAGE_THEME_KEY,
  type Theme,
  ThemeConst,
  ThemeContext,
} from '../lib';

const currentTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? ThemeConst.LIGHT;

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const currentValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={currentValue}>
      {children}
    </ThemeContext.Provider>
  );
};
