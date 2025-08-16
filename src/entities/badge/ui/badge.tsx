import { cn } from "@shared";
import { type BadgeProps } from "../lib";

const block = cn('badge');

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={block(null, [className])}>{children}</span>
  );
}
