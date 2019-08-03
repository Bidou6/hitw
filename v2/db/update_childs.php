<?php
require("connectdblib.php");
require("cors.php");
cors();

$champs=array("lastname","firstname","picture","description","age","sex","size","weight","place","status","date_of_disappearance");

$bdd=connectdb('hitw',true);


for ($i=0; $i < count($champs) ; $i++) 
{ 
        if(isset($_REQUEST["child_id"],$_REQUEST[$champs[$i]]))
    {
        $sql='UPDATE childs SET '.$champs[$i].'="'.$_REQUEST[$champs[$i]].'" WHERE child_id='.$_REQUEST["child_id"];
        $request= $bdd -> query($sql);
    }
}




