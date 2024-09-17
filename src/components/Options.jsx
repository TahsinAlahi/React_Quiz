import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions[index];
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswered
              ? question.correctOption === index
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
