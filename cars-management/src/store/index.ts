import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducers,
  deleteCar,
  insertCar,
  updateSearchTerm,
} from "./slices/carsSlice";
import { formReducers, updateName, updatePrice } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducers,
    form: formReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export {
  insertCar,
  deleteCar,
  store,
  updateName,
  updatePrice,
  updateSearchTerm,
};
