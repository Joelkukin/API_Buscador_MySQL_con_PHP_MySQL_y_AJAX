import {ajaxJson, ajaxForm} from "../js/ajax.js";
import generartabla from "../js/tabla.js";

// BUSCADOR: lo que se haya escrito en el buscador, buscarlo en la base de datos
let buscador = document.getElementById("formulario");
let placeTabla = document.getElementById("tablaBD");
let modelo
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
        placeTabla.innerHTML = "";
        modelo = null;
        // Transformar el objeto resultado en un array
        console.log("respuesta ajax = ",resultado);
        if(resultado !== "La consulta no ha obtenido resultados"){
            modelo = objetoAArreglo(resultado);
            let tabla = generartabla(modelo)
            console.log("modelo en ajax = ",modelo);
            console.log("placeTabla.innerHtml = ",placeTabla.innerHTML);
            console.log("generartabla(modelo) = ",tabla); // hasta aca todo bien
            console.log(placeTabla.appendChild(tabla)); // aca se imprime mal
        }else{
            placeTabla.innerText = resultado;
        }
        
    })
}  

// transformar un objeto en un arreglo
function objetoAArreglo(array = []) {
    //console.log("array = ", array);

    
    let propiedades = array[0];
    propiedades = [Object.keys(propiedades)];
    console.log("propiedades = ", propiedades);

    let nuevoArreglo = [];

    for (let i = 0; i < array.length; i++) {
        //console.log("\nFOR VUELTA ", i);
        nuevoArreglo[i] = Object.values(array[i])
        
        //console.log("objeto = ", nuevoArreglo[i]);
    }
    console.log("nuevo arreglo = ",nuevoArreglo);
    let modelo = propiedades.concat(nuevoArreglo); 
    console.log("modelo = ",modelo);
    
    return modelo;
}
 getData();

