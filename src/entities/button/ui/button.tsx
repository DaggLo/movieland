import { forwardRef } from "react";

import { cn } from "@shared";
import type { ButtonProps } from "../lib";

const block = cn('button');

const getSpinnerColor = (variant: ButtonProps["variant"], color: ButtonProps["color"]) => {
  if (variant === "contained") {
    return color === "default" ? "primary" : "default";
  }
  if (variant === "outlined") {
    return color === "primary" ? "primary" : "default";
  }
  return color;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonRoot(
  {
    children,
    color = "primary",
    isDisabled,
    endIcon: endIconProp,
    startIcon: startIconProp,
    fullWidth,
    size = "m",
    variant = "contained",
    className,
    component,
    isLoading,
    Spinner,
    ...restProps
  },
  ref,
) {
  const startIcon = startIconProp && <span className={block('start-icon')}>{startIconProp}</span>;
  const endIcon = endIconProp && <span className={block('end-icon')}>{endIconProp}</span>;

  const btnType = `${variant}-${color}`;
  const spinnerColor = getSpinnerColor(variant, color);
  const Component = component ?? "button";

  return (
    <Component
      disabled={isDisabled || isLoading}
      className={block({ size, type: btnType, 'full-width': fullWidth }, [className])}
      ref={ref}
      {...restProps}
    >
      <span className={block('label', { hidden: isLoading })}>
        {startIcon}
        {children}
        {endIcon}
      </span>
      {Spinner && isLoading && (
        <div className={block('spinner')}>
          <Spinner size={size} color={spinnerColor}></Spinner>
        </div>
      )}
    </Component>
  );
});
