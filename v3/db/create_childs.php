<?php
require("connectdblib.php");
require("cors.php");
cors();



$bdd=connectdb('hitw',true);

$sql="SELECT * FROM childs";
$request= $bdd -> query($sql);

$row=$request->fetch(PDO::FETCH_ASSOC);




if(isset($_REQUEST["lastname"],$_REQUEST["firstname"],$_REQUEST["age"]))
{
   //recuperer les params et les enregistrer dans des variables
    $lastname = $_REQUEST["lastname"] ; 
    $firstname = $_REQUEST["firstname"] ; 
    $age = $_REQUEST["age"] ; 
  
 
    $sql = "INSERT INTO `childs` 
    ( `lastname`, `firstname`, `age`) VALUES 
    ('$lastname', '$firstname', $age)";
    $rep = $bdd->query($sql);
    if(!$rep){
        echo "error" ;
    }else {
        
        echo "ok";
    }
   
}
