const React = require("react");

class Clicking extends React.Component {
handleClick () {
    <div className="Board" style={squareStyle}> 
    Board: X
     </div>;
}
    render () {
        return(
            <div>
                <Board onClick = {this.handleClick}></Board>
            </div>
        )
    }
}