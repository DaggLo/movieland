import { useEffect, useCallback } from "react";

import { EmptySearch, LoadingText } from "@entities";
import {
  fetchMovies,
  MoviesList,
  useInfiniteScroll,
  useQueryStringParams,
} from "@features";
import { cn, useAppDispatch, useAppSelector } from "@shared";

const block = cn("home-page");

export const Home = () => {
  const movies = useAppSelector((state) => state.movies.movies);
  const fetchStatus = useAppSelector((state) => state.movies.fetchStatus);
  const page = useAppSelector((state) => state.movies.page);
  const totalPages = useAppSelector((state) => state.movies.totalPages);
  const isLoading = fetchStatus === "loading";

  const { searchValue } = useQueryStringParams();
  const dispatch = useAppDispatch();

  const fetchMore = useCallback(
    (cb: () => void) => {
      dispatch(fetchMovies({ queryString: searchValue, page: page + 1 })).then(
        cb,
      );
    },
    [dispatch, page, searchValue],
  );

  const hasNextPage = page < totalPages;
  const targetRef = useInfiniteScroll({
    fetchNextPage: (cb) => fetchMore(cb),
    isLoading,
    hasNextPage,
  });

  useEffect(() => {
    dispatch(fetchMovies({ queryString: searchValue }));
  }, [searchValue]);

  return (
    <section className={block()}>
      <div className={block("movies-list")}>
        <MoviesList data={movies} ref={targetRef} />
        {isLoading && <LoadingText />}
        {!isLoading && !movies.length ? (
          <EmptySearch searchValue={searchValue} />
        ) : null}
      </div>
    </section>
  );
};
