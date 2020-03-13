import React, { Component } from 'react';

export class PageDisplay extends Component{
  
    state = {
        loaded: false
    }
    orient = (page) => { //returns rotate information for className
        if (page.landscape) {
            return "landscape"
        } else { return "portrait"}
    }
    loadImages = (issueArray) => {
        let pages = issueArray.pages
        let images = [];
        pages.forEach(el => {
            let imgElement = new Image();
            imgElement.src = el.image
            images.push(imgElement)
        })
        console.log("loaded?")
        this.setState({loaded: true})
        return images;
        
    }
    render() {
        let images;
        const pages = () => {
            let panels;
            const currentPage = this.props.currentPages;
            const issue = this.props.issue;
            const displayAmount = this.props.displayAmount;
            if (!this.state.loaded) {
                panels = <h1>LOADING.</h1>
                
                images = this.loadImages(this.props.issue);
            } else {
                if (displayAmount === 1 || currentPage === 0 || currentPage === this.props.issue.pages.length - 1) {
                    panels = (
                        <div className="pages">
                       
                            <div className={"frame single " + this.orient(this.props.issue.pages[currentPage])}>
                            
                                <img onClick={() => { this.props.handleClick(currentPage) }} src={this.props.issue.pages[currentPage].image} alt={"Page " + currentPage} />
                            </div>
                    
                            
                        </div>
                    )
                
                } else {
                    let leftPage = currentPage;
                    let rightPage = currentPage + 1
                    panels = (
                        <div className="pages">
                       
                            <div className={"frame " + "Dual " + "left"} >
                                <img onClick={() => { this.props.handleClick(leftPage) }} src={this.props.issue.pages[leftPage].image} alt={"Page " + leftPage} />
                            </div>
                   
                            <div className={"frame " + "Dual " + "right"} >
                                <img onClick={() => { this.props.handleClick(rightPage) }} src={this.props.issue.pages[rightPage].image} alt={"Page " + rightPage} />
                            </div>
                            
                        </div>
                    )
                }
            }
            return panels;
        }
        return (pages())
            
    }
}