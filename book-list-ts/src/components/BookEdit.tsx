import { ChangeEvent, FC, FormEvent, useState, MouseEvent } from "react";
import "../App.css";
import { Book } from "../types";

interface IBookEdit {
  onSave: (id: string, title: string) => void;
  book: Book;
}

const BookEdit: FC<IBookEdit> = ({ onSave, book }) => {
  const [newTitle, setNewTitle] = useState(book.title);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setNewTitle(event.target.value);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    onSave(book.id, newTitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onChange} value={newTitle} />
      <button onClick={handleSubmit}>Save</button>
    </form>
  );
};

export default BookEdit;
