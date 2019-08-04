<?php

/* On ajoute la finction cors qui permet le cross-origin */
/* pour authoriser l'appel du fichier entre backend et frontend*/
require "cors.php";
/*on appelle la fonction cors*/
cors();

/* connexion à la db */
require "./connectdblib.php";
$bdd  = connectdb("hitw" , false );
/* on a ajouté le type du fichier */
header('Content-Type: application/json');


/*
    on construit un tableau php
    ICI, on doir respecter le format demandé car les frontends  (dans cet exercice)
    s'attendent à recevoir se format
    
    pour une première itération/intéraction avec les frontends

*/
$reponse = [
    "error"         => true, /* indique si il y a une erreur ou non */
    "error_message" => "Uknown error", /* il indique le message d'erreur pour les front */
    "details"          => "" /* il sert à afficher se qu'on envoie aux front - les données de réponses */
];

$sql = "SELECT * FROM volunteers;";
$stmtnt = $bdd->prepare($sql);
$stmtnt->execute();


// on vérifie si il y a des données de la requête SQL (1 seul résultat) 

/* on convertit en json le tableau $reponse et on l'affiche avec echo*/
echo json_encode($stmtnt->fetchAll(PDO::FETCH_ASSOC), JSON_NUMERIC_CHECK);

/*on termine le script*/
die();