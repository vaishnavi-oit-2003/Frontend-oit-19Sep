import React, { useState } from "react";
import useCountdown from "@shared/hooks/useCountdown";
import Header from "../components/Header.jsx";
import Panel from "../components/Panel.jsx";
import EndGame from "../components/EndGame.jsx";

function Game() {
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState(Math.floor(Math.random() * 10));
  const { time, isExpired, reset: resetTimer } = useCountdown(10);

  const ResetGame = () => {
    setScore(0);
    setTarget(Math.floor(Math.random() * 10));
    resetTimer();
  };

  return (
    <>
      <Header score={score} target={target} time={time} />
      {!isExpired ? (
        <Panel setScore={setScore} target={target} setTarget={setTarget} />
      ) : (
        <EndGame score={score} ResetGame={ResetGame} />
      )}
    </>
  );
}

export default Game;
