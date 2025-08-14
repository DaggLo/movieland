import { type Movie } from "@/entities";
import { createAppSelector } from "@/shared";

export const selectFavoritesByIds = createAppSelector(
  [state => state.favorites.favorites, (_, id: number) => id],
  (movies: Movie[], id) => movies.some(movie => movie.id === id),
);
