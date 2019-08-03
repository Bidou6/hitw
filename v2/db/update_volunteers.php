<?php
require("connectdblib.php");
require("cors.php");
cors();

$champs=array("firstname","lastname","currentMissionid","gsm_benevole","email");

$bdd=connectdb('hitw',true);


for ($i=0; $i < count($champs) ; $i++) 
{ 
        if(isset($_REQUEST["id"],$_REQUEST[$champs[$i]]))
    {
        $sql='UPDATE missions SET '.$champs[$i].'="'.$_REQUEST[$champs[$i]].'" WHERE id='.$_REQUEST["id"];
        $request= $bdd -> query($sql);
    }
}




