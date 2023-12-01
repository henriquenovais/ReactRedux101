import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types";

const wait = async (miliseconds: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, miliseconds));
};

const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (): Promise<User[]> => {
    await wait(10000);

    const response = await axios.get("http://localhost:3000/users");

    return response.data;
  }
);

export { fetchUsers };
