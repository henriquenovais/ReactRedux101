import { AsyncThunk } from "@reduxjs/toolkit";
import { useCallback, useState } from "react";
import { useAppDispatch } from "../store";

export interface ThunkTracker {
  triggerThunk: (payload?: any) => void;
  isLoading: boolean;
  errors: Error[];
}

export const useThunk = (thunk: AsyncThunk<any, any, any>): ThunkTracker => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Array<Error>>([]);
  const dispatch = useAppDispatch();

  const triggerThunk = useCallback(
    (payload?: any) => {
      setIsLoading(true);
      dispatch(thunk(payload))
        .catch((err) => {
          setErrors((current) => [...current, err]);
        })
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return { triggerThunk, isLoading, errors };
};
