export const createIssue = (issueNumber, pages,landscapeArray) => {

    const pagesAssigner = () => {
        let pagesArray=[]
        for (let p = 0; p <= pages; p++){
            let image = new Image();
            image.src = ("./imgs/Dunsel" + issueNumber + "/" + issueNumber + "-" + p + ".png");
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