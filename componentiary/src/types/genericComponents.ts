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
}

export interface TableData<T> {
  data: Array<T>;
}
