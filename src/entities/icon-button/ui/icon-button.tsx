import { cn } from "@shared";
import { type IconButton } from "../lib";

const block = cn('icon-button');

export function IconButton({ children, color = "default", className, ...props }: IconButton) {
  return (
    <button className={block({ color }, [className])} {...props}>
      {children}
    </button>
  );
}
