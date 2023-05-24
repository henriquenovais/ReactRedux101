import { FC, MouseEvent, useState } from "react";
import "../App.css";
import { Book } from "../types";
import BookEdit from "./BookEdit";

export interface IBookCard {
  book: Book;
  deleteBook: (id: string) => void;
}

const BookCard: FC<IBookCard> = ({ book, deleteBook }) => {
  const [enableEditMode, setEnableEditMode] = useState<boolean>(false);

  const handleEditClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setEnableEditMode(true);
  };

  const handleCloseClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    deleteBook(book.id);
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
        {enableEditMode ? (
          <BookEdit
            currentTitle={book.title}
            onSave={() => {
              setEnableEditMode(false);
            }}
          />
        ) : (
          book.title
        )}
      </div>
    </div>
  );
};

export default BookCard;
