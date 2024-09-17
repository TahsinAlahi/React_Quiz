import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return;

  if (index + 1 < numQuestions) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "newQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index + 1 === numQuestions) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
