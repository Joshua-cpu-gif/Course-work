import './Calculator.css';
import React, { useState } from "react";
import Button from "./Button.js";

function KeyPadComponent(props) {
  const [text1, setText1] = useState("");

  const ClickHandle = (e) => {
    const value = e.target.value;

    if (value === "C") {
      setText1("");
    }

    else if (value === "=") {
      try {
        setText1(eval(text1).toString());
      } catch {
        alert("Invalid Expression");
      }
    }

    // TASK 2: SHOW ME BUTTON
    else if (value === "show me") {
      window.open("YOUR_IMAGE_URL_HERE", "_blank");
    }

    // TASK 3: SQUARE BUTTON
    else if (value === "square") {
      if (!isNaN(text1) && text1 !== "") {
        const squared = Number(text1) * Number(text1);
        setText1(squared.toString());
      } else {
        alert("Enter a valid number first!");
      }
    }

    else {
      setText1(text1 + value);
    }
  };

  return (
    <div className="Calculator">
      <div className="screen-row">
        <input type="text" readOnly value={text1} />
      </div>

      <div>
        <Button label="(" ClickHandle={ClickHandle} />
        <Button label="CE" ClickHandle={ClickHandle} />
        <Button label=")" ClickHandle={ClickHandle} />
        <Button label="C" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="1" ClickHandle={ClickHandle} />
        <Button label="2" ClickHandle={ClickHandle} />
        <Button label="3" ClickHandle={ClickHandle} />
        <Button label="+" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="4" ClickHandle={ClickHandle} />
        <Button label="5" ClickHandle={ClickHandle} />
        <Button label="6" ClickHandle={ClickHandle} />
        <Button label="-" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="7" ClickHandle={ClickHandle} />
        <Button label="8" ClickHandle={ClickHandle} />
        <Button label="9" ClickHandle={ClickHandle} />
        <Button label="*" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="." ClickHandle={ClickHandle} />
        <Button label="0" ClickHandle={ClickHandle} />
        <Button label="=" ClickHandle={ClickHandle} />
        <Button label="/" ClickHandle={ClickHandle} />
      </div>

      {/* TASK 2 + TASK 3 BUTTONS */}
      <div>
        <Button label="show me" ClickHandle={ClickHandle} />
        <Button label="square" ClickHandle={ClickHandle} />
      </div>
    </div>
  );
}

export default KeyPadComponent;
