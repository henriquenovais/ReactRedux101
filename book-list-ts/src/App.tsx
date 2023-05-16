import { FC, useState } from "react";
import "./App.css";
import CreateBook from "./components/CreateBook";
import { Book } from "./types";

const App: FC = () => {
  const [books, setBooks] = useState<Array<Book>>([]);

  return (
    <div>
      <CreateBook handleSubmit={setBooks} />
    </div>
  );
};

export default App;
