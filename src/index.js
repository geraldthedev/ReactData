import React from 'react';
import ReactDOM from 'react-dom';


class InputBar extends React.Component{
render() {
    return(
        <div ClassName="inputField">
        <input>
        </input>
        <button>Submit</button>
        </div>
    );
  }

}

ReactDOM.render(
    <InputBar />,
    document.getElementById('root')
);