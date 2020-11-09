import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function eatBtn({ onClick }) {
  return (
    <span className="eat-btn" role="button" tabIndex="0" onClick={onClick}>
      &#10003;
    </span>
  );
}

export default eatBtn;