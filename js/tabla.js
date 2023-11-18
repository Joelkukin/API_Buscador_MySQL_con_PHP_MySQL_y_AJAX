export default class Tabla{
    array=[];
    html;
    constructor(headers, filas){        
        this.array[0]=headers;
        this.array.push(filas);
        
        this.html = document.createElement("table");
        this.html.innerHTML= 
        `
        <thead>
        <tr>
        <th>${headers.join("</th><th>")}</th>
        
                </tr>
            </thead>
            <tbody>
                <tr class="toggle">
                    <td>${filas.join("</td><td>")}</td>
                    <td style="display:none">
                        <input type="button"id="editarFila" value="Editar"></input>
                        <input type="button"id="eliminarFila" value="Eliminar"></input>
                    </td>
                </tr>
            </tbody>
        `;
        this.array.push(filas);

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
            )}
        )
        
        return this.html;
        
    }
    
    
        
    


}





