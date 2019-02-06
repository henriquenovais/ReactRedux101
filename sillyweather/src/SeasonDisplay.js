import React from "react";

const getSeason = (lat, month) => {
  if (month > 3 && month < 9) {
    return lat > 0 ? "monsoon" : "dryseason";
  } else {
    return lat < 0 ? "dry season" : "monsoon";
  }
};

const SeasonDisplay = props => {
  const month = new Date().getMonth();
  const season = getSeason(props.lat, month);
  const text =
    season === "monsoon"
      ? "Burr, it is wet and chilly"
      : "Wow, it is so hot and dry!";
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
