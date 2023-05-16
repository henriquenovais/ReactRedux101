import { FC, FormEvent } from "react";
import "../App.css";
import { Book } from "../types";

interface ICreateBook {
  onSubmit: (book: Book) => void;
}

const CreateBook: FC<ICreateBook> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    onSubmit();
  };
  return (
    <div className="create-book form">
      <form onSubmit={onSubmit}>
        <h1>Create Book</h1>
        <div className="create-book inputs">
          <input type="text" placeholder="Insert book title"></input>
          <button>Create Book</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
