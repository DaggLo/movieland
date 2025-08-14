export type SpinnerSize = "s" | "m" | "l" | "xl";
export type SpinnerColor = "primary" | "secondary" | "default";

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
  className?: string;
}
