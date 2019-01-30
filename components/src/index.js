import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
//https://github.com/Marak/faker.js
import CommentDetail from "./CommentDetail";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 4:00AM"
        avatar={faker.image.avatar()}
        text="That was a great comment!"
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="15 hours ago"
        avatar={faker.image.avatar()}
        text="Wow, you are so smart!"
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="2 days ago"
        avatar={faker.image.avatar()}
        text="What is your basis for such alegations? Terrible"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
