<?php  
$fp = fopen('mapa.csv', 'a');//opens file in append mode  
fwrite($fp, PHP_EOL .$_GET['posx'].",".$_GET['posy']);   
fclose($fp);  
  
echo "File appended successfully";  
?>  