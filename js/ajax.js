
export function ajaxJson(url, body){// body tiene que ser si o si un objeto json y url un string
    
    // PETICIÓN
    return fetch(url,{ // hacemos la peticion http por ajax
        method:"POST", 
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(body) // convertimos el objeto body en un string
    })
    // RESPUESTA
    .then(response => response.json())
    .then(json => {
        // transformo la respuesta de texto json a objeto
        let resultado = JSON.parse( json.respuesta ) 
        return resultado
        
    })
    .catch((error) => {
        console.log('Error:', error);
    });
} 

export function ajaxForm(url, form){
    fetch(url,{
        method:"POST",
        body: new FormData(form)
    })
    .then( response => response.json())
    .then(datos => {
        return datos})
    .catch((error) => {
        console.log('Error:', error);
    });
}

