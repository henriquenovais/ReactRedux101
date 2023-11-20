import { configureStore } from "@reduxjs/toolkit";
import { addSong, removeSong, songsReducers } from "./slices/songsSlice";
import { addMovie, moviesReducers, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

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

const store = configureStore({
  reducer: {
    songs: songsReducers,
    movies: moviesReducers,
  },
});

export { store, addSong, removeSong, addMovie, removeMovie, reset };
