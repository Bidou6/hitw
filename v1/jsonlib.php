<?php
/* 
    Fonction qui sauve les données dans un fichier au format json
    Retourne false si ne trouve pas le fichier
 */
    function saveData($data, $fileName)
    {
        /* J'encode le tableau $data en json */
        $json = json_encode($data);
    
        /* J'ouvre mon fichier en écriture */
        $fichier = fopen($fileName, "w+");
    
        /*Ecrire dans mon fichier que je viens d'ouvrir */
        fwrite($fichier, $json);
    
        /* On va fermer le fichier */
        fclose($fichier);
    }


/*
    Fonction qui récupère les données d'un json dans une variable
    Retourne false si ne trouve pas le fichier
*/
function getData($fileName)
{
    $readable = false;

    if(file_exists($fileName))
    {
        $fichier = fopen($fileName, "r");
        $fileLength = filesize($fileName);
        $json = fread($fichier, $fileLength);
        $readable = json_decode($json,true);
    }
    return $readable;
}