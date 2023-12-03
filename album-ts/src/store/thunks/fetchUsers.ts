import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types";

const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (): Promise<User[]> => {
    const response = await axios.get("http://localhost:3005/users");

    return response.data;
  }
);

export { fetchUsers };
