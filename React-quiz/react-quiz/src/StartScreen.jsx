export default function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz !</h2>
      <h3>{numQuestions} questions to test your React knowledge</h3>
      <button className="btn btn-ui">Let&apos;s Start</button>
    </div>
  );
}
