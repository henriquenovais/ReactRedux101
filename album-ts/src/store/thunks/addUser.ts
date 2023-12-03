import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("users/add", async (): Promise<User[]> => {
  const response = await axios.post("http://localhost:3005/users", {
    id: nanoid(),
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
  });

  return response.data;
});

export { addUser };
