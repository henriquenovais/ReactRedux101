import { FC, useContext } from "react";
import "./App.css";
import CreateBook from "./components/CreateBook";
import BookCard from "./components/BookCard";
import { BookContext } from "./contexts/BooksContext";

const App: FC = () => {
  const bookContext = useContext(BookContext);

  return (
    <div>
      <div>
        <CreateBook />
      </div>
      <div className="app books-container">
        {bookContext.books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;
