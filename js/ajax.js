
export function ajaxJson(url, body){
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
        return json
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

