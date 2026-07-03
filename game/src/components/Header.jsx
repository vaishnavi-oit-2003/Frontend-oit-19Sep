import React from "react";
import "./Header.css";

function Header({ score, target, time }) {
  return (
    <div id="header">
      <div className="score">Score: {score}</div>
      <div className="target">Target: {target}</div>
      <div className="time">Time To Over: {time} sec</div>
    </div>
  );
}

export default Header;
