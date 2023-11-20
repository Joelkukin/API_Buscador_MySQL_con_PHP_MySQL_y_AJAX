export default function generartabla(entrada){   

    function filaToHtml(entrada){ // recibe un array con los valores de cada celda
        // grupo de celdas
        let celdas = entrada;
        let celdasHtml = [];

        // creamos los botones
        let botones = document.createElement("td");
        botones.innerHTML = 
        `
        <td style="display:none">
        <input type="button"id="editarFila" value="Editar"></input>
        <input type="button"id="eliminarFila" value="Eliminar"></input>
        </td>
        `;
        // transformamos las celdas
        for (let i = 0; i < celdas; i++){
            console.log("botones",botones);
            console.log("for funcionando");
            // transformo cada celda de texto a html
            celda = document.createElement("td")
                .appendChild(celda);
            
            console.log("celda ",i," = ",celda);
            // al hacer click en la celda
            celda.addEventListener("click",(event)=>{ 
                
                // mostrar/ocultar botones
                if(botones.style.display == "none"){
                    botones.style.display = "flex";
                }else{botones.style.display = "none";}
            });

            // la guardo en celdasHtml
            celdasHtml[i] = celda
        }

        // añadimos los botones a la fila
        celdas.push(botones);
        // retorno un array con nodos celda
        return celdas;
    };

    // Separo los headers del contenido
    let modelo = entrada;
    let headers = modelo.shift();
    let filas = modelo;
    let filasHtml = [];

    console.log("modelo = ",modelo);
    console.log("headers = ",headers);
    console.log("filas = ",filas);

    // unimos las filas en un solo texto html {
        // transformo cada fila en html
    for (let i=0; i < filas.length ; i++){
        filasHtml.push( filaToHtml(filas[i]) );
    }

    // creamos el elemento tabla y
    let container = document.createElement("div");
    let tabla = document.createElement("table");
    container.appendChild(tabla);
    console.log("filas Html = ", filasHtml);
    // Creamos plantilla html de la tabla y unimos todo como su html
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
    for (let i = 0; i < filasHtml.length; i++) {
        let fila = filasHtml[i];
        console.log("fila ",i," = ", fila )
        console.log("filaToHtml( fila ",i,") = ",filaToHtml(fila))
        //tabla.querySelector("tbody").appendChild(filaToHtml(fila))
        
    }


    return tabla;
};

