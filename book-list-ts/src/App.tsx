import { FC, useState } from "react";
import "./App.css";
import CreateBook from "./components/CreateBook";
import { Book } from "./types";
import BookCard from "./components/BookCard";

const App: FC = () => {
  const [books, setBooks] = useState<Array<Book>>([]);

  const insertBook = (book: Book) => {
    const updatedBooks = [...books, book];

    setBooks(updatedBooks);
  };

  const deleteBook = (id: string) => {
    let newBooks = [];

    for (const book of books) {
      if (book.id !== id) {
        newBooks.push(book);
      }
    }

    setBooks(newBooks);
  };

  return (
    <div>
      <div>
        <CreateBook onSubmit={insertBook} />
      </div>
      <div className="app books-container">
        {books.map((book) => (
          <BookCard book={book} deleteBook={deleteBook} />
        ))}
      </div>
    </div>
  );
};

export default App;
