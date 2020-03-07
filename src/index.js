import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Slider } from './Slider';


const testIssue = {
    issueNumber: 1,
    pages: [{number:"cover",url:"./imgs/Dunsel1/1_cv.png"},{number:1,url:'./imgs/Dunsel1/1_1.png'},{number:2,url:'./imgs/Dunsel1/1_2.png'},{number:"back",url:'backcov'}]
}
ReactDOM.render(<Slider issue={testIssue} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
