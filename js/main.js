import {ajaxJson, ajaxForm} from "../js/ajax.js";
import generartabla from "../js/tabla.js";

// BUSCADOR: lo que se haya escrito en el buscador, buscarlo en la base de datos
let buscador = document.getElementById("formulario");
let placeTabla = document.getElementById("tablaBD");
buscador.inputSearch.addEventListener("keyup", ()=>{
    getData();
} );



function getData()
{
    // tomar el valor del input
    let valBuscado = buscador.inputSearch.value;
    
    // AJAX: preparamos los datos que enviaremos
    let options = {
        funcion: "buscar",
        valores: valBuscado
    };
    // AJAX: enviamos datos
    return ajaxJson( "php/api.php", options )
    
    // guardo la respuesta en resAjaxJson
    .then(resAjaxJson => { 
        
        // transformo la respuesta de texto json a objeto
        let resultado = JSON.parse( resAjaxJson.respuesta ) 
        return resultado
        
    })
    .then(resultado => {
        
        // Transformar el objeto resultado en un array
        let container = document.createElement("div");
        container.appendChild (generartabla(objetoAArreglo(resultado)));
        placeTabla.innerHTML= container.innerHTML;
        
    })
}  

// transformar un objeto en un arreglo
function objetoAArreglo(objetos) {
    // Primero, obtenemos las claves del primer objeto
    var claves = Object.keys(objetos[0]);

    // Luego, mapeamos cada objeto a un array de sus valores
    var valores = objetos.map(function(obj) {
        return Object.values(obj);
    });

    // Finalmente, unimos las claves y los valores en un solo array
    var resultado = [claves].concat(valores);

    return resultado;
}

