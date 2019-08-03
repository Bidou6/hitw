<?php
require("connectdblib.php");
require("cors.php");
header('Content-Type: application/json');
cors();



$bdd=connectdb('hitw',true);

$sql="SELECT * FROM childs";
$request= $bdd -> query($sql);

$data=$request->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
