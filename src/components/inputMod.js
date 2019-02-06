import React from 'react';
import wave from '../dbconnect';


class InputBar extends React.Component{
render() {
    return(
        <div className="inputField">
        <form method= "post">
        <input>
        </input>
        <button type="Submit">Submit</button>
        </form>
        </div>
    );
  }



}
export default InputBar;