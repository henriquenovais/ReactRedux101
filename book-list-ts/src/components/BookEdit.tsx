import {
  ChangeEvent,
  FC,
  FormEvent,
  useState,
  MouseEvent,
  useContext,
} from "react";
import "../App.css";
import { Book } from "../types";
import { BookContext } from "../contexts/BooksContext";

interface IBookEdit {
  book: Book;
}

const BookEdit: FC<IBookEdit> = ({ book }) => {
  const bookContext = useContext(BookContext);
  const [editedTitle, setEditedTitle] = useState(book.title);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setEditedTitle(event.target.value);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    //onSave(book.id, newTitle);
    bookContext.editBook(book.id, editedTitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onChange} value={editedTitle} />
      <button onClick={handleSubmit}>Save</button>
    </form>
  );
};

export default BookEdit;
