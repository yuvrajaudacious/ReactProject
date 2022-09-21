import { useState } from "react";

const Textform = (props) => {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleclearClick = () => {
    let newtext = "";
    setText(newtext);
  };
  const handleonChange = (e) => {
    setText(e.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpace = () =>{

    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
  }

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
         Remove ExtraSpace
        </button>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          <b>
            {text.split(" ").length} word, {text.length} characters
          </b>
        </p>
        <p>
          <b>{0.008 * text.split(" ").length} Minutes read </b>
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Textform;
