import { TableColumn, TableData } from "../types/genericComponents";

interface ITable<T> {
  keyGenerator: (element: T) => string;
  columnsConfig: TableColumn<T>[];
  rows: TableData<T>;
}

function Table<T>({
  columnsConfig,
  rows,
  keyGenerator,
}: ITable<T>): JSX.Element {
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {columnsConfig.map((item) => (
            <th className="text-center p-3">{item.headerName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.data.map((row) => (
          <tr key={keyGenerator(row)} className="border-b">
            {columnsConfig.map((column) => (
              <td className="text-center p-3">{column.renderData(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
