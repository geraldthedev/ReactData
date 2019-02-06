import React from 'react';
import ReactDOM from 'react-dom';
import InputBar from './components/inputMod';
import EmailBar from './components/emailMod';
import NumBar from './components/numberMod';
import wave from './dbconnect';


ReactDOM.render(
    <InputBar />,
    document.getElementById('root')
);