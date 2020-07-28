const React = require('react')
const ReactDOM = require('react-dom')
const Square = require ('./src/Square')
 
const App = () => {
    const onBtnClick = () => {
        alert('hello world');
    }

    return (
      <React.Fragment>
        <Square/>
        <button onClick={onBtnClick}>
        click me please!
        </button>
        </React.Fragment>
    )
    }

    if (typeof document === "undefined") {
        module.exports = App 
    } else {
        ReactDOM.hydrate(<App/>,document.getElementById("root"));
    }
    
