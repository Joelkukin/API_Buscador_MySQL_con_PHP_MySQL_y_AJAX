import {crearTabla, mostrarBotones} from "../js/tabla.js";

window.mostrarBotones = mostrarBotones;
window.crearTabla = crearTabla;

let placeTabla = document.querySelector("#tablaBD");
placeTabla.appendChild(
    crearTabla(
    ["id_post", "id_clase", "contenido", "likes", "fecha", "hora"],
    ["", "", "", "", "", ""]
    )
);

