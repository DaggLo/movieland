import { cn } from "@shared";

const block = cn("empty-search");

export const EmptySearch = ({ searchValue }: { searchValue: string }) => {
  return (
    <div className={block()} aria-live="polite">
      <span>No results found for "{searchValue}".</span>
    </div>
  );
};
