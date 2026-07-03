import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Panel from "../components/Panel.jsx";
import EndGame from "../components/EndGame.jsx";

function Game() {
  const [isGameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState(Math.floor(Math.random() * 10));
  const [time, setTime] = useState(10);
  const [counterId, setCounterId] = useState(null);
  //   --------------------------------------------------------------------
  useEffect(() => {
    let id = setInterval(() => {
      setTime((time) => setTime(time - 1));
    }, 1000);
    setCounterId(id);
    return () => clearInterval(counterId);
  }, []);
  if (time == 0) {
    clearInterval(counterId);
  }
  useEffect(() => {
    if (time == 0) {
      setGameOver(true);
    }
  }, [time]);
  const ResetGame = ()=>{
    setGameOver(false);
    setScore(0);
    setTarget(Math.floor(Math.random() * 10));
    setTime(10);
    let id = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    setCounterId(id);
  }
  //   ---------------------------------------------------------------------
  return (
    <>
      <Header score={score} target={target} time={time} />
      {
      !isGameOver ? 
            <Panel setScore={setScore} target={target} setTarget={setTarget}/> : 
            <EndGame score={score} ResetGame={ResetGame} />
      }
    </>
  );
}

export default Game;
