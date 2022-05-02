// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()
import { append2 } from "./fetch.js";
let container=document.getElementById("detailed_news")
let element=JSON.parse(localStorage.getItem("news"))
append2(element,container)
// import { sidebar } from "../components/navbar.js";
// document.getElementById("sidebar").innerHTML=sidebar()


