<?php
require("connectdblib.php");
require("cors.php");
cors();



$bdd=connectdb('hitw',true);




if(isset($_REQUEST["lng"],$_REQUEST["lat"],$_REQUEST["missionId"],$_REQUEST["volunteerId"]))
{
   //recuperer les params et les enregistrer dans des variables
    $lng = $_REQUEST["lng"] ; 
    $lat = $_REQUEST["lat"] ; 
  
    $missionId = $_REQUEST["missionId"] ; 
    $volunteerId = $_REQUEST["volunteerId"] ; 
   // $status = $_REQUEST["status"]; 
 
    //requete sql
    $sql = "INSERT INTO `posters`(`lng`, `lat`,missionId ,volunteerId) VALUES 
    ($lng,$lat ,$missionId ,$volunteerId)";
    $rep = $bdd->query($sql);
    if(!$rep){
        echo "error" ;
    }else {
        
        echo "ok";
    }
   
}
