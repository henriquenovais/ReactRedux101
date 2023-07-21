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
  header: string | number | JSX.Element;
  renderData: (input: T) => string | number | JSX.Element;
}

export interface SortableTableColumn<T> extends TableColumn<T> {
  renderHeader?: (
    input: string | number | JSX.Element
  ) => string | number | JSX.Element;
  sortData?: (inputData: TableData<T>) => TableData<T>;
}

export interface TableData<T> {
  data: Array<T>;
}
