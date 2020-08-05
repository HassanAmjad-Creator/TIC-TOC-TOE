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
  
 
  
  module.exports = Game;
  
