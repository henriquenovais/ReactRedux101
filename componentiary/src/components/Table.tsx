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
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">
            {columnsConfig.map((item, index) => {
              if (item.renderHeader) {
                return item.renderHeader(item.label);
              }

              return (
                <th key={`header-${index}`} className="text-center p-3"></th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.data.map((row) => (
            <tr key={keyGenerator(row)} className="border-b">
              {columnsConfig.map((column, index) => (
                <td
                  key={`${keyGenerator(row)}-${index}`}
                  className="text-center p-3"
                >
                  {column.renderData(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
