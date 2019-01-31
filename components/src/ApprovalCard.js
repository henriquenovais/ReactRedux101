import React from "react";

const ApprovalCard = () => {
  return (
    <div class="ui cards">
      <div class="card">
        <div class="content">
          <div class="description">
            Elliot requested permission to view your contact details
          </div>
        </div>
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
