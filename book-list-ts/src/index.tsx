import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BookProvider } from "./contexts/BooksContext";

ReactDOM.render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
