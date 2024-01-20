import { useReducer } from "react";
import "./App.css";
import Question from "./components/Question";
import Splash from "./components/SplashScreen/Splash";
import Errors from "./components/Error/Errors";
import Loading from "./components/Loading/Loading";
import useFetch from "./hooks/useFetch";
import Result from "./components/Result/Result";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  points: 0,
  answer: null,
  timerStarted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, status: "ready", questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      // eslint-disable-next-line no-case-declarations
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "startTimer":
      return { ...state, timerStarted: true };
    case "next":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return { ...state, status: "finished" };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    default:
      return new Error("Invalid");
  }
};

function App() {
  const [{ questions, status, index, answer, points, timerStarted }, dispatch] =
    useReducer(reducer, initialState);

  const totalPoints = questions.reduce(
    (acc, currQuestion) => acc + currQuestion.points,
    0
  );

  const numOfQuestions = questions.length;
  const testFinished = index === numOfQuestions - 1;

  useFetch(dispatch);

  return (
    <>
      <header>
        <h1 className="pt-6 text-3xl">The React Quiz🧑🏻‍💻</h1>
        <hr />
        {status === "loading" && <Loading />}
        {status === "error" && <Errors />}
        {status === "ready" && (
          <Splash dispatch={dispatch} numOfQuestions={numOfQuestions} />
        )}
      </header>
      <main>
        {status === "active" && (
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
            timerStarted={timerStarted}
            totalPoints={totalPoints}
            earnedPoints={points}
            questionNo={index}
            numOfQuestions={numOfQuestions}
            testFinished={testFinished}
          />
        )}
        {status === "finished" && (
          <Result earnedPoints={points} dispatch={dispatch} />
        )}
      </main>
    </>
  );
}

export default App;
