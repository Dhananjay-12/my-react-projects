export default function Option({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question?.options.map((option, key) => (
        <button
          key={option}
          className={`btn btn-option ${key === answer ? "answer" : ""} ${
            hasAnswered
              ? key === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: key })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
