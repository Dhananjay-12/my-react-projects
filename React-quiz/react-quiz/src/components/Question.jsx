import PropTypes from "prop-types";
import Option from "./Option";

export default function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h3>{question.question}</h3>
      <Option question={question} />;
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctOption: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
  }).isRequired,
};
