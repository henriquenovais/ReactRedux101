import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types";

const deleteUser = createAsyncThunk(
  "users/delete",
  async (user: User): Promise<User> => {
    await axios.delete(`http://localhost:3005/users/${user.id}`);

    return user;
  }
);

export { deleteUser };
