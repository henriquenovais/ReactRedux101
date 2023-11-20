import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

export interface SongsPlaylistState {
  songs: string[];
}

const songsSlice = createSlice({
  name: "song",
  initialState: new Array<string>(),
  reducers: {
    addSong(state: string[], action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeSong(state: string[], action: PayloadAction<string>) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state: string[], action: Action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducers = songsSlice.reducer;
