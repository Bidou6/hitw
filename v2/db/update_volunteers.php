<?php
require("connectdblib.php");
require("cors.php");
cors();

$champs=array("firstname","lastname","currentMissionId","gsm_benevole","email");

$bdd=connectdb('hitw',true);


for ($i=0; $i < count($champs) ; $i++) 
{ 
        if(isset($_REQUEST["id_benevole"],$_REQUEST[$champs[$i]]))
    {
        $sql='UPDATE volunteers SET '.$champs[$i].'='.$_REQUEST[$champs[$i]].' WHERE volunteerId='.$_REQUEST["id_benevole"];
        
        $request= $bdd -> query($sql);
        echo $sql;
    }
}




