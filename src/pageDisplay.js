import React, { Component } from 'react';

export class PageDisplay extends Component{
  
    orient = (page) => { //returns rotate information for className
        if (page.landscape) {
            return "landscape"
        } else { return "portrait"}
    }
    render() {
        const pages = () => {
            let panels;
            const currentPage = this.props.currentPages;
            const issue = this.props.issue;
            const displayAmount = this.props.displayAmount;
            if (displayAmount ===1 || currentPage===0 || currentPage===this.props.issue.pages.length-1) {
                panels = (
                    <div className="pages">
                       
                        <div className={"frame single "+this.orient(this.props.issue.pages[currentPage])}>
                            
                            <img onClick={()=>{this.props.handleClick(currentPage)}} src={this.props.issue.pages[currentPage].image.src} alt={"Page "+currentPage} />
                    </div>
                    
                            
                    </div>
                )
                
            } else {
                let leftPage = currentPage;
                let rightPage = currentPage+1
                panels = (
                    <div className="pages">
                       
                    <div className={"frame "+"Dual " +"left"} >
                            <img onClick={()=>{this.props.handleClick(leftPage)}}src={this.props.issue.pages[leftPage].image.src} alt={"Page "+ leftPage} />
                    </div>
                   
                        <div className={"frame "+"Dual "+"right"} >
                        <img  onClick={()=>{this.props.handleClick(rightPage)}}src={this.props.issue.pages[rightPage].image.src} alt={"Page "+rightPage}/>
                    </div>
                            
                </div>
                )
            }
            return panels;
        }
        return (pages())
            
    }
}