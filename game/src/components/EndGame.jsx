import React from "react";
import "./EndGame.css";

function EndGame({score,ResetGame}) {
    return (
        <div id="endgame">
            <h1>Game Over</h1>
            <p>Time's Up</p>

            <div className="score">
                <h1>Score: {score}</h1>
            </div>

            <button onClick={ResetGame}>Play Again</button>
        </div>
    );
}
export default EndGame;