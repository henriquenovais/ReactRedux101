import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FormState {
  name: string;
  price: number;
}

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    price: 0,
  },
  reducers: {
    updateName(state: FormState, action: PayloadAction<string>) {
      return {
        ...state,
        name: state.name + action.payload,
      };
    },
    updatePrice(state: FormState, action: PayloadAction<number>) {
      return {
        ...state,
        price: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(
      "cars/insertCar",
      (state: FormState, action: Action<"cars/insertCar">) => {
        return {
          name: "",
          searchTerm: "",
          price: 0,
        };
      }
    );
  },
});

export const formReducers = formSlice.reducer;
export const { updateName, updatePrice } = formSlice.actions;
