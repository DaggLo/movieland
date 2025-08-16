import { type JSX, type Dispatch } from "react";

export const ThemeConst = {
  LIGHT: "light",
  DARK: "dark",
} as const;
export type Theme = (typeof ThemeConst)[keyof typeof ThemeConst];

export interface IThemeContext {
  theme: Theme;
  setTheme: Dispatch<React.SetStateAction<Theme>>;
}

export interface IThemeProvider {
  readonly children: JSX.Element;
}

export interface UseThemeResults {
  readonly theme: Theme;
  readonly toggleTheme: () => void;
}

export interface ThemeToggleProps extends UseThemeResults {
  className?: string;
}
