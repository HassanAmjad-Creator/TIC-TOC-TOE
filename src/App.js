const React = require('react')
const ReactDOM = require('react-dom')

const squareStyle = () => {
    'width';'60px',
    'height';'60px',
    'backgroundColor'; '#ddd',
    'margin'; '4px',
    'display'; 'flex',
    'justifyContent'; 'center',
    'alignItems'; 'center',
    'fontSize'; '20px',
    'color'; 'white'
  }
const App = () => {
    const onBtnClick = () => {
        alert('hello world');
    }

    return (
        <button onClick={onBtnClick}>
        click me please!
        </button>
    )
    }

    if (typeof document === "undefined") {
        module.exports = App 
    } else {
        ReactDOM.hydrate(<App/>,document.getElementById("root"));
    }
    
