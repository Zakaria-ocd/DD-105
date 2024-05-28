<?php

require 'database.php';

$statement = $pdo -> prepare("SELECT intitule FROM filiere");
$statement -> execute();
$filieres = $statement -> fetchAll(PDO::FETCH_ASSOC);

echo "<select name='filiere'>";
foreach($filieres as $filiere) {
    echo "<option value='" . $filiere['intitule'] . "'>" . $filiere['intitule'] . "</option>";
}
echo "</select>";