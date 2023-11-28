<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <title>Buscador MySql realTime</title>
    <style>
        table, th, td {
            border: 1px solid;
        }
    </style>
</head>
<body>
    <h2>Base de datos Posts</h2>
    <!-- esta es una aplicación web que a medida que se escribe en el buscador va buscando en la base de datos -->
    <form action="" method="post" id="formulario">
        <label for="inputSearch">Buscar: </label>
        <input type="text" name="inputSearch" id="inputSearch" placeholder="Buscar">
    </form>
    <div id="tablaBD"></div>

<script src="./js/main.js" type="module">
    
</script>

</body>
</html>