import { DOMSelectors } from "./dom";
export async function getData() {
    try {
         const response = await fetch('https://api.jikan.moe/v4/top/anime?sfw'); 
         if(response.status != 200){
            throw new Error(response);
         } else {
                const data = await response.json();
                console.log(data.data);
                DOMSelectors.container.innerHTML = ""
                data.data.forEach((anime) => DOMSelectors.container.insertAdjacentHTML(
                    'beforeend',     
                    `<div class="card">
                    <img src="${anime.images.jpg.image_url}" alt="img" class="card-img">
                  <div class="card-content">
                  <p class="card-title">${anime.title}</p>
                  <p class="card-description">${anime.status}</p>
                  </div> `,))

         }
    } catch(error){ 
        console.log(error);
        console.log("stupid monkey");
    }
}



