<?php
    $termino = $_GET['termino'];
    $archivo = file_get_contents("traductor.csv");
    $datosconvertidos = mb_convert_encoding($archivo, 'UTF-8', 'auto');   
    $filas = array_map('str_getcsv', explode(PHP_EOL, $datosconvertidos));
    $columnas = array_shift($filas);
    $datos = array();
    foreach ($filas as $fila) {
        if(strpos(strtolower(implode(",",$fila)), strtolower($termino))){
            $datos[] = array_combine($columnas, $fila);
        }
    }
    $json = json_encode($datos, JSON_PRETTY_PRINT);
    echo $json;

?>