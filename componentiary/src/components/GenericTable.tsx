import { TableColumn, TableData } from "../types/genericComponents";

interface IGenericTable<T> {
  keyGenerator: (element: T) => string;
  columnsConfig: TableColumn<T>[];
  rows: TableData<T>;
}

export function GenericTable<T>({
  columnsConfig,
  rows,
}: IGenericTable<T>): JSX.Element {
  return (
    <table>
      <thead>
        {columnsConfig.map((item) => (
          <th>{item.headerName}</th>
        ))}
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default GenericTable;
