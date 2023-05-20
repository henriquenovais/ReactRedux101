import { ChangeEvent, FC, FormEvent, useState, MouseEvent } from "react";
import "../App.css";

interface IBookEdit {
  onSave: (title: string) => void;
  currentTitle: string;
}

const BookEdit: FC<IBookEdit> = ({ onSave, currentTitle }) => {
  const [newTitle, setNewTitle] = useState(currentTitle);

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

    onSave(newTitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onChange} value={newTitle} />
      <button onClick={handleSubmit}>Save</button>
    </form>
  );
};

export default BookEdit;
