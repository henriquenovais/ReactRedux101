import { FC, MouseEvent, useState } from "react";
import "../App.css";
import { Book } from "../types";
import BookEdit from "./BookEdit";

export interface IBookCard {
  book: Book;
  deleteBook: (id: string) => void;
  editBook: (id: string, newTitle: string) => void;
}

const BookCard: FC<IBookCard> = ({ book, deleteBook, editBook }) => {
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

  const handleEditSave = (id: string, newTitle: string) => {
    editBook(id, newTitle);
    setEnableEditMode(false);
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
          <BookEdit book={book} onSave={handleEditSave} />
        ) : (
          <span className="book-card title">{book.title}</span>
        )}
      </div>
    </div>
  );
};

export default BookCard;
