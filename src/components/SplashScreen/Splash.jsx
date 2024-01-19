const Splash = ({ dispatch, numOfQuestions }) => {
  const handleStartQuiz = () => {
    dispatch({ type: "startTimer" });
    dispatch({ type: "start" });
  };

  return (
    <div>
      <div className="card">
        <h1 className="text-4xl font-bold">Welcome to React Test</h1>
        <p className="pt-3">
          {numOfQuestions} Questions to test your React mastery!
        </p>
        <button className="mt-4" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Splash;
