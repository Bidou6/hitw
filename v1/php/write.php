<?php

if(isset($_POST)){
    switch($_POST['type']){
        case "writePosters":
            $fp = fopen('../data/poster.json', 'w');
            fwrite($fp, json_encode($_POST['json']));
            fclose($fp);
            break;
    }
}

?>