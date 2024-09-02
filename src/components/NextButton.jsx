import React from "react";

function NextButton({ dispatch, answer }) {
  return (
    answer !== null && (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "newQuestion" })}
      >
        Next
      </button>
    )
  );
}

export default NextButton;
