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

  return (
    <div>
      <CreateBook onSubmit={insertBook} />
      {books.map((book) => (
        <BookCard book={book} />
      ))}
    </div>
  );
};

export default App;
