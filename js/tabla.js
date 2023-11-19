export default class Tabla{
    modelo=[];
    html;
    constructor(...modelo){   
        
        this.modelo = modelo;
        let headers = modelo.shift();
        let filas = modelo;
        let filasHtml = "";
        
        console.log("filas Html= ",filasHtml);
        // unimos las filas en un solo texto html
        for (let i=0; i < filas.length ; i++){
            filasHtml += this.filaHtml(filas[i]);
        }

        // creamos el elemento tabla y
        this.html = document.createElement("table");
        // unimos todo como su html
        this.html.innerHTML= 
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
        this.modelo.push(filas);

        // mostrar/ocultar botones
        let toggles = this.html.querySelectorAll(".toggle");

        toggles.forEach(
            (tr)=>
            {
                tr.addEventListener("click", () =>
                {
                    let iLastChild = tr.children.length-1;
                    let children = tr.children;
                    let botones = children[iLastChild]
                    
                    if(botones.style.display == "none"){
                        botones.style.display = "flex";
                    }else{botones.style.display = "none";}
                }
            )}s
        )
        
        return this.html;
        
    }
    
    filaHtml(celdas){ // recibe un array
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
    
        
    


}





