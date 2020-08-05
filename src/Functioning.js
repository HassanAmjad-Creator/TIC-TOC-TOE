const React = require("react");
const Game = require("./Game");

class Functioning extends React.Component {
  handleClick() {
    alert('1231123');
  }
  render() {
    /* Board doesn't have onClick event as onClick only available on HTML elements. */
    return (
        <Game onClick={this.handleClick} />
    );
  }
}

module.exports = Functioning;
