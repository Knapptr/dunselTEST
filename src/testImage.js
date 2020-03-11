import React from 'react';

export const ImageTest = () => {
    let testImage = new Image();
    testImage.src = './imgs/dunsel1/1-0.png'
    testImage.alt = "didn't load"
    return (
        <div className={"sliderHeader"}>
            <h1>{testImage.height}</h1>
            <h1>{testImage.width}</h1>
            <img className={testImage.height>testImage.width?"flip":"normal"}src={testImage.src} alt={testImage.alt}/>
        </div>
    )
}