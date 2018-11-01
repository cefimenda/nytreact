import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "default", className, children, onClick }) => (
  <button
    onClick={onClick}
    className={["btn btn-lg", className].join(" ")}
    style={{
      background: "rgb(81, 81, 177)",
      color: 'white'
    }}
  >
    {children}
  </button>
);

export default Button;
