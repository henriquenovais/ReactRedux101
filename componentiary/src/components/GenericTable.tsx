import { TableColumn, TableData } from "../types/genericComponents";

interface IGenericTable<T> {
  columnConfigs: TableColumn<T>[];
  rows: TableData<T>[];
}

function GenericTable<T extends unknown>(props: IGenericTable<T>) {
  return <></>;
}

export default GenericTable;
