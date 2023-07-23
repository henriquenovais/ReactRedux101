import { FC, Fragment } from "react";
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

const sortableFruitHeaders: SortableTableColumn<Fruit>[] = [
  {
    header: "Name",
    renderData: (fruit: Fruit) => fruit.name,
    renderHeader: (header: string | JSX.Element) => (
      <Fragment key={JSON.stringify(header)}>{header}</Fragment>
    ),
  },
  {
    header: "Color",
    renderData: (fruit: Fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    renderHeader: (header: string | JSX.Element) => (
      <Fragment key={JSON.stringify(header)}>{header}</Fragment>
    ),
  },
  {
    header: "Deliciousness Score",
    renderData: (fruit: Fruit) => fruit.tasteScore,
    renderHeader: (header: string | JSX.Element) => (
      <Fragment key={JSON.stringify(header)}>{header}</Fragment>
    ),
  },
];

const TablePage: FC = () => {
  const keyGenerator = (fruit: Fruit): string =>
    `${fruit.name}-${fruit.color}-${fruit.tasteScore}`;

  return (
    <div>
      <Table<Fruit>
        columnsConfig={fruitHeaders}
        rows={fruitRows}
        keyGenerator={keyGenerator}
      />
      <SortableTable<Fruit>
        sortableColumnConfig={sortableFruitHeaders}
        rows={fruitRows}
        keyGenerator={keyGenerator}
      />
    </div>
  );
};

export default TablePage;
