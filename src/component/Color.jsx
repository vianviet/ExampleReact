import React from "react";
import useToggle from "../Common/useToggle";

export default function Color() {
  const [isTextChanged, setIsTextChanged] = useToggle();
  return (
    <button
      onClick={setIsTextChanged}
      className={isTextChanged ? "red" : "black"}
    >
      Click to change color
    </button>
  );
}
