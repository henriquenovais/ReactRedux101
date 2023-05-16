import { FC } from "react";
import "../App.css";

const CreateBook: FC = () => {
  return (
    <div className="create-book form">
      <form>
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
