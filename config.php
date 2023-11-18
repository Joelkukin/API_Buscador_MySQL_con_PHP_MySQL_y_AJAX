<?php
    function consulta($sql){
        $login = [
            "user"=> "root",
            "pswd"=> "", 
            "table"=> "simple_php_api"
        ];
        
        // Conexión a la base de datos
        $mysqli = new mysqli('localhost', $login["user"], $login["pswd"], $login["table"]);
        // Verificar la conexión
        if ($mysqli->connect_error) {
            die("La conexión falló: " . $mysqli->connect_error);
        }
    
        /* ejecutar consulta */
        $datos = $mysqli->query($sql); // retorna un objeto de la clase stmt_result
        $num_rows = $datos->num_rows; // encuentro el nro de filas afectadas por la query
        $resultado = array(); // armamos lo que devolveremos
        if ($num_rows > 0){ // si la consulta me dió resultados
            while($row = $datos->fetch_assoc()){ // creo un array asociativo con los resultados
                $resultado[] = $row;
            }
        } else {
            return "La consulta no ha obtenido resultados";
        }
        return $resultado;
    }

?>