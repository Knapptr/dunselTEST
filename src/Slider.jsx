import React, { Component } from 'react';
import {PageDisplay} from './pageDisplay'
import './SlideStyle.css';

const queryReport = () => {
   return  window.matchMedia("(max-width: 1000px)").matches
}


const max2Panel = 40;

export class Slider extends Component{
    state = {
        currentPages: 0,
       
        
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
                    <div className="orientationBtn">{this.state.screenWidth}</div>
                    <PageDisplay issue={this.props.issue}></PageDisplay>
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