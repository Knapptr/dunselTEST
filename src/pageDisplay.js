import React, { Component } from 'react';

export class PageDisplay extends Component{
    state = {
        screenWidth: window.innerWidth,
    }
    updateWidth=()=>{
        this.setState({screenWidth:window.innerWidth})
    }
    componentDidMount() {
        this.updateWidth();
        window.addEventListener('resize',this.updateWidth)
    }
    componentWillUnmount() {
        window.removeEventListener('resize',this.updateWidth)
    }
    
    render() {
        const pages = () => {
            let panels;
            if (this.state.screenWidth < 900) {
                panels = (
                    <div className="pages">
                       
                    <div className="frame">
                        <img src={this.props.issue.pages[1].url} alt={this.props.issue.pages[0].url} />
                    </div>
                    
                            
                    </div>
                )
                
            } else {
                panels = (
                    <div className="pages">
                       
                    <div className="frame">
                        <img src={this.props.issue.pages[1].url} alt={this.props.issue.pages[0].url} />
                    </div>
                   
                    <div className="frame">
                        <img src={this.props.issue.pages[2].url} alt={this.props.issue.pages[2].url}/>
                    </div>
                            
                </div>
                )
            }
            return panels;
        }
        return (pages())
            
    }
}