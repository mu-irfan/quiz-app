const Result = ({ earnedPoints }) => {
  return (
    <div className="mt-10">
      You earned {earnedPoints} Points
      <h1 className="text-lg😌">
        {earnedPoints < 150 ? "You Failed" : "Congrats, You Passed👑"}
      </h1>
    </div>
  );
};

export default Result;
