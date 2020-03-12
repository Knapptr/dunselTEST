import React from 'react';
import Cover from './imgs/DUNSEL1/1-0.png'
import {createIssue} from './issueCreator';

// Import all images in image folder

let testIssue = createIssue(1, 1, "none");

export const Imageimport = () => {
    console.log(testIssue)
    return (
        <div>
            <img src={testIssue.pages[0].image} alt="cover"/>
        </div>
    )
}




