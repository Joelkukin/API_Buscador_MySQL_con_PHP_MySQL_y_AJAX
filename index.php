<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <title>Buscador MySql realTime</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body class="container">
    <h2>Base de datos Posts</h2>
    <div class="row justify-content-center">
        <!-- esta es una aplicación web que a medida que se escribe en el buscador va buscando en la base de datos -->
        <form class="col row m-2 mb-4" action="" method="post" id="formulario">
            <input class="col" type="text" name="inputSearch" id="inputSearch" placeholder="Buscar">
        </form>
    </div>
    
    <div class="container-fluid">
        <div id="tablaBD" class="row"></div>
    </div>

<script src="./js/main.js" type="module">
    
</script>

</body>
</html>