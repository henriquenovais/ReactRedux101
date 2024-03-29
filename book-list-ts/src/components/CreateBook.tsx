import { ChangeEvent, FC, FormEvent, useState } from "react";
import "../App.css";
import { Book } from "../types";
import useBooksContext from "../hooks/useBookContext";

const CreateBook: FC = () => {
  const { insertBook } = useBooksContext();
  const [newTitle, setNewTitle] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const newBook: Book = {
      id: Math.round(Math.random() * 100000).toString(),
      title: newTitle,
    };

    //onSubmit(newBook);
    insertBook(newBook);

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
