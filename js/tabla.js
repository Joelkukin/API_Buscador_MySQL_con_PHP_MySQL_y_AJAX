
export default function generartabla(entrada){   
    
    function filaToHtml(entrada){ // recibe un array con los valores de cada celda
        console.log("entrada = ", entrada);
        // ARMADO DE FILA
        let fila = document.createElement("tr");
        
        // GRUPO DE CELDAS
        let celdas = entrada;
        
    
        
        // transformamos las celdas
        for(let i = 0; i < celdas.length; i++){
            
            // transformo cada celda de texto a html
            let celda = document.createElement("td");
            
            
            // añadimos los botones a la fila
            if(typeof celdas[i] == typeof "string"){ //si la el valor de la celda es un string...
                // la asignamos a la celda como texto
                celda.textContent = celdas[i]; 
                
                // al hacer click sobre la celda, se mostraran u ocultaran los botones de la fila
                celda.addEventListener("click",()=>{ 
                    
                    // mostrar/ocultar botones
                    if(botones.style.display == "none"){
                        botones.style.display = "flex";
                    }else{botones.style.display = "none";}
                });
                
            // si el valor dela la celda es un nodo...
            } else if(typeof celdas[i] == typeof celda){ 

                // la asignamos a una celda como hijo directamente
                celda.appendChild(celdas[i]); 

                // al hacer click sobre la celda, se mostraran u ocultaran los botones de la fila
                celda.addEventListener("click",(e)=>{ 
                    // mostrar/ocultar botones
                    if(botones.style.display == "none"){
                        botones.style.display = "flex";
                    }else{botones.style.display = "none";}
                    console.log("celda ",celda," presionada");
                });
            }
            fila.appendChild( celda );
        }
        // creamos los botones
        let botones = document.createElement("td");
        botones.style.display="none";
        botones.innerHTML = 
        `
            <input type="button"id="editarFila" value="Editar"></input>
            <input type="button"id="eliminarFila" value="Eliminar"></input>
        `;
        fila.appendChild(botones);
        
       
        return fila;
    };

    // Separo los headers del contenido
    let modelo = entrada;
    let headers = modelo.shift();
    let filas = modelo;

    // creamos el elemento tabla y
    let container = document.createElement("div");
    let tabla = document.createElement("table");
    container.appendChild(tabla);
    
    // Creamos plantilla html de la tabla y unimos todo como su html
    tabla.innerHTML= 
    `
    <thead>
        <tr>
        </tr>
    </thead>
    <tbody>
    
    </tbody>
    `;
    
    let thead = tabla.querySelector("thead tr");
    console.log("headers = ",headers);
    headers.forEach(header => {
        let titulo = document.createElement("th");
        titulo.innerText = header;
        thead.appendChild(titulo)
    });
    
    let tbody = tabla.querySelector("tbody");
    
    for (let i = 0; i < filas.length; i++) {
        let fila = filas[i];
        fila = filaToHtml(fila);
        
        //tabla.querySelector("tbody").appendChild(filaToHtml(fila))
        
       
        tbody.appendChild(fila);
    }

    return tabla;
};

