import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BookContext from "./contexts/BooksContext";

ReactDOM.render(
  <React.StrictMode>
    <BookContext.Provider value={{ value: 5 }}>
      <App />
    </BookContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
