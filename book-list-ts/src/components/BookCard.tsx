import { FC } from "react";
import "../App.css";
import { Book } from "../types";

export interface IBookCard {
  book: Book;
}

const BookCard: FC<IBookCard> = ({ book }) => {
  return (
    <div className="book-card card">
      <h3>{book.title}</h3>
      <button className="book-card button">Edit</button>
      <button className="book-card button">Close</button>
    </div>
  );
};

export default BookCard;
