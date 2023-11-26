import { configureStore } from "@reduxjs/toolkit";
import { carsReducers, deleteCar, insertCar } from "./slices/carsSlice";
import { formReducers, updateName, updatePrice } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducers,
    form: formReducers,
  },
});

export { insertCar, deleteCar, store, updateName, updatePrice };
