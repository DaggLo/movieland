import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { type Movie } from "@/entities";
import { type WatchLaterState } from "../lib";

const initialState: WatchLaterState = {
  movieList: [],
}

export const watchLaterSlice = createSlice({
  name: "watch-later",
  initialState,
  reducers: {
    addToWatchLater: (state, action: PayloadAction<Movie>) => {
      state.movieList = [action.payload, ...state.movieList]
    },
    removeFromWatchLater: (state, action: PayloadAction<Movie>) => {
      state.movieList = state.movieList.filter(
        item => item.id !== action.payload.id,
      )
    },
    removeAllWatchLater: state => {
      state.movieList = []
    },
  },
})

export const watchLaterReducer = watchLaterSlice.reducer;
