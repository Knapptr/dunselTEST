import React, { Component } from 'react';
import {PageDisplay} from './pageDisplay'
import './SlideStyle.css';
import { ImageTest } from './testImage'
import {Imageimport} from './imageimport'

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
        issueLength: this.props.issue.pages.length,
        focus: false,
        imagesLoaded: false,
        images: []
    }
    loadImages = () => {
        let imagesArray = []
        
            for (let i = 0; i < this.state.issueLength; i++) {
                let image = new Image()
                if (i === this.state.issueLength-1) {
                    
                    image.onload = ()=>{
                        this.setState({ images: imagesArray, imagesLoaded:true})
                    
                    }
                }
                imagesArray.push(image)
                console.log(imagesArray)
                }
            for (let i = 0; i < this.state.issueLength; i++) {
                    console.log('hello!')
                    imagesArray[i].src = this.props.issue.pages[i].image
                }
            
           
            }
        
    
    displayLogic = () => {
        let amount;
        let currentPage = this.state.currentPages
        if (this.state.screenWidth < minWidth || currentPage === 0 || currentPage=== this.props.issue.pages.length-1) {
            amount = 1;
        } else {
            amount = 2;
            if (!(currentPage % 2)) {
                
                currentPage = currentPage-1;
            } else {
                currentPage = currentPage;
            }
        } 
        
        
        this.setState({displayAmount: amount, currentPages:currentPage})
    }
    updateDisplayAmount = () => {
        let width = this.state.screenWidth;
        let displayAmount = this.state.displayAmount;
        if (width < minWidth) {
            this.setState({displayAmount:1})
        } else { this.setState({ displayAmount: 2 }) }
        
    }
    updateWidth = () => {
        this.setState({ screenWidth: window.innerWidth }, this.displayLogic)

    }
    componentDidMount() {
        
        this.updateWidth();
        
        window.addEventListener('resize', this.updateWidth)
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 37) { this.prevPage() }
            if (e.keyCode ===39){this.nextPage()}
        })
    }
    componentWillUnmount() {
        window.removeEventListener('resize',this.updateWidth)
    }
    setFocus = (page) => {
        
        let displayAmount = 1
        let currentPage = page;
        let focus = this.state.focus
        if (focus) {
            this.setPage(page)
        } else {
            this.setState({ displayAmount: displayAmount, currentPages: currentPage, focus: true })
        }
    }
    nextPage = () => {
        let currentPage = this.state.currentPages;
        let length = this.state.issueLength-1
        currentPage = currentPage + this.state.displayAmount;
        if (currentPage > length) { currentPage = length; }
        this.setPage(currentPage)
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
        this.setState({ currentPages: this.props.issue.pages.length-1, displayAmount: 1 })
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
        if (!this.onCover() && widthCheck > minWidth) {
            
            displayAmount = 2;
        }
        if (displayAmount === 2) { 
            
            if (page>0 &&!(page % 2)) {
                
                currentPage = page-1;
            } else {
                currentPage = page;
            }
        } else {
            currentPage = page;
        }
            
        
        
        this.setState({ focus: false, currentPages: currentPage },this.displayLogic);
    }
    currentlyDisplayed = () => {//returns array of current pages
        let displayAmount = this.state.displayAmount;
        let currentPage = this.state.currentPages;
        let pagesArray = [];
        while (pagesArray.length < displayAmount) {
            pagesArray.push(currentPage);
            currentPage += 1;
        }
        return pagesArray;
    }
    isViewed = (page) => {
        let currentPages = this.currentlyDisplayed()
        if (currentPages.some(el => { return el === page })) {
            return true
        } else {
            return false
        }
    }
    
    createNavBtns(array) {
        let btns = []
        
        for (let i = 0; i < array.length; i++){
            let page = i
            btns.push(page)
        }
        let elements = btns.map(el => {
            return <span onClick={() => { this.setPage(el) }} key={"page"+el} className={"pageBtn "+(this.isViewed(el)?"viewed":null)}>{el===0?"front":el===array.length-1?"back":""}</span> })
        return elements;
    }
    setImagesLoaded = () => {
        this.setState({ imagesLoaded: true });
    }
   
    render() {
    if(!this.state.imagesLoaded){this.loadImages()}
        return (
            
            <div className="imageSlider">
                <div className="sliderHeader">DUNSEL <span className='light'>no.{this.props.issue.issueNumber}</span></div>
                <div className="imageWindow">
                    <PageDisplay loaded={this.state.imagesLoaded} images={this.state.images} screenWidth={this.state.screenWidth} handleClick={this.setFocus}displayAmount={this.state.displayAmount}issue={this.props.issue} currentPages={this.state.currentPages}></PageDisplay>
                    
                </div>
                <div className="navBar">
                    <div className="arrow" onClick={this.prevPage}><i className="fas fa-caret-left"></i></div>
                    <div className="pageNav">{this.createNavBtns(this.props.issue.pages)}</div>
                    <div className="arrow" onClick={this.nextPage}><i className="fas fa-caret-right"></i></div>
                    
                </div>
                <footer>
                    <p>Dunsel <span className="light">{this.props.issue.issueNumber}</span> @Dunsel_fahq <span className="light"> By Luke H. Berry</span></p>
                </footer>
                
            </div>
        )
    }
}