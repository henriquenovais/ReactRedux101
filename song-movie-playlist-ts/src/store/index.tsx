import {
  Action,
  PayloadAction,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
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
      return [...state].splice(index, 1);
    },
    resetSongs() {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(
      "movie/resetMovies",
      (state: string[], action: Action<"movie/resetMovies">) => {
        return [];
      }
    );
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
    resetMovies() {
      return [];
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
