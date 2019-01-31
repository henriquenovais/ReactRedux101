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
  /*
  Class based components VS Function based components

  There's a lot of debate in the React community about which are the cases to use
  class based components and function based components, Stephen Grider is one of which
  chooses to use Class based components in every possible ocasion except from when it is
  necessary to display simple content --- when it comes to displaying simple content Stephen
  thinks it is better to use function based components but he does recognizes the community debate.

  Class based components are better for code organization, a single component can have multiple states
  --- this kind of component easier to handle user input --- and this kind of component can understand
  better life-cycle events. 


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
