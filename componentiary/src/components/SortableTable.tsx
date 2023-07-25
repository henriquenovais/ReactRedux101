import { useState, MouseEvent } from "react";
import { SortableTableColumn } from "../types/genericComponents";

interface ISortableTable<T> {
  keyGenerator: (element: T) => string;
  sortableColumnConfig: SortableTableColumn<T>[];
  rows: Array<T>;
}

function SortableTable<T>({
  sortableColumnConfig,
  rows,
  keyGenerator,
}: ISortableTable<T>): JSX.Element {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortedOrder, setSortedOrder] = useState<"asc" | "desc" | null>(null);

  const handleHeaderClick = (event: MouseEvent, columnLabel: string) => {
    event.preventDefault();
    event.stopPropagation();

    if (sortedColumn !== columnLabel) {
      setSortedOrder(null);
      setSortedColumn(columnLabel);
    } else {
      switch (sortedOrder) {
        case null:
          setSortedOrder("asc");
          setSortedColumn(columnLabel);
          break;
        case "asc":
          setSortedOrder("desc");
          setSortedColumn(columnLabel);
          break;
        case "desc":
          setSortedOrder(null);
          setSortedColumn(null);
          break;
      }
    }
  };

  let data = [...rows];
  if (sortedColumn && sortedOrder) {
    const column = sortableColumnConfig.find(
      (column) => column.label === sortedColumn
    );

    if (column && column.sortValue) {
      data.sort((a, b) => {
        const A = column.sortValue!(a);
        const B = column.sortValue!(b);

        const order = sortedOrder === "asc" ? 1 : -1;

        if (typeof A === "string") {
          return A.localeCompare(B as string) * order;
        } else {
          return ((A as number) - (B as number)) * order;
        }
      });
    }
  }

  return (
    <div>
      <span>
        Column: {sortedColumn} - Order: {sortedOrder}
      </span>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">
            {sortableColumnConfig.map((item, index) => {
              return (
                <th
                  key={`header-${index}`}
                  onClick={(e) => handleHeaderClick(e, item.label)}
                  className="text-center p-3"
                >
                  {item.renderHeader
                    ? item.renderHeader(item.label)
                    : item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
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
