import { cn } from "@shared";
import { type TopBarProps } from "../lib";

const block = cn('top-bar');

export function TopBar({ children, className }: TopBarProps) {
  return (
    <header className={block(null)}>
      <div className={block('inner-container', [className])}>
        {children}
      </div>
    </header>
  );
}
