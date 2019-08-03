<?php
require("connectdblib.php");
require("cors.php");
cors();



$bdd=connectdb('hitw',true);



if(isset($_REQUEST["lng"],$_REQUEST["lat"],$_REQUEST["radius"],$_REQUEST["child_id"]))
{
   //recuperer les params et les enregistrer dans des variables
    $lng = $_REQUEST["lng"] ; 
    $lat = $_REQUEST["lat"] ; 
  
    $radius = $_REQUEST["radius"] ; 
    $child_id = $_REQUEST["child_id"] ; 
   // $status = $_REQUEST["status"]; 
 
    //requete sql
    $sql = " INSERT INTO `missions` ( `lng`, `lat`, `radius`, `child_id`)
         VALUES
    ($lng,$lat ,$radius ,$child_id)";
    $rep = $bdd->query($sql);
    if(!$rep){
        echo "error" ;
    }else {
        
        echo "ok";
    }
   
}
