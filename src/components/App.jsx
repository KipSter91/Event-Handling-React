import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonColour, setButtonColour] = useState("white");

  const handleClick = () => {
    setHeadingText("Submitted");
  };

  const handleOnMouseOver = () => {
    setButtonColour("black");
  };

  const handleOnMouseOut = () => {
    setButtonColour("white");
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: buttonColour }}
        onClick={handleClick}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
