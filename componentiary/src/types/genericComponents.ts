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
  header: string | JSX.Element;
  renderData: (input: T) => string | number | JSX.Element;
}

export interface SortableTableColumn<T> extends TableColumn<T> {
  renderHeader?: (input: string | JSX.Element) => string | JSX.Element;
  sortData?: (inputData: TableData<T>) => TableData<T>;
}

export interface TableData<T> {
  data: Array<T>;
}
