import React, { type SVGProps } from "react";

export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  children: React.ReactElement;
  width?: number | string;
  height?: number | string;
  size?: number | string;
  color?: "default" | "primary" | "secondary" | "tertiary";
};
