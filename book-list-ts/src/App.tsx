import { FC, useContext, useEffect, useState } from "react";
import "./App.css";
import CreateBook from "./components/CreateBook";
import { Book } from "./types";
import BookCard from "./components/BookCard";
import axios from "axios";
import BookContext from "./contexts/BooksContext";

const BASE_URL = "http://localhost:3001/books/";

const App: FC = () => {
  const context = useContext(BookContext);

  const [books, setBooks] = useState<Array<Book>>([]);
  const [update, setUpdate] = useState<Boolean>(false);

  const getBooks = async (): Promise<void> => {
    const response = await axios.get(BASE_URL);

    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, [update]);

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
    <div>
      <div>
        <CreateBook onSubmit={insertBook} />
      </div>
      <div className="app books-container">
        {context.value}
        {books.map((book) => (
          <BookCard book={book} deleteBook={deleteBook} editBook={editBook} />
        ))}
      </div>
    </div>
  );
};

export default App;
