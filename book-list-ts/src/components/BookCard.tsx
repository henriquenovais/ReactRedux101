import { FC } from "react";
import "../App.css";
import { Book } from "../types";

export interface IBookCard {
  book: Book;
}

const BookCard: FC<IBookCard> = ({ book }) => {
  return (
    <div className="book-card card">
      <div className="book-card button-row">
        <button className="book-card button">Edit</button>
        <button className="book-card button">Close</button>
      </div>
      <div className="book-card content">{book.title}</div>
    </div>
  );
};

export default BookCard;
