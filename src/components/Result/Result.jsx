/* eslint-disable react/prop-types */
import Button from "../Button/Button";

const Result = ({ earnedPoints, dispatch }) => {
  return (
    <div className="mt-10">
      You earned {earnedPoints} Points
      <h1 className="text-lg">
        {earnedPoints < 150 ? "You Failed" : "Congrats, You Passed👑"}
      </h1>
      <Button onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </Button>
    </div>
  );
};

export default Result;
