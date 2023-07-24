import { FC } from "react";
import { Fruit } from "../types/tablePage";
import {
  SortableTableColumn,
  TableColumn,
  TableData,
} from "../types/genericComponents";
import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

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
    label: "Name",
    renderData: (fruit: Fruit) => fruit.name,
  },
  {
    label: "Color",
    renderData: (fruit: Fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
  },
  {
    label: "Deliciousness Score",
    renderData: (fruit: Fruit) => fruit.tasteScore,
  },
];

const sortableFruitHeaders: SortableTableColumn<Fruit>[] = [
  {
    label: "Name",
    renderData: (fruit: Fruit) => fruit.name,
    renderHeader: (header: string): JSX.Element => (
      <th key={header}>{header}</th>
    ),
    sortValue: (data: Fruit) => data.name,
  },
  {
    label: "Color",
    renderData: (fruit: Fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    renderHeader: (header: string): JSX.Element => (
      <th key={header} className="bg-red-600">
        {header}
      </th>
    ),
  },
  {
    label: "Deliciousness Score",
    renderData: (fruit: Fruit) => fruit.tasteScore,
    renderHeader: (header: string): JSX.Element => (
      <th key={header}>{header}</th>
    ),
    sortValue: (data: Fruit) => data.tasteScore,
  },
];

const TablePage: FC = () => {
  const keyGenerator = (fruit: Fruit): string =>
    `${fruit.name}-${fruit.color}-${fruit.tasteScore}`;

  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col items-center">
        <h3>Unsortable</h3>
        <Table<Fruit>
          columnsConfig={fruitHeaders}
          rows={fruitRows}
          keyGenerator={keyGenerator}
        />
      </div>
      <div className="flex flex-col items-center">
        <h3>Sortable</h3>
        <SortableTable<Fruit>
          sortableColumnConfig={sortableFruitHeaders}
          rows={fruitRows}
          keyGenerator={keyGenerator}
        />
      </div>
    </div>
  );
};

export default TablePage;
