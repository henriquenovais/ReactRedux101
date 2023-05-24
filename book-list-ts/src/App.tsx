import { FC, useState } from "react";
import "./App.css";
import CreateBook from "./components/CreateBook";
import { Book } from "./types";
import BookCard from "./components/BookCard";

const App: FC = () => {
  const [books, setBooks] = useState<Array<Book>>([]);

  const insertBook = (book: Book): void => {
    const updatedBooks = [...books, book];

    setBooks(updatedBooks);
  };

  const deleteBook = (id: string): void => {
    let newBooks = [];

    for (const book of books) {
      if (book.id !== id) {
        newBooks.push(book);
      }
    }

    setBooks(newBooks);
  };

  const editBook = (id: string, newTitle: string): void => {
    const editedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(editedBooks);
  };

  return (
    <div>
      <div>
        <CreateBook onSubmit={insertBook} />
      </div>
      <div className="app books-container">
        {books.map((book) => (
          <BookCard book={book} deleteBook={deleteBook} editBook={editBook} />
        ))}
      </div>
    </div>
  );
};

export default App;
