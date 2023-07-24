import {
  SortableTableColumn,
  TableColumn,
  TableData,
} from "../types/genericComponents";
import Table from "../components/Table";

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
  const tableColumn: TableColumn<T>[] = sortableColumnConfig.map(
    (sortableConfig) => ({
      label: sortableConfig.label,
      renderData: sortableConfig.renderData,
      renderHeader: sortableConfig.renderHeader,
    })
  );

  return (
    <Table<T>
      columnsConfig={tableColumn}
      rows={rows}
      keyGenerator={keyGenerator}
    />
  );
}

export default SortableTable;
