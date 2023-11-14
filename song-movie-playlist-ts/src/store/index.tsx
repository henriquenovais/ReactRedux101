import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
export interface SongsPlaylistState {
  songs: string[];
}

// const initialStateSongs: SongsPlaylistState = {
//   songs: [],
// };

const songsSlice = createSlice({
  name: "song",
  initialState: new Array<string>(),
  reducers: {
    addSong(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    resetSongs(state) {
      state = [];
    },
  },
});

export interface MoviesPlaylistState {
  movies: string[];
}

const moviesSlice = createSlice({
  name: "movie",
  initialState: new Array<string>(),
  reducers: {
    addMovie(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    resetMovies(state) {
      state = [];
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

/**
 * ===================================
 * How to debug Redux store
 * ===================================
 */

// //getting initial state
// const startingState = store.getState();

// console.log("Starting state >>>>>>>>", startingState);

// //changing state
// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!!",
// });

// //getting final state
// const finalState = store.getState();

// console.log("Final state >>>>>>>>", finalState);

/**
 * ============================================
 * How to access Redux action creator functions
 * ============================================
 */

// console.log("Action creator functions >>>>>>", songsSlice.actions);

/**
 * ============================================================
 * Using an action creator function to change state directly
 * ============================================================
 */

// //getting initial state
// const startingState = store.getState();

// console.log("Starting state >>>>>>>>", startingState);

// //changing state through action creator function --- not recommended
// //this is just for debugging / knowledge gathering
// store.dispatch(songsSlice.actions.addSong("New Song!!!" as never));

// //getting final state
// const finalState = store.getState();

// console.log("Final state >>>>>>>>", finalState);

export { store };
export const { addSong, resetSongs } = songsSlice.actions;
export const { addMovie, resetMovies } = moviesSlice.actions;
