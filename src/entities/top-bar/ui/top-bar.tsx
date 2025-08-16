import { cn } from "@shared";

import { type TopBarProps } from "../lib";

const block = cn('top-bar');

export const TopBar = ({ children, className }: TopBarProps) => (
  <header className={block(null, [className])}>
    <div className={block('inner-container')}>
      {children}
    </div>
  </header>
);
