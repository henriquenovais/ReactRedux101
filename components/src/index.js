import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
//https://github.com/Marak/faker.js
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  /*
  It is by pushing one component inside another component that the child component will
  have its information passed to the parent component. In this example the <CommentDetail/>
  information will be passed on to the ApprovalCard component in the object props.children.

  When in doubt about which part of the props is receiving the information, just do a 
  console.log(props); in order to sort out how the information is being passed through.
  */

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 4:00AM"
          avatar={faker.image.avatar()}
          text="That was a great comment!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="15 hours ago"
          avatar={faker.image.avatar()}
          text="Wow, you are so smart!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="2 days ago"
          avatar={faker.image.avatar()}
          text="What is your basis for such alegations? Terrible"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
