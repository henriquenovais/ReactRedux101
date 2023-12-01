import {
  AnyAction,
  Store,
  ThunkDispatch,
  configureStore,
} from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import thunkMiddleware from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [thunkMiddleware],
});

// 1. Get the root state's type from reducers
export type RootState = ReturnType<typeof store.getState>;

// 2. Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

// 3. Create a type for store using RootState and Thunk enabled dispatch
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};

// you can also create some redux hooks using the above explicit types
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
