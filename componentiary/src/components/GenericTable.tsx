import { TableColumn, TableData } from "../types/genericComponents";

interface IGenericTable<T> {
  columnsConfig: TableColumn<T>[];
  rows: TableData<T>[];
}

export function GenericTable<T>({
  columnsConfig,
  rows,
}: IGenericTable<T>): JSX.Element {
  return <></>;
}

export default GenericTable;
