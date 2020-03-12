import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Slider } from './Slider';
import { createIssue } from './issueCreator';
import { ImageDisplay } from './ImageDisplay.js'



const testIssue = createIssue(1,7,[5,6])
//<Slider issue=xxx />
//ReactDOM.render(<ImageDisplay/>, document.getElementById('root'));
//ReactDOM.render(<Imageimport />, document.getElementById("root"));
 ReactDOM.render(<Slider issue={testIssue} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
