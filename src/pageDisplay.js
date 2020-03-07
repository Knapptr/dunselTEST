import React, { Component } from 'react';

export class PageDisplay extends Component{
  
    
    render() {
        const pages = () => {
            let panels;
            const currentPage = this.props.currentPages;
            const issue = this.props.issue;
            const displayAmount = this.props.displayAmount;
            if (displayAmount ===1) {
                panels = (
                    <div className="pages">
                       
                    <div className="frame">
                        <img src={this.props.issue.pages[currentPage].url} alt={"Page "+currentPage} />
                    </div>
                    
                            
                    </div>
                )
                
            } else {
                let leftPage = currentPage;
                let rightPage = currentPage+1
                panels = (
                    <div className="pages">
                       
                    <div className="frame">
                        <img src={this.props.issue.pages[leftPage].url} alt={"Page "+ leftPage} />
                    </div>
                   
                    <div className="frame">
                        <img src={this.props.issue.pages[rightPage].url} alt={"Page "+rightPage}/>>
                    </div>
                            
                </div>
                )
            }
            return panels;
        }
        return (pages())
            
    }
}