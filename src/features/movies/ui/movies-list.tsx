import { uniqueId } from "lodash";
import { type Movie, MovieCard } from "@entities";
import { cn } from "@shared";

const block = cn("movie-list");

export const MoviesList = ({
  data,
  ref,
}: {
  data: Movie[];
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div data-testid="movies-list" className={block()}>
      {data?.map((movie, i) => {
        return (
          <MovieCard
            key={uniqueId()}
            movie={movie}
            ref={i === 0 ? ref : undefined}
          />
        );
      })}
    </div>
  );
};
