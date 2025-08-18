import { type Movie } from "@/entities";

export interface MoviesState {
  movies: Movie[];
  page: number;
  totalPages: number;
  fetchStatus: null | "success" | "error" | "loading";
}

export interface SearchResponseWrapper<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface TrailersResponseWrapper<T> {
  id: number;
  results: T[];
}

export interface SearchFilter {
  search?: string;
}

export interface GetMoviesParams {
  queryString?: SearchFilter["search"];
  page?: number;
}

export interface UseInfiniteScrollProps {
  fetchNextPage: (cb: () => void) => void;
  isLoading: boolean;
  hasNextPage: boolean;
}
