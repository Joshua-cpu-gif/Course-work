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
    </div>
  );
}

export default KeyPadComponent;
