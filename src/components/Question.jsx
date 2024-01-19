import { useEffect, useState } from "react";

const Question = ({
  question,
  dispatch,
  answer,
  timerStarted,
  totalPoints,
  earnedPoints,
  questionNo,
  numOfQuestions,
}) => {
  const hasAnswered = answer !== null;
  const [time, setTime] = useState(420);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval;
    if (timerStarted) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerStarted]);

  return (
    <div className="mt-6 space-y-3">
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
      <div className="flex flex-col gap-3 pt-4">
        {question.options.map((option, ind) => (
          <button
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: ind })}
            disabled={hasAnswered}
            className={
              hasAnswered && ind === question.correctOption
                ? "bg-blue-600"
                : "bg-red-600"
            }
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between pt-4">
        <button>{formatTime(time)}</button>
        <button onClick={() => dispatch({ type: "next" })}>Next</button>
      </div>
    </div>
  );
};

export default Question;
