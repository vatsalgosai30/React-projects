import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        state[a] !== null &&
        state[a] === state[b] &&
        state[b] === state[c] &&
        state[a] === state[c]
      )
        return true;
    }
    return false;
  };

  const isDraw = state.every((square) => square !== null) && !checkWinner();

  const reset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  const handleClick = (index) => {
    if (state[index] !== null || checkWinner() || isDraw) {
      return;
    }
    const copystate = [...state];
    copystate[index] = isXTurn ? "X" : "O";
    setState(copystate);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="board-container">
      {isDraw ? (
        <>
          It's a draw! <button onClick={reset}>Play again</button>
        </>
      ) : (
        <>
          {checkWinner() ? (
            <>
              {isXTurn ? "O" : "X"} Won the game{" "}
              <button onClick={reset}>Play again</button>
            </>
          ) : (
            <>
              <h4>Player {isXTurn ? "X" : "O"}, please move</h4>
              <div className="board-row">
                <Square
                  onClick={() => {
                    handleClick(0);
                  }}
                  value={state[0]}
                />
                <Square
                  onClick={() => {
                    handleClick(1);
                  }}
                  value={state[1]}
                />
                <Square
                  onClick={() => {
                    handleClick(2);
                  }}
                  value={state[2]}
                />
              </div>
              <div className="board-row">
                <Square
                  onClick={() => {
                    handleClick(3);
                  }}
                  value={state[3]}
                />
                <Square
                  onClick={() => {
                    handleClick(4);
                  }}
                  value={state[4]}
                />
                <Square
                  onClick={() => {
                    handleClick(5);
                  }}
                  value={state[5]}
                />
              </div>
              <div className="board-row">
                <Square
                  onClick={() => {
                    handleClick(6);
                  }}
                  value={state[6]}
                />
                <Square
                  onClick={() => {
                    handleClick(7);
                  }}
                  value={state[7]}
                />
                <Square
                  onClick={() => {
                    handleClick(8);
                  }}
                  value={state[8]}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Board;