import "../styles/style.css";
import { DOMSelectors } from "./dom";

async function getData() {
    try {
         const response = await fetch('https://api.jikan.moe/v4/seasons/upcoming'); 
         if(response.status != 200){
            throw new Error(response);
         } else {
                const data = await response.json();
                console.log(data)
         }
    } catch(error){ 
        console.log(error);
        console.log("stupid monkey");
    }
}

getData();

function makecard(data) {
    DOMSelectors.container.insertAdjacentHTML(

    )
}