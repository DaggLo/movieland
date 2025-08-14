import { cn } from "@shared";
import { type BadgeProps } from "../lib";

const block = cn('badge');

export function Badge({ variant = "primary", children, className }: BadgeProps) {
  return (
    <span className={block({ variant }, [className])}>{children}</span>
  );
}
