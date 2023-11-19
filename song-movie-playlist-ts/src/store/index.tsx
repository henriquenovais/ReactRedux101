import {
  Action,
  PayloadAction,
  configureStore,
  createAction,
  createSlice,
} from "@reduxjs/toolkit";
export interface SongsPlaylistState {
  songs: string[];
}

export const ADD_SONG = "song/addSong";
export const REMOVE_SONG = "song/removeSong";
export const ADD_MOVIE = "movie/addMovie";
export const REMOVE_MOVIE = "movie/removeMovie";
export const RESET = "app/reset";

const reset = createAction(RESET);

const songsSlice = createSlice({
  name: "song",
  initialState: new Array<string>(),
  reducers: {
    addSong(state: string[], action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeSong(state: string[], action: PayloadAction<string>) {
      const index = state.indexOf(action.payload);
      return [...state].splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state: string[], action: Action) => {
      return [];
    });
  },
});

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
      return [...state].splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state: string[], action: Action) => {
      return [];
    });
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
