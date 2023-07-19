import { FC } from "react";
import { Fruit } from "../types/tablePage";
import {
  SortableTableColumn,
  TableColumn,
  TableData,
} from "../types/genericComponents";
import Table from "../components/Table";

interface ISortableTable<T> {
  keyGenerator: (element: T) => string;
  sortableColumnConfig: SortableTableColumn<T>;
  rows: TableData<T>;
}

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
    renderData: (fruit: Fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
  },
  {
    headerName: "Deliciousness Score",
    renderData: (fruit: Fruit) => fruit.tasteScore,
  },
];

function SortableTable<T>({
  sortableColumnConfig,
  rows,
  keyGenerator,
}: ISortableTable<T>): JSX.Element {
  return (
    <div>
      <Table
        columnsConfig={fruitHeaders}
        rows={fruitRows}
        keyGenerator={keyGenerator}
      />
    </div>
  );
}

export default SortableTable;
