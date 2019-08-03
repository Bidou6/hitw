<?php
function connectdb($dbname,$debug=false,$host='localhost',$dbuser='root',$dbpwd='',$charset='utf8')
{
    try
    {
        $bdd = new PDO("mysql:host=$host;dbname=$dbname;charset=$charset", $dbuser, $dbpwd);
    }
    catch(Exception $e)
    {
        if($debug)
            {
                /*en débug*/
                die("Erreur de connexion à la base de données. ".$e->getMessage());
            }
            else
            {
                /*en public*/
                die("Erreur de connexion à la base de données, merci de contacter l'administrateur du site");
            }
    }
return $bdd;
}

function gettable($reponse)
{
    if($reponse->rowCount() == 0)
    {
        echo "<p>Pas de données!</p>";
    }
    elseif(!$reponse)
    {
        echo "<p>Problème dans la requête!</p>";
    }
    else
    {
        $i=0;
        while($row = $reponse->fetch())
        {
            $tableau[$i]=$row["valeur"];
            $i++;
        }
    }
    return $tableau;
}

function prep($sql,$bdd,$value,$pdoConst)
{
    $stmt = $bdd->prepare($sql);
    $stmt->bindValue(":valeur", $value,$pdoConst);
    $stmt->execute();
    return $stmt;
}
