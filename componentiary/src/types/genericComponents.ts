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
  headerName: string;
  renderData: (input: T) => string | number | JSX.Element;
  keyGenerator: (input: T) => string;
}

export interface TableData<T> {
  data: Array<T>;
}
