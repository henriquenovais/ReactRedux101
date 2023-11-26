import { FC } from "react";

const CarForm: FC = () => {
  return (
    <div>
    <form className="w-full flex flex-row gap-3 items-center">
      <label>Name:</label>
      <input type="text"/>
      <label>Price:</label>
      <input type="number"></input>
      <button>Submit</button>
    </form>
    </div>
  );
};

export default CarForm;
