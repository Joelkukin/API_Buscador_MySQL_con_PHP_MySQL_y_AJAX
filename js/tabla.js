export function crearTabla(headers, filas){
    let tabla = document.createElement("table");
    tabla.innerHTML= 
    `
        <thead>
            <tr>
                <th>${headers.join("</th><th>")}</th>
            </tr>
        </thead>
        <tbody>
            <tr onclick="mostrarBotones(this)">
                <td>${filas.join("</td><td>")}</td>
                <td style="display:none">
                    <input type="button"id="editarFila" value="Editar"></input>
                    <input type="button"id="eliminarFila" value="Eliminar"></input>
                </td>
            </tr>
        </tbody>
    `;
     
    
    return tabla;
    
}
export function mostrarBotones(element) {
    let iLastChild = element.children.length-1;
    let children = element.children;
    let botones = children[iLastChild]
    
    if(botones.style.display == "none"){
        botones.style.display = "flex";
    }else{botones.style.display = "none";}
}





