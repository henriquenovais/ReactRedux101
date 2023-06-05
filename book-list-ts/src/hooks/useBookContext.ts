import { useContext } from "react";
import BookContext, { IBookContext } from "../contexts/BooksContext";

const useBooksContext = (): IBookContext => {
  return useContext(BookContext);
};

export default useBooksContext;
