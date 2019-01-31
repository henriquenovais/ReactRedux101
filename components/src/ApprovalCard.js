import React from "react";

const ApprovalCard = props => {
  /*
    The ApprovalCard component receives information from the props(short for Properties) system in
    React and since the information is inside the props variable(a JS variable) it is necessary the use
    of {} to access this information in JSX.
  */

  return (
    <div class="ui cards">
      <div class="card">
        <div class="content">{props.children}</div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Approve</div>
            <div class="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
