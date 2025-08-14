import { createAsyncThunk} from "@reduxjs/toolkit";

import { getMoviesList } from "../api";

export const fetchMovies = createAsyncThunk("fetch-movies", getMoviesList);
