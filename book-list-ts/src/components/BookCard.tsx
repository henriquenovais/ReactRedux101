import { FC, MouseEvent, useContext, useState } from "react";
import "../App.css";
import { Book } from "../types";
import BookEdit from "./BookEdit";
import { BookContext } from "../contexts/BooksContext";

export interface IBookCard {
  book: Book;
}

const BookCard: FC<IBookCard> = ({ book }) => {
  const bookContext = useContext(BookContext);
  const [enableEditMode, setEnableEditMode] = useState<boolean>(false);

  const handleEditClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    setEnableEditMode(true);
  };

  const handleCloseClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    //deleteBook(book.id);
    bookContext.deleteBook(book.id);
  };

  return (
    <div className="book-card card">
      <div className="book-card button-row">
        <button className="book-card button" onClick={handleEditClick}>
          Edit
        </button>
        <button className="book-card button" onClick={handleCloseClick}>
          Close
        </button>
      </div>
      <div className="book-card content">
        <img alt="book" src={`https://picsum.photos/seed/${book.id}/246/300`} />
        {enableEditMode ? (
          <BookEdit
            book={book}
            handleEditMode={() => setEnableEditMode(false)}
          />
        ) : (
          <span className="book-card title">{book.title}</span>
        )}
      </div>
    </div>
  );
};

export default BookCard;
