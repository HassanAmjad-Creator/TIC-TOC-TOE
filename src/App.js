const React = require('react')
const ReactDOM = require('react-dom')
import Square from './Square'

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
        export default App 
    } else {
        ReactDOM.hydrate(<App/>,document.getElementById("root"));
    }
    
