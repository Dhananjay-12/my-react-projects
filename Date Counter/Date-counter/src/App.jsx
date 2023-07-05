import "./App.css";

import { useState } from "react";

function App() {
  return <Steps />;
}

function Steps() {
  const [step, setStep] = useState(0);
  const reduceNum = () => {
    setStep((s) => s - 1);
  };
  const increaseNum = () => {
    setStep((s) => s + 1);
  };

  return (
    <div className="counter">
      <button onClick={reduceNum}>-</button>
      <p>Step: {step}</p>
      <button onClick={increaseNum}>+</button>
      <Count step={step} />
    </div>
  );
}

function Count(props) {
  const [count, setCount] = useState(0);
  const reduceNum = () => {
    setCount((s) => s - props.step);
  };
  const increaseNum = () => {
    setCount((s) => s + props.step);
  };
  return (
    <>
      <div className="counter">
        <button onClick={reduceNum}>-</button>
        <p>Count: {count}</p>
        <button onClick={increaseNum}>+</button>
      </div>

      <Timeline count={count} />
    </>
  );
}

function Timeline(props) {
  const { count } = props;
  let timeText;
  if (count === 0) timeText = "Today is";
  else if (count > 0) timeText = count + " days from today is";
  else timeText = Math.abs(count) + " days ago was";

  const date = new Date("june 23 2023");
  date.setDate(date.getDate() + count);

  console.log(date);
  return <p>{`${timeText} ${date.toDateString()}`}</p>;
}
export default App;
