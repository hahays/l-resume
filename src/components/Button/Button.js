import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={props.className} disabled={props.disabled}>
      {props.name}
    </button>
  );
}

export default Button;
