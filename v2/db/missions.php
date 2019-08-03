<?php
require("connectdblib.php");
require("cors.php");
header('Content-Type: application/json');
cors();



$bdd=connectdb('hitw',true);

$sql="SELECT * FROM missions";
$request= $bdd -> query($sql);

$row=$request->fetchall(PDO::FETCH_ASSOC);

echo json_encode($row);