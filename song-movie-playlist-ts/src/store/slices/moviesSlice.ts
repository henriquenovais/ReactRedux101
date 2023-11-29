import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

export interface MoviesPlaylistState {
  movies: string[];
}

const moviesSlice = createSlice({
  name: "movie",
  initialState: new Array<string>(),
  reducers: {
    addMovie(state: string[], action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeMovie(state: string[], action: PayloadAction<string>) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state: string[], action: PayloadAction<any>) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducers = moviesSlice.reducer;
