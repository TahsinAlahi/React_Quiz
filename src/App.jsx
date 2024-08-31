import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const initState = {
  questions: [],

  //'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    async function dataFetch() {
      try {
        const res = await fetch("http://localhost:800/questions");
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
    <div className="app">
      <Header />
      <Main>{}</Main>
    </div>
  );
}

export default App;
