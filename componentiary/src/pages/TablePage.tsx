import { FC } from "react";
import { Fruit } from "../types/tablePage";
import { TableColumn, TableData } from "../types/genericComponents";
import Table from "../components/Table";

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
    header: "Name",
    renderData: (fruit: Fruit) => fruit.name,
  },
  {
    header: "Color",
    renderData: (fruit: Fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
  },
  {
    header: "Deliciousness Score",
    renderData: (fruit: Fruit) => fruit.tasteScore,
  },
];

const TablePage: FC = () => {
  const keyGenerator = (fruit: Fruit): string =>
    `${fruit.name}-${fruit.color}-${fruit.tasteScore}`;

  return (
    <div>
      <Table
        columnsConfig={fruitHeaders}
        rows={fruitRows}
        keyGenerator={keyGenerator}
      />
    </div>
  );
};

export default TablePage;
