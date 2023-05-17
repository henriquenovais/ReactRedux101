import { FC } from "react";
import "../App.css";
import { Book } from "../types";

export interface IBookCard {
  book: Book;
}

const BookCard: FC<IBookCard> = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
    </div>
  );
};

export default BookCard;
