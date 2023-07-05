import { FC } from "react";
import { Fruit } from "../types/tablePage";
import { TableColumn, TableData } from "../types/genericComponents";
import GenericTable from "../components/GenericTable";

const fruitList: Fruit[] = [
  { color: "bg-yellow-300", name: "Pineapple", tasteScore: 5 },
  { color: "bg-red-500", name: "Apple", tasteScore: 7 },
  { color: "bg-yellow-500", name: "Mango", tasteScore: 9 },
];

const fruitRows: TableData<Fruit> = {
  data: fruitList,
};

const fruitHeaders: TableColumn<Fruit>[] = [
  {
    headerName: "Name",
    renderData: (fruit: Fruit) => fruit.name,
  },
  {
    headerName: "Color",
    renderData: (fruit: Fruit) => <div className={`w-5 h-5 ${fruit.color}`} />,
  },
  {
    headerName: "Deliciousness Score",
    renderData: (fruit: Fruit) => fruit.tasteScore,
  },
];

const TablePage: FC = () => {
  const keyGenerator = (fruit: Fruit): string =>
    `${fruit.name}-${fruit.color}-${fruit.tasteScore}`;

  return (
    <div>
      <GenericTable
        columnsConfig={fruitHeaders}
        rows={fruitRows}
        keyGenerator={keyGenerator}
      />
    </div>
  );
};

export default TablePage;
