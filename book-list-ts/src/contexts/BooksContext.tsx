import { FC, createContext, useEffect, useState } from "react";
import { Book } from "../types";
import axios from "axios";

interface IBookContext {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  update: Boolean;
  setUpdate: React.Dispatch<React.SetStateAction<Boolean>>;
  insertBook: (book: Book) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
  editBook: (id: string, newTitle: string) => Promise<void>;
}

const BASE_URL = "http://localhost:3001/books/";

const defaultValues: IBookContext = {
  books: [],
  deleteBook: async () => {},
  editBook: async () => {},
  insertBook: async () => {},
  setUpdate: () => {},
  setBooks: () => {},
  update: false,
};

const BookContext = createContext<IBookContext>({ ...defaultValues });

export default BookContext;
interface IBookProvider {
  children: JSX.Element;
}

const BookProvider: FC<IBookProvider> = ({ children }) => {
  const [books, setBooks] = useState<Array<Book>>([]);
  const [update, setUpdate] = useState<Boolean>(false);

  useEffect(() => {
    getBooks();
  }, [update]);

  const getBooks = async (): Promise<void> => {
    const response = await axios.get(BASE_URL);

    setBooks(response.data);
  };

  const insertBook = async (book: Book): Promise<void> => {
    await axios.post(BASE_URL, {
      title: book.title,
    });

    // const updatedBooks = [...books, book];

    // setBooks(updatedBooks);

    setUpdate(!update);
  };

  const deleteBook = async (id: string): Promise<void> => {
    await axios.delete(BASE_URL + id);

    // let newBooks = [];

    // for (const book of books) {
    //   if (book.id !== id) {
    //     newBooks.push(book);
    //   }
    // }

    // setBooks(newBooks);

    setUpdate(!update);
  };

  const editBook = async (id: string, newTitle: string): Promise<void> => {
    await axios.put(BASE_URL + id, {
      title: newTitle,
    });

    // const editedBooks = books.map((book) => {
    //   if (book.id === id) {
    //     return { ...book, title: newTitle };
    //   }

    //   return book;
    // });

    // setBooks(editedBooks);

    setUpdate(!update);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        deleteBook,
        editBook,
        insertBook,
        setUpdate,
        setBooks,
        update,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export { BookProvider };
