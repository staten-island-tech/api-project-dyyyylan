import { DOMSelectors } from "./dom";
import "../styles/style.css";

let input = document.querySelector('.input');
export async function getData() {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/top/${input.value}`); 
        if(response.status != 200){
            throw new Error(response);
        } else {
            const data = await response.json();
            console.log(input.value)
                console.log(data.data);
                data.data.forEach((anime) => DOMSelectors.container.insertAdjacentHTML(
                    'beforeend',     
                    `<div class="card w-[50%] sm:w-[50%] lg:w-[20%] h-[100%] rounded-[20px] bg-base-100 bg-opacity-50 shadow-lg ">
                    <img src="${anime.images.jpg.image_url} " alt="img" class="card-img rounded-t-[20px] w-full">
                  <div class="card-content text-center">
                  <p class="card-title">${anime.title ?? ''} ${anime.name ?? ''}</p>
                  <p class="card-description ">${anime.status ?? ''} </p>
                  <a href="${anime.url}" target="_blank" class="bg-gray-500 hover:bg-gray-700 text-white font-bold px-6 rounded">Info</a>
                  </div> `,))
         }
    } catch(error){ 
        console.log(error);
        alert("stupid api link wrong");
    }
}



