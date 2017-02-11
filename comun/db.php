<?php

global $enlace;

$enlace = mysqli_connect('localhost', 'root', 'root', 'sitio_videos' );


if(!$enlace){
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
}


?>