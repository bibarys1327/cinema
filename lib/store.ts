import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth";
import genreOrCategoryReducer from "../features/currentGenreOrCategory";
import { tmdbApi } from "../services/tmdb";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [tmdbApi.reducerPath]: tmdbApi.reducer,
      currentGenreOrCategory: genreOrCategoryReducer,
      user: userReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
