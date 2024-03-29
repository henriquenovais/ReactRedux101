import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";
import { getUsers } from "../thunks/fetchUsers";

export interface UsersState {
  data: Array<User>;
  isLoading: boolean;
  errors: Array<string>;
}

const initialState: UsersState = { data: [], isLoading: false, errors: [] };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    /**
     *  ######################################
     *  ##### EXTRA CASE: FETCH USER THUNK #####
     *  ######################################
     */
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.errors.push(action.error.message ?? "No error message provided");
      });

    /**
     *  ######################################
     *  ##### EXTRA CASE: ADD USER THUNK #####
     *  ######################################
     */

    builder
      .addCase(addUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errors.push(action.error.message ?? "No error message provided");
      });

    /**
     *  ######################################
     *  ##### EXTRA CASE: DELETE USER THUNK ##
     *  ######################################
     */

    builder
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter(
          (current) => current.id !== action.payload.id
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errors.push(action.error.message ?? "No error message provided");
      });
  },
});

export const usersReducer = usersSlice.reducer;
