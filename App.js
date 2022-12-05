import React, { useState } from "react";
import "./styles.css";

var flagEmoji = {
  "🇦🇪": "UAE",
  "🇨🇦": "Canada",
  "🇬🇧": "United Kingdom",
  "🇮🇪": "Ireland",
  "🇯🇵": "Japan",
  "🇱🇰": "Sri Lanka",
  "🇿🇦": "South Africa"
};

var flagsOfCountry = Object.keys(emoji);

export default function App() {
  const [Name, setName] = useState("");

  function userInputHandler(event) {
    var userInput = event.target.value;
    var Name = flagEmoji[userInput];
    if (Name === undefined) {
     Name = "we don't have the above flag in our database");
    }
    setName(Name);
  }

  function flagClickHandler(emoji) {
    var Name = flagEmoji[emoji];
    setName(Name);
  }

  return (
    <div className="App">
      <h1>FLAG INTERPRETER</h1>
      <input onChange={userInputHandler}></input>
      <div>
        <h3>{Name}</h3>
        <h3> Flags we know</h3>
        {flagsOfCountry.map((flagsEmoji) => {
          return (
            <span
              key={flagsEmoji}
              style={{ fontSize: "2rem", margin: "10px " }}
              onClick={() => flagClickHandler(flagsEmoji)}
            >
              {flagsEmoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
