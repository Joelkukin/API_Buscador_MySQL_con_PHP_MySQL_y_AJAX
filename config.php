<?php
$http = new mysqli("localhost","root","","Timidudas");

$columnas = [
    "clases" => ["id_clase","titulo","fecha","materia","profesor"],
    "posts" => ["id_post", "id_clase", "contenido", "likes", "fecha", "hora"]
];

if($http->connect_error){
    die("error al conectar con BD: ". $http->connect_error);
}

function consulta($modo="", ...$datos){
    global $http;
    $opcion = [
        "crear" => "",
        "leer"=> "",
        "modificar" => "",
        "borrar" => ""
    ];
}
?>