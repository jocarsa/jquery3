<?php  
    $fp = fopen('mapa.csv', 'w');//opens file in append mode  
    fwrite($fp, $_GET['posiciones']);   
    fclose($fp);    
?>  