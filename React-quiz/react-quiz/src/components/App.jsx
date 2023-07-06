import { useEffect, useReducer } from "react";

import Header from "./Header";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Loader from "./Loader";
import Error from "./Error";
import MainSection from "./MainSection";

const initialState = {
  questions: [],
  // 'loading' , 'error' , 'ready' , 'active' , 'finished'S
  status: "loading",
  index: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataError":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
      };

    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch(`http://localhost:3000/questions`);
        const data = await res.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch (err) {
        dispatch({ type: "dataError" });
      }
    }
    getQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <MainSection>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={questions[index]} />}
      </MainSection>
    </div>
  );
}

export default App;
