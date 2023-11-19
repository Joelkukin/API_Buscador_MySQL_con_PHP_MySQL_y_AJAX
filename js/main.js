import {ajaxJson, ajaxForm} from "../js/ajax.js";
import Tabla from "../js/tabla.js";

// BUSCADOR: lo que se haya escrito en el buscador, buscarlo en la base de datos
let buscador = document.getElementById("formulario");
buscador.inputSearch.addEventListener("keyup", getData );

function getData()
{
    let valBuscado = buscador.inputSearch.value;
    
    // AJAX: preparamos los datos que enviaremos
    let options = {
        funcion: "buscar",
        valores: valBuscado
    };
    // AJAX: enviamos datos
    return ajaxJson( "php/api.php", options )
    .then(resAjaxJson => { // guardo la respuesta en resAjaxJson
        console.log(resAjaxJson.message);
        console.log(JSON.parse(resAjaxJson.respuesta));
        
        return JSON.parse( resAjaxJson.respuesta ) // transformo la respuesta de texto json a objeto
    } ) 
}

// TRANSFORMAR datos en un array procesable por el objeto tabla

// TABLA pinta los datos en forma de tabla
let tabla = new Tabla(
    ["id_post", "id_clase", "contenido", "likes", "fecha", "hora"],
    ["A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B", "B"]
);

let placeTabla = document.querySelector("#tablaBD");
placeTabla.appendChild(tabla);
