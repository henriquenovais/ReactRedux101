import { useState, MouseEvent } from "react";
import { SortableTableColumn } from "../types/genericComponents";
import { HiSortAscending, HiSortDescending, HiMenuAlt1 } from "react-icons/hi";
import { classNamer } from "../utils/Strings";

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

  const getSortIcon = (
    columnLabel: string,
    sortedColumn: string | null,
    sortedOrder: "asc" | "desc" | null
  ): JSX.Element => {
    if (columnLabel === sortedColumn) {
      if (sortedOrder === "asc") {
        return <HiSortDescending />;
      } else if (sortedOrder === "desc") {
        return <HiSortAscending />;
      } else {
        return <HiMenuAlt1 />;
      }
    }

    return <HiMenuAlt1 />;
  };

  const handleHeaderClick = (event: MouseEvent, columnLabel: string) => {
    event.preventDefault();
    event.stopPropagation();

    if (sortedColumn !== columnLabel) {
      setSortedOrder("asc");
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
          setSortedColumn(columnLabel);
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
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">
            {sortableColumnConfig.map((item, index) => {
              return (
                <th
                  key={`header-${index}`}
                  onClick={(e) => handleHeaderClick(e, item.label)}
                  className={classNamer(
                    { "cursor-pointer": !!item.sortValue },
                    "inline-flex items-center gap-x-1.5 text-center p-3"
                  )}
                >
                  {item.renderHeader
                    ? item.renderHeader(item.label)
                    : item.label}
                  {item.sortValue &&
                    getSortIcon(item.label, sortedColumn, sortedOrder)}
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
