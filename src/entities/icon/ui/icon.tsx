import React from "react";

import { cn } from "@shared";
import { type BaseIconProps } from "../lib";

const block = cn('icon');

export function Icon({ children, size, width, height, color = "default", className, ...props }: BaseIconProps) {
  const iconProps = {
    width: size || width || 24,
    height: size || height || 24,
    className: block({ color }, [className]),
    ...props,
  };

  return React.cloneElement(children, iconProps);
};
