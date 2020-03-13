import React, { Component } from 'react';

export class PageDisplay extends Component{
  
    state = {
   
        
    }
    orient = (page) => { //returns rotate information for className
        if (page.landscape) {
            return "landscape"
        } else { return "portrait"}
    }
   
    render() {
        if (!this.props.loaded) {
            
        }
        const pages = () => {
            let panels;
            const currentPage = this.props.currentPages;
            const issue = this.props.issue;
            const displayAmount = this.props.displayAmount;
            if (!this.props.loaded) {
                panels = <h1>LOADING.</h1>

                
            } else {
                
                if (displayAmount === 1 || currentPage === 0 || currentPage === this.props.issue.pages.length - 1) {
                    panels = (
                        <div className="pages">
                       
                            <div className={"frame single " + this.orient(this.props.issue.pages[currentPage])}>
                            
                                <img onClick={() => { this.props.handleClick(currentPage) }} src={this.props.images[currentPage].src} alt={"Page " + currentPage} />
                            </div>
                    
                            
                        </div>
                    )
                
                } else {
                    let leftPage = currentPage;
                    let rightPage = currentPage + 1
                    panels = (
                        <div className="pages">
                       
                            <div className={"frame " + "Dual " + "left"} >
                                <img onClick={() => { this.props.handleClick(leftPage) }} src={this.props.images[leftPage].src} alt={"Page " + leftPage} />
                            </div>
                   
                            <div className={"frame " + "Dual " + "right"} >
                                <img onClick={() => { this.props.handleClick(rightPage) }} src={this.props.images[rightPage].src} alt={"Page " + rightPage} />
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
