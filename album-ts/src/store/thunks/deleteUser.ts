import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types";

const deleteUser = createAsyncThunk(
  "users/delete",
  async (id: string): Promise<User[]> => {
    const response = await axios.delete(`http://localhost:3005/users/${id}`);

    return response.data;
  }
);

export { deleteUser };
