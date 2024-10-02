import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GenreOrCategoryState {
  genreIdOrCategoryName: string;
  page: number;
  searchQuery: string;
}

const initialState: GenreOrCategoryState = {
  genreIdOrCategoryName: "",
  page: 1,
  searchQuery: "",
};

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState,
  reducers: {
    selectGenreOrCategory: (state, action: PayloadAction<string>) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = "";
    },
    searchMovie: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;
