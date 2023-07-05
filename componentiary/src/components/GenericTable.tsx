import { TableColumn, TableData } from "../types/genericComponents";

interface IGenericTable<T> {
  keyGenerator: (element: T) => string;
  columnsConfig: TableColumn<T>[];
  rows: TableData<T>;
}

export function GenericTable<T>({
  columnsConfig,
  rows,
  keyGenerator,
}: IGenericTable<T>): JSX.Element {
  return (
    <table className="table-auto gap-2">
      <thead>
        {columnsConfig.map((item) => (
          <th>{item.headerName}</th>
        ))}
      </thead>
      <tbody>
        {rows.data.map((row) => (
          <tr key={keyGenerator(row)}>
            {columnsConfig.map((column) => (
              <td>{column.renderData(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GenericTable;
