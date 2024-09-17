import { useQuiz } from "../contexts/QuizContext";

function FinishedScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPossiblePoints} ({Math.round(percentage)}
        %)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishedScreen;
