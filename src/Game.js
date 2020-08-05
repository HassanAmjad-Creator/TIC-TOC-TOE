const React = require("react");

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
  
  const Square = (props) => {
    const squareOnClick = () => {
      props.onClick(props.rowIndex, props.colIndex);
    };
    return (
      <div className="Square" onClick={squareOnClick} style={squareStyle}>
        {props.value}
      </div>
    );
  };
  
  const Row = (props) => {
    const cells = props.cells.map((value, colIndex) => {
      return (
        <Square
          colIndex={colIndex}
          rowIndex={props.rowIndex}
          value={value}
          onClick={props.onClick}
        />
      );
    });
    return (
      <div className="board-row" style={rowStyle}>
        {cells}
      </div>
    );
  };
  
  const Board = (props) => {
    const rows = props.matrix.map((cells, rowIndex) => {
      return <Row rowIndex={rowIndex} cells={cells} onClick={props.onClick} />;
    });
    return (
      <div style={containerStyle} className="gameBoard">
        <div className="status" style={instructionsStyle}>
          Next player: {props.player}
        </div>
        <div className="winner" style={instructionsStyle}>
          Winner: {props.winner}
        </div>
        <button style={buttonStyle} onClick={props.onReset}>
          Reset
        </button>
        <div style={boardStyle}>{rows}</div>
      </div>
    );
  };
  
  class Game extends React.Component {
    initialState() {
      return {
        matrix: [...emptyMatrix],
        player: "x",
        winner: "-",
        clickCounter: 0,
      };
    }
  
    constructor(props) {
      super(props);
      this.state = this.initialState();
    }
  
    checkHorizontal(player) {
      for (var i = 0; i <= 2; i++) {
        const hasWinner = this.state.matrix[0][i] == player &&
        this.state.matrix[0][i] == this.state.matrix[1][i] &&
        this.state.matrix[0][i] == this.state.matrix[2][i];
        if (hasWinner) {
          return hasWinner;
        }
      }
    }
  
    checkVertical(player) {
      for (var i = 0; i <= 2; i++) {
        const hasWinner = this.state.matrix[i][0] == player &&
        this.state.matrix[i][0] == this.state.matrix[i][1] &&
        this.state.matrix[i][0] == this.state.matrix[i][2];
        if (hasWinner) {
          return hasWinner;
        }
      }
    }
  
    checkDiagonal(player) {
      const diagonal1 = this.state.matrix[0][0] == player && 
      this.state.matrix[0][0] == this.state.matrix[1][1] &&
      this.state.matrix[0][0] == this.state.matrix[2][2];
  
      const diagonal2 = this.state.matrix[2][0] == player && 
      this.state.matrix[2][0] == this.state.matrix[1][1] &&
      this.state.matrix[2][0] == this.state.matrix[0][2];
      return diagonal1 || diagonal2;
  
    }
  
    checkWinner () {
      let winner = this.state.winner;
      if (this.state.clickCounter >= 5) {
        const checkPlayer = this.state.clickCounter % 2 == 0 ? '0' : 'x';
        if(this.checkDiagonal(checkPlayer) || this.checkHorizontal(checkPlayer) || this.checkVertical(checkPlayer)) {
          winner = checkPlayer;
        }
      }
      this.setState({winner: winner});
    }
  
    handleClick(rowIndex, colIndex) {
      let newMatrix = [...this.state.matrix];
      if (newMatrix[rowIndex][colIndex] === "" && this.state.winner == '-') {
        newMatrix[rowIndex] = [...newMatrix[rowIndex]];
        newMatrix[rowIndex][colIndex] = this.state.player;
        this.setState({
          matrix: newMatrix,
          player: this.state.player == "x" ? "0" : "x",
          clickCounter: this.state.clickCounter + 1,
        }, this.checkWinner);
      }
    }
  
    onReset() {
      this.setState(this.initialState());
    }
  
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board
              player={this.state.player}
              winner={this.state.winner}
              onReset={() => this.onReset()}
              matrix={this.state.matrix}
              onClick={(rowIndex, colIndex) =>
                this.handleClick(rowIndex, colIndex)
              }
            />
          </div>
        </div>
      );
    }
  }
  
  module.exports = Game;
  
