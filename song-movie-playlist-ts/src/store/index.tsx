import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state: any, action: any) {
      state.push(action.payload);
    },
    removeSong(state: any, action: any) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
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
