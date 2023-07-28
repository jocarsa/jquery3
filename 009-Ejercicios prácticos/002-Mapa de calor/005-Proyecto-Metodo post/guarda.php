<?php  
    $fp = fopen('mapa.csv', 'a');//opens file in append mode  
    fwrite($fp, PHP_EOL .$_POST['posiciones']);   
    fclose($fp);    
?>  