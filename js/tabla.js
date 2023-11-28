
export default function generartabla(entrada){   // => tabla:DOMElement
    
    // Separo los headers del contenido
    let modelo = entrada;
    let headers = modelo.shift();
    let filas = modelo;

    // creamos el elemento tabla y
    let container = document.createElement("div");
    let tabla = document.createElement("table");
    tabla.classList.add("table");
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
    // construimos los encabezados
    let thead = tabla.querySelector("thead tr");

    headers.forEach(header => {
        let titulo = document.createElement("th");
        titulo.innerText = header;
        thead.appendChild(titulo)
    });
    
    // Construimos el contenido
    let tbody = tabla.querySelector("tbody");
    
    for (let i = 0; i < filas.length; i++) {
        let fila = filas[i];
        fila = crearFila(fila);
       
        tbody.appendChild(fila);
    }
    
    return tabla;
};
function crearFila(valores_celdas = []){ // recibe un array con los valores de cada celda
    
    // a partir del modelo creamos el contenido de la fila
    let fila_nueva = document.createElement("tr");
    
    // creamos las celdas
    for(let i = 0; i < valores_celdas.length; i++){
        let celda = document.createElement("td");

        // asignamos los valores a las celdas
        if(typeof valores_celdas[i] == typeof "string"){ //si la el valor de la celda es un string...
            // asignamos el valor como texto
            celda.innerHTML = valores_celdas[i]; 
            
        // si el valor dela la celda es un nodo...
        } else if(typeof valores_celdas[i] == typeof celda){ 
            // asignamos el valor como nodo
            celda.appendChild(valores_celdas[i]); 
        }

        // encajamos la celda en la fila
        fila_nueva.appendChild( celda );
    }      

    // creamos los botones
    let botones = document.createElement("td");
    botones.className = "botones";
    botones.style.display="none";
    botones.innerHTML = 
    `
        <input type="button"id="editar" value="Editar"></input>
        <input type="button"id="eliminar" value="Eliminar"></input>
        <input type="button"id="cancelar" value="Cancelar"></input>
    `;

    fila_nueva.appendChild(botones);

    // al hacer click sobre la fila, ésta se convertirá en editable
    fila_nueva.addEventListener("click",()=>{ 
        // si los botones estan significa que la fila es editable, si no estan, la fila es estatica
        let esta_fija = botones.style.display == "none"
        if(esta_fija){
            hacerEditable(fila_nueva)
        }
    });
    
    return fila_nueva;
};

// esta funcion transforma la fila en editable y luego la transforma en fija al hacer click en cualquiera de los botones
function hacerEditable(fila_original){ // => void
    const tabla = fila_original.parentNode;
    // transformamos la fila original en una fila editable, para eso reemplazamos el valor de cada celda con un input
    let inputs_txt_html = []
    let backup = [];
    
    // guardo los datos de la fila original y con ellos armo la fila editable
    for(let i=0; i < fila_original.children.length-1; i++){ //  -1 porque no quiero que toque los botones
        
        // extraigo los valores de las celdas originales
        let celda_original = fila_original.children[i];
        
        // hago backUp
        backup.push(celda_original);

        // reemplazo las celdas originales por inputs
        inputs_txt_html.push(`<input type="text" style="border: none; width: 98%;" value="${celda_original.innerHTML}"></input>`);
    }

    // reemplazo la fila original por la fila editable
    let fila_nueva = crearFila(inputs_txt_html);
    try {
        tabla.replaceChild(fila_nueva, fila_original);
    } catch (error) {}

    // transformo la fila editable en fila normal con datos modificados
    // la definición de los datos nuevos depende del boton seleccionado

    // definimos la funcionalidad de los botones editar, eliminar y cancelar
    let botones = fila_nueva.querySelector(".botones");
    botones.style.display = "flex";
    let fila_editada;
    // editar reemplaza los inputs por los valores escritos en éstos
    let btnEditar = fila_nueva.querySelector("#editar");
        btnEditar.addEventListener("click",()=>{

            // obtener valores de los inputs
            let celdas_con_inputs = fila_nueva.children
            let valores_de_inputs = []
            
            for (let i = 0; i < celdas_con_inputs.length -1; i++) {
                let input = celdas_con_inputs[i].querySelector("input");
                let valor = input.value;
                valores_de_inputs[i] = valor;
            }

            // crear fila con los valores de los inputs
            fila_editada = crearFila(valores_de_inputs);
            let tabla = fila_nueva.parentNode

            // reemplazar la fila original por la nueva
            tabla.replaceChild(fila_editada, fila_nueva);
            
            // ocultar botones
            botones.style.display = "none"
        })

    // cancelar reemplaza los inputs por el valor que tenían
    let btnCancelar = fila_nueva.querySelector("#cancelar");
        btnCancelar.addEventListener("click", ()=> {
            // reemplazo la fila editable por la original

            fila_nueva.replaceWith(fila_original)
        });
    // eliminar borra la fila en cuestion
    let btnEliminar = fila_nueva.querySelector("#eliminar");
        btnEliminar.addEventListener("click", ()=> fila_nueva.remove() );

    
  
    
}


