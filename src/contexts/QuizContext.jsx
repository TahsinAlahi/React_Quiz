import { createContext, useContext, useEffect } from "react";
import useGameState from "../hooks/useGameState";

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useGameState();

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(() => {
    async function dataFetch() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();

        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
        console.log(err);
      }
    }
    dataFetch();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("useQuiz is used outside of QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
