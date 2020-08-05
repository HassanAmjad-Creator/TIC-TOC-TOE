const React = require("react");
const ReactDOM = require ("react-dom");
const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

const emptyMatrix = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  
  const Square = () => { 
      return (
        <div
          className="square"
          style={squareStyle}>
        </div>
      );
    
      };
  
  const Board = () => {
      return (
        <div style={containerStyle} className="gameBoard">
          <div className="status" style={instructionsStyle}>Next player: X</div>
          <div className="winner" style={instructionsStyle}>Winner: None</div>
          <button style={buttonStyle}>Reset</button>
          <div style={boardStyle}>
            <div className="board-row" style={rowStyle}>
              <Square />
              <Square />
              <Square />
            </div>
            <div className="board-row" style={rowStyle}>
              <Square />
              <Square />
              <Square />
            </div>
            <div className="board-row" style={rowStyle}>
              <Square />
              <Square />
              <Square />
            </div>
          </div>
        </div>
      );
    }
  
  const Game = () =>  {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      );
    }
  
  module.exports = Game;
  