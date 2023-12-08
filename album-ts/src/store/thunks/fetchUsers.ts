import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types";

const getUsers = createAsyncThunk<User[], void>("users/getAll", async () => {
  const response = await axios.get("http://localhost:3005/users");

  return response.data;
});

export { getUsers };
