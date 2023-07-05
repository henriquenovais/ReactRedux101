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

export default GenericTable;
