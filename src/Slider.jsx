import React, { Component } from 'react';
import {PageDisplay} from './pageDisplay'
import './SlideStyle.css';

const queryReport = () => {
   return  window.matchMedia("(max-width: 1000px)").matches
}


const max2Panel = 40;
const minWidth = 900

export class Slider extends Component{
    state = {
        currentPages: 0,
        screenWidth: window.innerWidth,
        displayAmount: 2,
        issueLength: this.props.issue.pages.length
    }
    displayLogic = () => {
        let amount;
        if (this.state.screenWidth < minWidth || this.state.currentPages === 0 || this.state.currentPages === this.props.issue.pages.length) {
            amount = 1;
        } else {
            amount = 2;
        }
        
        this.setState({displayAmount: amount})
    }
    updateDisplayAmount = () => {
        if (this.state.screenWidth < minWidth) {
            this.setState({displayAmount:1})
        } else { this.setState({ displayAmount: 2 }) }
        
    }
    updateWidth = () => {
        this.setState({ screenWidth: window.innerWidth }, this.displayLogic)

    }
    componentDidMount() {
        
        this.updateWidth();
        
        window.addEventListener('resize',this.updateWidth)
    }
    componentWillUnmount() {
        window.removeEventListener('resize',this.updateWidth)
    }
    nextPage = () => {
        let currentPage = this.state.currentPages;
        let length = this.state.issueLength-1
        currentPage = currentPage + this.state.displayAmount;
        if(currentPage>length){currentPage = length}
        this.setState({currentPages:currentPage},this.updateWidth)
    }
    prevPage = () => {
        let currentPage = this.state.currentPages;
        let length = this.state.issueLength-1
        currentPage = currentPage - this.state.displayAmount;
        if(currentPage<0){currentPage = 0}
        this.setState({currentPages:currentPage},this.updateWidth)
    }
    toCover = () => {
        this.setState({currentPages:0},this.displayLogic)
    }
    toBack = () => {
        this.setState({currentPages:this.props.issue.pages.length},this.displayLogic)
    }
    onCover = () => {
        if (this.state.currentPages === 0 || this.state.currentPages === this.state.issueLenth) {
            return true
        } else { return false}
    }
    setPage = (page) => {
        let displayAmount = this.state.displayAmount;
        let currentPage;
        let widthCheck = this.state.screenWidth;
        if (this.onCover() && widthCheck > minWidth) {
            
            displayAmount = 2;
        }
        if (displayAmount === 2) { 
            
            if (!(page % 2)) {
                
                currentPage = page-1;
            } else {
                currentPage = page;
            }
        } else {
            currentPage = page;
        }
            
        
        
        this.setState({ currentPages: currentPage },this.displayLogic);
    }
    
    createNavBtns(array) {
        let btns=[]
        for (let i = 0; i < array.length; i++){
            let page = i
            if (i === 0) { page = "front" } else if (i === array.length - 1) { page = "back" }
            btns.push(page)
        }
        let elements = btns.map(el => {
            return <span onClick={el === "front" ? this.toCover : el === "back" ? this.toBack : () => {this.setPage(el)}}key={el} className="pageBtn">{el}</span> })
        return elements;
    }
    
   
    render() {
        return (
            <div className="imageSlider">
                <div className="sliderHeader">DUNSELMAG no.{this.props.issue.issueNumber}</div>
                <div className="imageWindow">
                    <div className="orientationBtn">{this.state.screenWidth}</div>
                    <PageDisplay displayAmount={this.state.displayAmount}issue={this.props.issue} currentPages={this.state.currentPages}></PageDisplay>
                    <div className="wordsZone">WORDS</div>
                    <div className="navBar">
                        <div onClick={this.prevPage}>BACK</div>
                        <div onClick={this.nextPage}>NEXT</div>
                        
                    </div>
                </div>
                <div className="pageNav">{this.createNavBtns(this.props.issue.pages)}</div>
                
            </div>
        )
    }
}