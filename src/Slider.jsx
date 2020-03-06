import React, { Component } from 'react';
import './SlideStyle.css';
export class Slider extends Component{
    state = {
        currentPages: 0
    }
    createNavBtns(array) {
        let btns=[]
        for (let i = 0; i < array.length; i++){
            let page = i
            if (i === 0) { page = "front" } else if (i === array.length - 1) { page = "back" }
            btns.push(page)
        }
        let elements = btns.map(el => { return <span className="pageBtn">{el}</span> })
        return elements;
    }
    
    render() {
        return (
            <div className="imageSlider">
                <div className="sliderHeader">DUNSELMAG no.{this.props.issue.issueNumber}</div>
                <div className="imageWindow">
                    <div className="orientationBtn">ORIENTATION</div>
                    <div className="pages">
                        <div className="leftPage page"></div>
                        <div className="rightPage page"></div>
                        
                    </div>
                    <div className="wordsZone">WORDS</div>
                    <div className="navBar">
                        <div>BACK</div>
                        <div>NEXT</div>
                    </div>
                </div>
                <div className="pageNav">{this.createNavBtns(this.props.issue.pages)}</div>
                
            </div>
        )
    }
}