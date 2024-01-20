import Button from "../Button/Button";

/* eslint-disable react/prop-types */
const Options = ({ question, dispatch, hasAnswered }) => {
  return (
    <div className="flex flex-col gap-3 pt-4">
      {question.options.map((option, ind) => (
        <Button
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
        </Button>
      ))}
    </div>
  );
};

export default Options;
