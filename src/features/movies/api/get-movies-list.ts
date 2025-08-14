import { type Movie } from "@/entities";
import { API_KEY, ENDPOINT } from "@/shared";
import type { GetMoviesParams, SearchResponseWrapper } from "../lib";

export const getMoviesList = async ({
  queryString = "",
  page = 1,
}: GetMoviesParams): Promise<SearchResponseWrapper<Movie>> => {
  const hasSearch = Boolean(queryString?.trim());
  const baseURL = hasSearch
    ? `${ENDPOINT}/search/movie`
    : `${ENDPOINT}/discover/movie`;

  const params = new URLSearchParams();
  params.set("api_key", API_KEY);
  params.set("page", page.toString());

  if (hasSearch) {
    params.set("query", queryString)
  } else {
    params.set("sort_by", "vote_count.desc")
  }

  const URL = `${baseURL}?${params.toString()}`;
  const response = await fetch(URL);

  return response.json();
};
