export interface AccordionItem {
  id: string;
  header: string;
  description: string;
}

export interface DropdownItem {
  id: string;
  label: string;
}

export interface TableColumn<T> {
  label: string;
  renderData: (input: T) => string | number | JSX.Element;
  renderHeader?: (input: string) => string | JSX.Element;
}

export interface SortableTableColumn<T> extends TableColumn<T> {
  sortData?: (inputData: TableData<T>) => TableData<T>;
}

export interface TableData<T> {
  data: Array<T>;
}
