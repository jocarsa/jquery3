<?php

    $archivo = file_get_contents("entradas.csv");
    $datosconvertidos = mb_convert_encoding($archivo, 'UTF-8', 'auto');   
    $filas = array_map('str_getcsv', explode(PHP_EOL, $datosconvertidos));
    $columnas = array_shift($filas);
    $datos = array();
    foreach ($filas as $fila) {
        $datos[] = array_combine($columnas, $fila);
    }
    $json = json_encode($datos, JSON_PRETTY_PRINT);
    echo $json;

?>