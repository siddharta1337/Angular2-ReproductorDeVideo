<?php

/// CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

header("Content-Type: application/json");

include_once('../comun/db.php');

function lista_de_video(){
    global $enlace;

    $resultado =  mysqli_query($enlace,"SELECT * FROM videos");

    while ($fila = mysqli_fetch_array($resultado)) {
        $todosLosVideos[] = $fila;
    }

     return $todosLosVideos;

}

if($_SERVER['REQUEST_METHOD'] === 'GET'){

    $resultado = lista_de_video();

}else{
     header('HTTP/1.1 405 Method Not Allowed');
    exit;
}



echo json_encode( $resultado );



?>