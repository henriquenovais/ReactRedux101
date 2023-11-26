import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, insertCar, updateName, updatePrice } from "../store";
import { nanoid } from "@reduxjs/toolkit";

const CarForm: FC = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(insertCar({ id: nanoid(), name: form.name, price: form.price }));
  };

  const handleOnChangeTextInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(updateName(event.target.value));
  };

  const handleOnChangeNumberInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(updatePrice(event.target.value));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-wrap flex-row gap-3 items-center"
      >
        <label>Name:</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleOnChangeTextInput(e)}
        />
        <label>Price:</label>
        <input
          type="number"
          value={isNaN(form.price) ? "" : form.price}
          onChange={(e) => handleOnChangeNumberInput(e)}
        ></input>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CarForm;
