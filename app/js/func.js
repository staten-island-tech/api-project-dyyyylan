import { DOMSelectors } from "./dom";
export async function getData() {
    try {
         const response = await fetch('https://api.jikan.moe/v4/seasons/upcoming'); 
         if(response.status != 200){
            throw new Error(response);
         } else {
                const data = await response.json();
                DOMSelectors.container.innerHTML = ""
                data.data.forEach((anime) => DOMSelectors.container.insertAdjacentHTML(
                    'beforeend', `<div class="card">
                    <p class="card-title">${anime.title}</p>
                    <p class="card-description">${anime.type}</p>
                    </div> `))

         }
    } catch(error){ 
        console.log(error);
        console.log("stupid monkey");
    }
}


