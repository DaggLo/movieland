import { cn } from "@shared";
import { type LoadingTextProps } from "../lib";

const block = cn("loading-text");

export const LoadingText = ({
  text = "Loading ...",
  className,
}: LoadingTextProps) => {
  return (
    <div className={block(null, [className])} aria-live="polite">
      <span>{text}</span>
    </div>
  );
};
