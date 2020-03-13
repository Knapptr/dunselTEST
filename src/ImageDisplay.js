import React, { Component } from 'react';
import './ImageDisplay.css';
import IM from './imgs/DUNSEL1/1-0.png'


export class ImageDisplay extends Component{
    state = {
        loaded: false
    }
    imageLoaded = () => {
    this.setState({loaded:true})
    }
    loadImages = (amt) => {
        let imagesArray = []
        for (let i = 0; i < amt; i++) {
            let image = new Image()
            if (i === 3) {
                
                image.onload = ()=>{
                    this.setState({ images: imagesArray }, this.imageLoaded)
                
                }
            }
            imagesArray.push(image)
            console.log(imagesArray)
            }
        for (let i = 0; i < amt; i++) {
                console.log('hello!')
                imagesArray[i].src = `https://picsum.photos/${1000 + i}/5000`
            }
        
       
        }
    
    render() {
    
    
        if (!this.state.loaded) {
            this.loadImages(4);
            return (<h1>Loading...</h1>)
        }
        else {
            return (
                <div>
                    <h1>working</h1>
                    
                    <img src={this.state.images[0].src} alt="loadedImg" />
                    <img src={this.state.images[3].src} alt="image2" />

                </div>
            )
            
        }
    }
}