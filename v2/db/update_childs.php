<?php
require("connectdblib.php");
require("cors.php");
cors();



$bdd=connectdb('hitw',true);

if(isset($_REQUEST["child_id"],$_REQUEST["lastname"]))
{
    $sql='UPDATE childs SET lastname='.$_REQUEST["lastname"].'WHERE child_id='.$_REQUEST["child_id"];
    $request= $bdd -> query($sql);
}


