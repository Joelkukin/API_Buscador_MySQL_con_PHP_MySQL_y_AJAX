# Diagrama de flujo del código JavaScript

Este diagrama de flujo muestra cómo las funciones `ajaxJson` y `ajaxForm` realizan peticiones HTTP utilizando la función `fetch` de JavaScript. Ambas funciones manejan las respuestas y los errores de manera similar, pero difieren en la forma en que preparan el cuerpo de la solicitud. La función `ajaxJson` convierte un objeto JSON en una cadena, mientras que `ajaxForm` utiliza `FormData` para preparar el cuerpo de la solicitud. Ambas funciones devuelven los datos de la respuesta o registran el error en la consola.

```mermaid
graph TB
    A["ajaxJson(url, body)"] --> B["fetch(url, {method:'POST', headers:{'content-type': 'application/json'}, body:JSON.stringify(body)})"]
    B --> C["response.json()"]
    C --> D["return json"]
    D --> E["catch((error) => {console.log('Error:', error);})"]
    F["ajaxForm(url, form)"] --> G["fetch(url, {method:'POST', body: new FormData(form)})"]
    G --> H["response.json()"]
    H --> I["return datos"]
    I --> J["catch((error) => {console.log('Error:', error);})"]




