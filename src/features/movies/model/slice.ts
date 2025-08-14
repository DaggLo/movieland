import { createSlice } from "@reduxjs/toolkit";
import type { MoviesState } from "../lib";
import { fetchMovies } from "./thunk";

const initialState: MoviesState = {
  movies: [],
  page: 1,
  totalPages: 1,
  fetchStatus: null,
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const { page, results, total_pages } = action.payload;

        state.fetchStatus = "success"
        state.page = page
        state.totalPages = total_pages

        if (page === 1) {
          state.movies = results
        } else {
          state.movies = [...state.movies, ...results]
        }

        state.fetchStatus = "success"
      })
      .addCase(fetchMovies.pending, state => {
        state.fetchStatus = "loading"
      })
      .addCase(fetchMovies.rejected, state => {
        state.fetchStatus = "error"
      })
  },
})

export const moviesReducer = moviesSlice.reducer;
