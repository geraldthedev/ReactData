import React from 'react';
const mongoose = require('mongoose');

class InputBar extends React.Component{
render() {
    return(
        <div className="inputField">
        <input method ="post">
        </input>
        <button type="Submit">Submit</button>
        </div>
    );
  }



}
export default InputBar;