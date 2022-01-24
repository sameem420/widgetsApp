import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Urdu",
    value: "ur",
  },
];

function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter some text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select the language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <div className="ui header">
        <Convert language={language} text={text} />
      </div>
    </div>
  );
}

export default Translate;
