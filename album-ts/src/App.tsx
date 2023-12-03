import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { useEffect } from "react";
import { fetchUsers } from "./store/thunks/fetchUsers";
import Button from "./components/Button";
import { ButtonColoring, ButtonShape } from "./constants/enums/button";
import Album from "./components/User";
import { addUser } from "./store/thunks/addUser";
import Skeleton from "./components/Skeleton";

function App() {
  const dispatch = useAppDispatch();
  const users = useSelector((state: RootState) => {
    return state.users;
  });

  console.log("users >>>>>>>>>>>>>>>>>>>", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-row align-center items-center justify-evenly p-4">
        <h1>Users </h1>
        <Button
          onClick={() => {
            dispatch(addUser());
            dispatch(fetchUsers());
          }}
          text={"Add user"}
          coloring={ButtonColoring.PRIMARY}
          shape={ButtonShape.PILL}
        />
      </div>
      <div className="flex flex-col align-center items-center justify-evenly p-4">
        {!users.isLoading ? (
          users.data.map((item) => <Album key={item.id} data={item} />)
        ) : (
          <Skeleton layoutQty={6} className="h-10 w-full" />
        )}
      </div>
    </>
  );
}

export default App;
