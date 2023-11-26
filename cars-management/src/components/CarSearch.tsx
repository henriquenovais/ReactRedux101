import { FC } from "react";

const CarSearch: FC = () => {
  return (
    <div className="w-full flex flex-wrap flex-row items-center justify-between">
      <h1>My Cars</h1>
      <div className="flex flex-row gap-3">
        <label>Search:</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default CarSearch;
