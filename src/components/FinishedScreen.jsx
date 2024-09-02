import React from "react";

function FinishedScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You scored {points} out of {maxPossiblePoints} ({Math.round(percentage)}%)
    </p>
  );
}

export default FinishedScreen;
