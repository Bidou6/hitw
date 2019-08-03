<?php
require("connectdblib.php");
require("cors.php");
header('Content-Type: application/json');
cors();



$bdd=connectdb('hitw',true);

$sql="SELECT * FROM posters";
$request= $bdd -> query($sql);

$data=$request->fetchall(PDO::FETCH_ASSOC);

echo json_encode($data);