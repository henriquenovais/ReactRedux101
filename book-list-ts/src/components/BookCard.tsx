import { FC } from "react";
import "../App.css";
import { Book } from "../types";

export interface IBookCard {
  book: Book;
}

const BookCard: FC<IBookCard> = ({ book }) => {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BookCard;
