import {ajaxJson, ajaxForm} from "../js/ajax.js";
import Tabla from "../js/tabla.js";

// BUSCADOR: lo que se haya escrito en el buscador, buscarlo en la base de datos
let buscador = document.getElementById("formulario");
let placeTabla = document.getElementById("tablaBD");
let modelo
buscador.inputSearch.addEventListener("keyup", ()=>{
    getAllData();
} );



function getAllData()
{
    // tomar el valor del input
    let valBuscado = buscador.inputSearch.value;
    
    // AJAX: preparamos los datos que enviaremos
    
    let options = {
        funcion: "buscar", // OPCIONES: buscar, editar, borrar, crear
        valores: valBuscado
    };
    // AJAX: enviamos datos
    return ajaxJson( "php/api.php", options )
    .then(resultado => {
        placeTabla.innerHTML = "";
        modelo = null;
        // Transformar el objeto resultado en un array
        
        if(resultado !== "La consulta no ha obtenido resultados"){
            modelo = objetoAArreglo(resultado);
            let tabla = new Tabla(modelo);
            console.log("tabla generada = ",tabla);
            placeTabla.appendChild(tabla.html)
        }else{
            placeTabla.innerText = resultado;
        }
        
    })
}  

// transformar un objeto en un arreglo
function objetoAArreglo(array = []) {
    
    let propiedades = array[0];
    propiedades = [Object.keys(propiedades)];

    let nuevoArreglo = [];

    for (let i = 0; i < array.length; i++) {

        nuevoArreglo[i] = Object.values(array[i])
        

    }
    let modelo = propiedades.concat(nuevoArreglo); 
    
    return modelo;
}
 getAllData();

