import { DOMSelectors } from "./dom";
import "../styles/style.css";
export async function getData() {
    try {
         const response = await fetch('https://api.jikan.moe/v4/top/anime?sfw'); 
         if(response.status != 200){
            throw new Error(response);
         } else {
                const data = await response.json();
                console.log(data.data);
                data.data.forEach((anime) => DOMSelectors.container.insertAdjacentHTML(
                    'beforeend',     
                    `<div class="card w-1/2 bg-base-100 bg-opacity-50 shadow-lg">
                    <img src="${anime.images.jpg.image_url}" alt="img" class="card-img rounded-lg p-0 border h-auto mx-auto">
                  <div class="card-content">
                  <p class="card-title text-center">${anime.title}</p>
                  <p class="card-description text-center">${anime.status}</p>
                  </div> `,))

         }
    } catch(error){ 
        console.log(error);
        console.log("stupid monkey");
    }
}



