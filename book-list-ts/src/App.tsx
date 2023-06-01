import { FC, useContext, useEffect, useState } from "react";
import "./App.css";
import CreateBook from "./components/CreateBook";
import { Book } from "./types";
import BookCard from "./components/BookCard";
import axios from "axios";
import BookContext from "./contexts/BooksContext";

const App: FC = () => {
  const context = useContext(BookContext);

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
