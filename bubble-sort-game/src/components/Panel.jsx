import React, { useEffect, useState } from "react";
import "./Panel.css";

function Panel({ setScore, target, setTarget }) {
  const [arr, setArr] = useState([]);

  const ChangeData = () => {
    let temp = [];
    for (let i = 1; i <= 100; i++) {
      temp.push(Math.floor(Math.random() * 10));
    }
    setArr(temp);
  };
  
  useEffect(() => {
    ChangeData();
  }, []);

  const HandleClick = (event) => {
    if (event.target.classList.contains("bubble")) {
      if (event.target.innerText == target) {
        setScore((score) => score + 10);
      } else {
        setScore((score) => score - 5);
      }
    } else {
      setScore((score) => score - 5);
    }
    setTarget(Math.floor(Math.random() * 10));
    ChangeData();
  };

  return (
    <div id="panel" onClick={HandleClick}>
      {arr.map((bubble, index) => (
        <div className="bubble" key={index}>
          {bubble}
        </div>
      ))}
    </div>
  );
}

export default Panel;
