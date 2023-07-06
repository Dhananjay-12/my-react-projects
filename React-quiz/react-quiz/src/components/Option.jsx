import PropTypes from "prop-types";

export default function Option({ question }) {
  return (
    <div className="options">
      {question?.options.map((option, key) => (
        <button key={key} className="btn btn-option">
          {option}
        </button>
      ))}
    </div>
  );
}

Option.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctOption: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
  }).isRequired,
};
