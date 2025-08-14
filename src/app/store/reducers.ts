import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  moviesReducer, favoritesReducer, trailerReducer, watchLaterReducer,
} from "@features";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites', 'watchLater'],
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
  watchLater: watchLaterReducer,
  trailer: trailerReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
