import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { getData } from "./func";

DOMSelectors.input.value = "anime";

getData();


DOMSelectors.button.addEventListener("click", function(){
    DOMSelectors.container.innerHTML = "";
    getData();
})