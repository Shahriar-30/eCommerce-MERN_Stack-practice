// This is for Reuseable Button
import React from "react";

function Button({ txt, className }) {
  return (
    <>
      <button
        className={`select-none text-white bg-prime ${className}`}
      >
        {txt}
      </button>
    </>
  );
}

export default Button;
