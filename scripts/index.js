// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()
import { sidebar } from "../components/navbar.js";
document.getElementById("sidebar").innerHTML=sidebar()

let container=document.getElementById("results")



let displayindia=()=>{
    container.innerHTML=null;
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"
    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res.articles)

            append(res.articles,container) ;
        })
        
}

let displaychina=()=>{
    container.innerHTML=null;
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch"
    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res.articles)

            append(res.articles,container) ;
        })
        
}

let displayusa=()=>{
    container.innerHTML=null;
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=us"
    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res.articles)

            append(res.articles,container) ;
        })
        
}

let displayuk=()=>{
    container.innerHTML=null;
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk"
    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res.articles)

            append(res.articles,container) ;
        })
        
}

let displaynz=()=>{
    container.innerHTML=null;
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz"
    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res.articles)

            append(res.articles,container) ;
        })
        
}

document.getElementById("india").addEventListener("click",displayindia)
document.getElementById("china").addEventListener("click",displaychina)
document.getElementById("usa").addEventListener("click",displayusa)
document.getElementById("uk").addEventListener("click",displayuk)
document.getElementById("nz").addEventListener("click",displaynz)





        




document.getElementById("search_input").addEventListener("keypress",myFunction)



function myFunction(event){
    
    if(event.key==="Enter"){
        

        window.location.href="search.html"

        var query=document.getElementById("search_input").value;
        

        localStorage.setItem("q",JSON.stringify(query))
        // fetch(url)
        // .then((res)=>{
        //     return res.json();
        // })
        // .then((res)=>{
        //     console.log(res.articles)

        //     append(res.articles,container) ;
        // })
        
    }
}


import {append} from "../scripts/fetch.js"


