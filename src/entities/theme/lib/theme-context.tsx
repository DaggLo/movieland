import { createContext } from 'react';

import { type IThemeContext, ThemeConst } from ".";

export const ThemeContext = createContext<IThemeContext>({
  theme: ThemeConst.LIGHT,
  setTheme: (t) => t,
});
