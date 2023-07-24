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
}

export interface SortableTableColumn<T> extends TableColumn<T> {
  renderHeader: (input: string) => string | JSX.Element;
  sortValue?: (inputData: T) => number | string;
}

export interface TableData<T> {
  data: Array<T>;
}
