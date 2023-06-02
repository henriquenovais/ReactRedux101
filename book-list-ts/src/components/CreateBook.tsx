import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import "../App.css";
import { Book } from "../types";
import { BookContext } from "../contexts/BooksContext";

interface ICreateBook {
  onSubmit: (book: Book) => void;
}

const CreateBook: FC<ICreateBook> = ({ onSubmit }) => {
  const bookContext = useContext(BookContext);
  const [newTitle, setNewTitle] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const newBook: Book = {
      id: Math.round(Math.random() * 100000).toString(),
      title: newTitle,
    };

    //onSubmit(newBook);
    bookContext.insertBook(newBook);

    setNewTitle("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setNewTitle(event.target.value);
  };

  return (
    <div className="create-book form">
      <form onSubmit={handleSubmit}>
        <h1>Create Book</h1>
        <div className="create-book inputs">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Insert book title"
            value={newTitle}
          ></input>
          <button>Create Book</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
