import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateSearchTerm } from "../store";

const CarSearch: FC = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.cars);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(updateSearchTerm(event.target.value));
  };

  return (
    <div className="w-full flex flex-wrap flex-row items-center justify-between">
      <h1>My Cars</h1>
      <div className="flex flex-row gap-3">
        <label>Search:</label>
        <input
          type="text"
          value={cars.searchTerm}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
    </div>
  );
};

export default CarSearch;
