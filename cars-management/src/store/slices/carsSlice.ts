import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Car } from "../../types";

export interface CarsState {
  data: Car[];
  searchTerm: string;
}

const initialState: CarsState = {
  data: [],
  searchTerm: "",
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    insertCar(state: CarsState, action: PayloadAction<Car>) {
      state.data.push(action.payload);
    },
    deleteCar(state: CarsState, action: PayloadAction<string>) {
      state.data = state.data.filter(
        (current) => current.id !== action.payload
      );
    },
    updateSearchTerm(state: CarsState, action: PayloadAction<string>) {
      return {
        ...state,
        searchTerm: action.payload,
      };
    },
  },
});

export const carsReducers = carsSlice.reducer;
export const { deleteCar, insertCar, updateSearchTerm } = carsSlice.actions;
