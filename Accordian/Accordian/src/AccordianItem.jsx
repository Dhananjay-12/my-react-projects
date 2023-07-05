import { useState } from "react";

export default function AccordianItem({ num, title, text }) {
  const [isToggled, setIsToggled] = useState(false);
  function handleToggleFunction() {
    setIsToggled((isToggled) => !isToggled);
  }
  return (
    <>
      <div
        className={`item ${isToggled ? "toggle-color" : ""}`}
        onClick={handleToggleFunction}
      >
        <p>{num < 9 ? `0${num}` : num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isToggled ? "-" : "+"}</p>
        <div className={`text ${!isToggled ? "hidden " : ""}`}>{text}</div>
      </div>
    </>
  );
}
