/* eslint-disable react/prop-types */
import Options from "./Options/Options";
import Button from "./Button/Button";
import Progress from "./Progress/Progress";
import Footer from "./Footer/Footer";
import Timer from "./Timer/Timer";

const Question = ({
  question,
  dispatch,
  answer,
  timerStarted,
  totalPoints,
  earnedPoints,
  questionNo,
  numOfQuestions,
  testFinished,
}) => {
  const hasAnswered = answer !== null;

  return (
    <div className="mt-6 space-y-3">
      <Progress numOfQuestions={numOfQuestions} questionNo={questionNo} />
      <div className="flex justify-between">
        <h1 className="text-xl text-left">
          Question {++questionNo} of {numOfQuestions}
        </h1>
        <h1 className="text-xl text-left">
          {earnedPoints} / {totalPoints}
        </h1>
      </div>
      <hr />
      <h3>{question.question}</h3>
      <Options
        question={question}
        dispatch={dispatch}
        hasAnswered={hasAnswered}
      />
      <Footer>
        <Timer dispatch={dispatch} timerStarted={timerStarted} />
        {answer !== null && (
          <Button
            onClick={() =>
              testFinished
                ? dispatch({ type: "finished" })
                : dispatch({ type: "next" })
            }
          >
            {testFinished ? "Finish" : "Next"}
          </Button>
        )}
      </Footer>
    </div>
  );
};

export default Question;
