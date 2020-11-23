import React from "react";
import "./style.css";

function eatBtn({ onClick }) {
  return (
    <span className="eat-btn" role="button" tabIndex="0" onClick={onClick}>
      &#10003;
    </span>
  );
}

export default eatBtn;