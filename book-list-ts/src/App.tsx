import { FC } from "react";
import "./App.css";
import CreateBook from "./components/CreateBook";
import BookCard from "./components/BookCard";
import useBooksContext from "./hooks/useBookContext";

const App: FC = () => {
  const { books } = useBooksContext();

  return (
    <div>
      <div>
        <CreateBook />
      </div>
      <div className="app books-container">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;
