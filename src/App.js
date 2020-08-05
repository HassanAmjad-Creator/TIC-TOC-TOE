const React = require("react");
const ReactDOM = require("react-dom");
const Game = require("./Game");

const App = () => {
  const onBtnClick = () => {
    alert("hello world");
  };

  /* events are only available on html elements. <button is an HTML element thats why clicking on button will execute onBtnClick which has alert() */

  return (
    <React.Fragment>
      <Game />
      <button onClick={onBtnClick}>click me please!</button>
    </React.Fragment>
  );
};

if (typeof document === "undefined") {
  module.exports = App;
} else {
  ReactDOM.hydrate(<App />, document.getElementById("root"));
}
