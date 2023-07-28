<?php  
    $fp = fopen('entradas.csv', 'a'); 
    move_uploaded_file($_FILES["archivo"]["tmp_name"], "imagenes/".basename($_FILES["archivo"]["name"]));
    fwrite($fp, PHP_EOL .''.date('Y').'-'.date('m').'-'.date('d').',"'.$_POST['titulo'].'","'.nl2br(str_replace("\n", "", $_POST['texto'])).'","'.$_FILES["archivo"]["name"].'","'.$_POST['autor'].'"');   
    fclose($fp);   
?>  