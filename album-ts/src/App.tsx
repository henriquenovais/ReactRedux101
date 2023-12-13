import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { useEffect } from "react";
import Button from "./components/Button";
import { ButtonColoring, ButtonShape } from "./constants/enums/button";
import UserInformation from "./components/UserInformation";
import { addUser } from "./store/thunks/addUser";
import Skeleton from "./components/Skeleton";
import { useThunk } from "./hooks/useThunk";
import { FaSpinner } from "react-icons/fa";
import { deleteUser } from "./store/thunks/deleteUser";
import { User } from "./types";
import { getUsers } from "./store/thunks/fetchUsers";

function App() {
  const dispatch = useAppDispatch();
  const users = useSelector((state: RootState) => {
    return state.users;
  });

  const addUserTracker = useThunk<User, void>(addUser);
  const deleteUserTracker = useThunk<User, User>(deleteUser);

  if (addUserTracker.errors.length > 0 || deleteUserTracker.errors.length > 0) {
    const errors: Error[] = [
      ...addUserTracker.errors,
      ...deleteUserTracker.errors,
    ];

    errors.forEach((item) => {
      console.error(item);
    });
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-row align-center items-center justify-evenly p-4">
        <h1>Users </h1>
        <Button
          onClick={() => {
            addUserTracker.triggerThunk();
          }}
          text={"Add user"}
          coloring={ButtonColoring.PRIMARY}
          shape={ButtonShape.PILL}
          icon={addUserTracker.isLoading ? <FaSpinner /> : <></>}
          disabled={addUserTracker.isLoading}
        />
      </div>
      <div className="flex flex-col align-center items-center justify-evenly p-4 gap-2">
        {!users.isLoading ? (
          users.data.map((item) => (
            <UserInformation
              key={item.id}
              data={item}
              deleteUser={deleteUserTracker.triggerThunk}
            />
          ))
        ) : (
          <Skeleton layoutQty={users.data.length ?? 6} className="h-16 w-80" />
        )}
      </div>
    </>
  );
}

export default App;
