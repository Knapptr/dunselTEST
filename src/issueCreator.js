export const createIssue = (issueNumber, pages) => {

    const pagesAssigner = () => {
        let pagesArray=[]
        for (let p = 0; p <= pages; p++){
            let newPage ={
                number: p,
                url: ("./imgs/Dunsel"+issueNumber+"/"+issueNumber+"-"+p+".png")
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