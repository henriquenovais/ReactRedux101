import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types";
import { faker } from "@faker-js/faker";

//createAsyncThunk<TypeReceivedFromOperation, TypeInputFromOperation>
const addUser = createAsyncThunk<User, void>("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    id: nanoid(),
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
  });

  return response.data;
});

export { addUser };
