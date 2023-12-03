import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../store";

export const useThunk = (
  thunk: AsyncThunkAction<any, void, any>
): [() => void, boolean, Error[]] => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Array<Error>>([]);
  const dispatch = useDispatch<AppThunkDispatch>();

  const thunkCallback = useCallback(() => {
    setIsLoading(true);
    dispatch(thunk)
      .catch((err) => {
        setErrors((current) => [...current, err]);
      })
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);

  return [thunkCallback, isLoading, errors];
};
