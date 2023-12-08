import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types";

const deleteUser = createAsyncThunk<User, User>(
  "users/delete",
  async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`);

    return user;
  }
);

export { deleteUser };
