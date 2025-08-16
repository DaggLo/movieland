import { cn } from "@shared";
import type { SpinnerProps } from "../lib";

const block = cn('spinner');

export function Spinner({ className }: SpinnerProps) {
  return (
    <div className={block(null, [className])}>
      <svg width="100%" height="100%" viewBox="22 22 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className={block('circle')} cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" />
      </svg>
    </div>
  );
}
