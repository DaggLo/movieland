import type { ReactNode, HTMLProps } from "react";

export type ButtonVariant = "contained" | "text" | "outlined";
export type ButtonColor = "primary" | "default";
export type ButtonSize = "s" | "m";

export interface ButtonLabelProps {
  visible: boolean;
}

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isDisabled?: boolean;
  color?: ButtonColor;
  fullWidth?: boolean;
  component?: React.ElementType;
  className?: string;
  isLoading?: boolean;
  Spinner?: React.ComponentType<{ size?: ButtonSize, color?: ButtonColor }>;
}
