import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect } from "react";
import Button from "./components/Button";
import { ButtonColoring, ButtonShape } from "./constants/enums/button";
import { addUser } from "./store/thunks/addUser";
import Skeleton from "./components/Skeleton";
import { useThunk } from "./hooks/useThunk";
import { FaSpinner } from "react-icons/fa";
import { deleteUser } from "./store/thunks/deleteUser";
import { User } from "./types";
import { getUsers } from "./store/thunks/fetchUsers";
import UserInformation from "./components/UserInformation";

function App() {
  const users = useSelector((state: RootState) => {
    return state.users;
  });

  const {
    triggerThunk: triggerAddUser,
    isLoading: isAddUserLoading,
    errors: addUserError,
  } = useThunk<User, void>(addUser);

  const { triggerThunk: triggerDeleteUser, errors: deleteUserError } = useThunk<
    User,
    User
  >(deleteUser);

  const {
    triggerThunk: triggerGetUsers,
    isLoading: isGetUsersLoading,
    errors: getUsersError,
  } = useThunk<User[], void>(getUsers);

  if (
    getUsersError.length > 0 ||
    deleteUserError.length > 0 ||
    addUserError.length > 0
  ) {
    const errors: Error[] = [
      ...addUserError,
      ...deleteUserError,
      ...getUsersError,
    ];

    errors.forEach((item) => {
      console.error(item);
    });
  }

  useEffect(() => {
    triggerGetUsers();
  }, [triggerGetUsers]);

  return (
    <>
      <div className="flex flex-row align-center items-center justify-evenly p-4">
        <h1>Users </h1>
        <Button
          onClick={() => {
            triggerAddUser();
          }}
          text={"Add user"}
          coloring={ButtonColoring.PRIMARY}
          shape={ButtonShape.PILL}
          icon={isAddUserLoading ? <FaSpinner /> : <></>}
          disabled={isAddUserLoading}
        />
      </div>
      <div className="flex flex-col align-center items-center justify-evenly p-4 gap-2">
        {!isGetUsersLoading ? (
          users.data.map((item) => (
            <UserInformation
              key={item.id}
              data={item}
              deleteUser={triggerDeleteUser}
            />
          ))
        ) : (
          <Skeleton layoutQty={8} className="h-16 w-80" />
        )}
      </div>
    </>
  );
}

export default App;
