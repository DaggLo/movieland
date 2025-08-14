import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type Movie } from "@/entities";
import { type FavoritesState } from "../lib";

const initialState: FavoritesState = {
  movieList: [],
}

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      state.movieList = [action.payload, ...state.movieList]
    },
    deleteFromFavorites: (state, action: PayloadAction<Movie>) => {
      state.movieList = state.movieList.filter(
        item => item.id !== action.payload.id,
      )
    },
    clearFavorites: state => {
      state.movieList = []
    },
  },
})

export const favoritesReducer = favoritesSlice.reducer;
