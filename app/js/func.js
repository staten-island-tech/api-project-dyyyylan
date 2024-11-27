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
                    `<div class="card w-[60%] h-[100%] rounded-lg bg-base-100 bg-opacity-50 shadow-lg">
                    <img src="${anime.images.jpg.image_url}" alt="img" class="card-img mt-2 w-[100%] mx-auto">
                  <div class="card-content text-center">
                  <p class="card-title ">${anime.title}</p>
                  <p class="card-description ">${anime.status}</p>
                  </div> `,))
         }
    } catch(error){ 
        console.log(error);
        console.log("stupid monkey");
    }
}



