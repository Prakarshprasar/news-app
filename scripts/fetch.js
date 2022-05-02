let append=(data,container)=>{
    

    data.forEach((el)=>{

        let div=document.createElement("div");
        div.setAttribute("class","news")
        div.addEventListener("click",function(){
            // localStorage.setItem("news",JSON.stringify(el))
            displaytonews(el)
        })
        let img=document.createElement("img");
        img.src=el.urlToImage;
        let h3=document.createElement("h3");
        h3.innerText=el.title;
        let p=document.createElement("p");
        p.innerText=el.description;
        div.append(img,h3,p)
        container.append(div)
    })

    

    
}
let displaytonews=(el)=>{
    console.log(el)
    localStorage.setItem("news",JSON.stringify(el))
    window.location.href="news.html"
}

let append2=(element,container)=>{
    
    let img=document.createElement("img");
    img.src=element.urlToImage;
    let h3=document.createElement("h3");
    h3.innerText=element.title;
    let p=document.createElement("p");
    p.innerText=element.content;
    container.append(img,h3,p);
}
export{append,append2}