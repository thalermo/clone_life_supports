import React from "react";
import "./button.style.scss";
import { cs } from "../../core/utils";

function Button(props) {
  return (
    <button
      onClick={props.handleClick}
      className={cs(["button", "button-primary", props.classNameProps])}
    >
      {props.children}
    </button>
  );
}

export default Button;
