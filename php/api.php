<?php
require_once "config.php";
// Aseguramos que estamos esperando una solicitud POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtenemos los datos JSON de la solicitud
    $json = file_get_contents('php://input');

    // Decodificamos los datos JSON a un objeto PHP
    $obj = json_decode($json, true); // le ponemos true para que devuelva un array asociativo (el equivalente a un objeto en js)
    //echo $obj['valores'];
    // Aquí puedes trabajar con $obj como un array asociativo de PHP

    // Hacemos la consulta a la base de datos
    $datos = consulta("SELECT * FROM items WHERE nombre LIKE '%". $obj['valores']."%'");
    // Creamos un objeto de respuesta
    $respuesta = array(
        'status' => 'ok',
        'message' => 'Datos recibidos correctamente',
        'respuesta' => json_encode($datos)
    );

    // Enviamos la respuesta como un objeto JSON
    echo json_encode($respuesta);
} else {
    // Si no es una solicitud POST, devolvemos un error
    http_response_code(405);
    echo json_encode(array('error' => 'Método no permitido'));
}


?>