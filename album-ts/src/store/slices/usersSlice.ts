import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { User } from "../../types";
import { UnknownAsyncThunkRejectedAction } from "@reduxjs/toolkit/dist/matchers";

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
    builder
      .addCase(
        fetchUsers.pending,
        (state: UsersState, action: PayloadAction) => {
          state.isLoading = true;
        }
      )
      .addCase(
        fetchUsers.fulfilled,
        (state: UsersState, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        fetchUsers.rejected,
        (state: UsersState, action: UnknownAsyncThunkRejectedAction) => {
          state.isLoading = false;
          state.errors.push(
            action.error.message ?? "No error message provided"
          );
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;
