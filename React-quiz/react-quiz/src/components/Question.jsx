import Option from "./Option";

export default function Question({ question, answer, dispatch }) {
  console.log(question);
  return (
    <div>
      <h3>{question.question}</h3>
      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
