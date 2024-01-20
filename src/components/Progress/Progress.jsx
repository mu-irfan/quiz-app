/* eslint-disable react/prop-types */
const Progress = ({ numOfQuestions, questionNo }) => {
  return (
    <progress
      max={numOfQuestions}
      value={questionNo}
      className="w-full"
      style={{ borderRadius: "5px" }}
    ></progress>
  );
};

export default Progress;
