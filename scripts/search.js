// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()
// import { sidebar } from "../components/navbar.js";
// document.getElementById("sidebar").innerHTML=sidebar()

let query=JSON.parse(localStorage.getItem("q"));


let container=document.getElementById("results")

// let query=document.getElementById("search_input").value;
        let url=`https://masai-mock-api.herokuapp.com/news?q=${query}`
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res.articles)

            append(res.articles,container) ;
        })

// append()

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


container.innerHTML=null;
import {append} from "../scripts/fetch.js"
