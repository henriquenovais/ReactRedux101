import { SortableTableColumn, TableData } from "../types/genericComponents";

interface ISortableTable<T> {
  keyGenerator: (element: T) => string;
  sortableColumnConfig: SortableTableColumn<T>[];
  rows: TableData<T>;
}

function SortableTable<T>({
  sortableColumnConfig,
  rows,
  keyGenerator,
}: ISortableTable<T>): JSX.Element {
  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">
            {sortableColumnConfig.map((item, index) => {
              if (item.renderHeader) {
                return item.renderHeader(item.label);
              }

              return (
                <th key={`header-${index}`} className="text-center p-3">
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.data.map((row) => (
            <tr key={keyGenerator(row)} className="border-b">
              {sortableColumnConfig.map((column, index) => (
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

export default SortableTable;
