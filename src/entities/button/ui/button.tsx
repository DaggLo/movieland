import { cn } from "@shared";
import { type ButtonProps } from "../lib";

const block = cn('button');

export function Button ({
  badge,
  children,
  className,
  isDisabled,
  isLoading,
  spinner,
 }: ButtonProps) {
  const content = isLoading
    ? (<div className={block('spinner')}>{spinner}</div>)
    : (
      <span className={block('inner')}>
        {children}
        <span className={block('badge')}>{badge}</span>
      </span>
    );

  return (
    <div className={block({ 'disabled': isDisabled }, [className])}>
      {content}
    </div>
  );
};
