import { AsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { useCallback, useState } from "react";
import { useAppDispatch } from "../store";

export interface ThunkTracker<U> {
  triggerThunk: (payload: U) => void;
  isLoading: boolean;
  errors: Error[];
}

export interface AsyncThunkConfig {
  state?: unknown;
  dispatch?: Dispatch;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
}

export function useThunk<T, U>(
  thunk: AsyncThunk<T, U, AsyncThunkConfig>
): ThunkTracker<U> {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Array<Error>>([]);
  const dispatch = useAppDispatch();

  const triggerThunk = useCallback(
    (payload: U) => {
      setIsLoading(true);
      dispatch(thunk(payload))
        .unwrap()
        .catch((err) => {
          setErrors((current) => [...current, err]);
        })
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return { triggerThunk, isLoading, errors };
}
