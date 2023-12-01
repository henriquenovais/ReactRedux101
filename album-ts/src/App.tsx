import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { useEffect } from "react";
import { fetchUsers } from "./store/thunks/fetchUsers";
import { AsyncThunkAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

function App() {
  const dispatch = useAppDispatch();
  const users = useSelector((state: RootState) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log("users >>>>>>>>>>>>>>>>>>>>", users);

  return !users.isLoading ? <h1>App</h1> : <h1>Loading...</h1>;
}

export default App;
