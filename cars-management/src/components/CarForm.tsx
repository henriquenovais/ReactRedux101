import { FC } from "react";

const CarForm: FC = () => {
  return (
    <form className="flex flex-row gap-3 items-center">
      <label>Name:</label>
      <input type="text"/>
      <label>Price:</label>
      <input type="number"></input>
      <button>Submit</button>
    </form>
  );
};

export default CarForm;
