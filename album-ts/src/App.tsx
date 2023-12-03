import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { useEffect } from "react";
import { fetchUsers } from "./store/thunks/fetchUsers";
import Button from "./components/Button";
import { ButtonColoring, ButtonShape } from "./constants/enums/button";
import Album from "./components/User";

function App() {
  const dispatch = useAppDispatch();
  const users = useSelector((state: RootState) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log("users.data >>>>>>>>>>>>>>", users.data);

  return (
    <>
      <div className="flex flex-row align-center items-center justify-evenly p-4">
        <h1>Users </h1>
        <Button
          text={"Add user"}
          coloring={ButtonColoring.PRIMARY}
          shape={ButtonShape.PILL}
        />
      </div>
      <div className="flex flex-col align-center items-center justify-evenly p-4">
        {!users.isLoading ? (
          users.data.map((item) => <Album data={item} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default App;
