import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { useEffect } from "react";
import { fetchUsers } from "./store/thunks/fetchUsers";
import Button from "./components/Button";
import { ButtonColoring, ButtonShape } from "./constants/enums/button";
import Album from "./components/Album";
import { addUser } from "./store/thunks/addUser";
import Skeleton from "./components/Skeleton";
import { useThunk } from "./hooks/useThunk";
import { FaSpinner } from "react-icons/fa";
import { deleteUser } from "./store/thunks/deleteUser";

function App() {
  const dispatch = useAppDispatch();
  const users = useSelector((state: RootState) => {
    return state.users;
  });

  const [addUserCall, addUserLoading, addUserErrors] = useThunk(addUser());
  const [] = useThunk(deleteUser);

  if (addUserErrors) {
    addUserErrors.forEach((item) => {
      console.error(item);
    });
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-row align-center items-center justify-evenly p-4">
        <h1>Users </h1>
        <Button
          onClick={() => {
            addUserCall();
          }}
          text={"Add user"}
          coloring={ButtonColoring.PRIMARY}
          shape={ButtonShape.PILL}
          icon={addUserLoading ? <FaSpinner /> : <></>}
          disabled={addUserLoading}
        />
      </div>
      <div className="flex flex-col align-center items-center justify-evenly p-4 gap-2">
        {!users.isLoading ? (
          users.data.map((item) => (
            <Album key={item.id} data={item} deleteAlbum={() => {}} />
          ))
        ) : (
          <Skeleton layoutQty={6} className="h-10 w-full" />
        )}
      </div>
    </>
  );
}

export default App;
