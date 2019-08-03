<?php
require("connectdblib.php");
require("cors.php");

cors();

$bdd=connectdb("hitw",false,"10.20.3.53/phpmyadmin");

var_dump($bdd);

