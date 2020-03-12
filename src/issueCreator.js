import React from 'react'
 const importAll =(r)=>{  
 let images = {};
 r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
 return images;
}


export const createIssue = (issueNumber, pages, landscapeArray) => {
 
    const images = importAll(require.context(`./imgs/`, true, /\.(png|jpe?g|svg)$/));
    console.log(images)

    const pagesAssigner = () => {
        let pagesArray=[]
        for (let p = 0; p <= pages; p++) {
            let image = new Image()
            image.src = images[("DUNSEL" + issueNumber + "/" + issueNumber + "-" + p + ".png")];
            let landscape = false;
            if(landscapeArray.includes(p)){landscape = true}
            let newPage ={
                number: p,
                image: image,
                landscape
                

                
            }
            pagesArray.push(newPage)
            
        }
        return pagesArray;
    }

    return {
        issueNumber,
        pages: pagesAssigner()
    }
 }