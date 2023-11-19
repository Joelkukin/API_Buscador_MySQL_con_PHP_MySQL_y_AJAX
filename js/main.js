import {ajaxJson, ajaxForm} from "../js/ajax.js";
//import Tabla from "../js/tabla.js";

// BUSCADOR: lo que se haya escrito en el buscador, buscarlo en la base de datos
let buscador = document.getElementById("formulario");
let placeTabla = document.getElementById("tablaBD");
buscador.inputSearch.addEventListener("keyup", ()=>{
    getData();
} );
function objetoAArreglo(objetos) {
    //console.log("objetos = ",objetos);
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

function generartabla(entrada){   
    let modelo = entrada;
    let headers = modelo.shift();
    let filas = modelo;
    let filasHtml = "";
    console.log("modelo = ",modelo);
    console.log("headers = ",headers);
    console.log("filas = ",filas);

    // unimos las filas en un solo texto html
    for (let i=0; i < filas.length ; i++){
        filasHtml += filaHtml(filas[i]);
    }

    // creamos el elemento tabla y
    let container = document.createElement("div");
    let tabla = document.createElement("table");
    container.appendChild(tabla)
    // unimos todo como su html
    tabla.innerHTML= 
    `
    <thead>
    <tr>
        <th>
            ${headers.join("</th><th>")}
        </th>
    </tr>
    </thead>
    <tbody>
        ${filasHtml}
    </tbody>
    `;
    console.log("tabla = ",tabla);
    return tabla;
};

function filaHtml(celdas){ // recibe un array
    let celdasArr = celdas;
    let celdasHtml = celdasArr.join("</td><td>"); // unimos las celdas
    let filaHtml = // creamos la fila
    `
    <tr class="toggle">
        <td>${celdasHtml}</td>
        <td style="display:none">
            <input type="button"id="editarFila" value="Editar"></input>
            <input type="button"id="eliminarFila" value="Eliminar"></input>
        </td>
    </tr>
    `
    return filaHtml;
}

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
        let resultado = JSON.parse( resAjaxJson.respuesta ) // transformo la respuesta de texto json a objeto
        return resultado
        
    })
    .then(resultado => {
        // Transformar el objeto resultado en un array
        let container = document.createElement("div");
        container.appendChild (generartabla(objetoAArreglo(resultado)));
        placeTabla.innerHTML= container.innerHTML;
        
    })
}  
// TRANSFORMAR datos en un array procesable por el objeto tabla

