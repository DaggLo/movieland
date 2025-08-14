import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type TrailerState } from "../lib";

const initialState: TrailerState = {
  isOpened: false,
  videoKey: null,
}

export const trailerSlice = createSlice({
  name: "trailer",
  initialState,
  reducers: {
    openTrailerModal: (
      state,
      action: PayloadAction<TrailerState["videoKey"]>,
    ) => {
      state.isOpened = true
      state.videoKey = action.payload
    },
    closeTrailerModal: () => {
      return initialState
    },
  },
})

export const trailerReducer = trailerSlice.reducer;