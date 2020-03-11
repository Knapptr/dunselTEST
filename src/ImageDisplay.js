import React from 'react';
import './ImageDisplay.css';
let imageVar = <img  src='./imgs/DUNSEL1/1-5.png' alt="image" />
const tester = new Image()
tester.src = "./imgs/DUNSEL1/1-0.png"

export const ImageDisplay = () => {
    return (
        <div id="container">
            {/* <div className="spread">
                <div className="frame">
                    <img className="ldsc" src="./imgs/DUNSEL1/1-5.png" alt="landscapeImg" />
                </div> */}
            
            
            {/* </div>
            <div className="spread">
                <div className="frame port">
                    <img className="portrait"src="./imgs/DUNSEL1/1-0.png" alt="portraitImg"/>
                </div>
                <div className="frame port">
                <img className="portrait"src="./imgs/DUNSEL1/1-0.png" alt="portraitImg"/>
                </div>
                
            </div> */}
        
            <div className="spread">
                <div className="frame port">
                    <img className="ldsc port"src="./imgs/DUNSEL1/1-5.png" alt="portraitImg"/>
                </div>
                <div className="frame port">
                    
                    <img id="tester" className="portrait" src="./imgs/DUNSEL1/1-0.png" alt="portraitImg" />
                    
                </div>
            </div>
        </div>
    )
}