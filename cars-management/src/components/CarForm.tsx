import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertCar } from "../store";
import { FormState } from "../store/slices/formSlice";
import { nanoid } from "@reduxjs/toolkit";

const CarForm: FC = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: FormState) => {
    return {
      name: state.name,
      price: state.price,
    };
  });

  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(insertCar({ id: nanoid(), name: form.name, price: form.price }));
  };

  return (
    <div>
      <form
        onSubmit={(event) => {}}
        className="flex flex-wrap flex-row gap-3 items-center"
      >
        <label>Name:</label>
        <input type="text" />
        <label>Price:</label>
        <input type="number"></input>
        <button onClick={(event) => {}}>Submit</button>
      </form>
    </div>
  );
};

export default CarForm;
