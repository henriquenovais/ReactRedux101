import { createContext } from "react";

interface IBookContext {
  value: number;
}

const BookContext = createContext<IBookContext>({ value: 0 });

export default BookContext;
