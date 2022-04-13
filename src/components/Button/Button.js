import React from "react";
import "./Button.css";

function Button({ className, disabled, name }) {
  return (
    <button className={className} disabled={disabled}>
      {name}
    </button>
  );
}
export default Button;
