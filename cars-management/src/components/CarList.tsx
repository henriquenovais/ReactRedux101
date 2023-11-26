import { FC } from "react";
import { Car } from "../types";

interface ICarList {
  data: Car[];
}

const CarList: FC<ICarList> = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      {data.map((current) => {
        return (
          <div
            key={current.id}
            className="w-full flex flex-row gap-y-3 gap-x-12 items-center justify-center"
          >
            <span>{current.name}</span> <span>${current.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CarList;
