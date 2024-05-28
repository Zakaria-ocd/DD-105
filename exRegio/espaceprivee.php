<?php
session_start();
require 'connectdb.php';
if (!isset($_SESSION['login'])) {
    header("Location:index.php");
    exit();
}

$heure = date("H");
if ($heure > 6 && $heure < 18) {
    $greeting = "Bonjour";
} else {
    $greeting = "Bonsoir";
}


$statement = $pdo -> prepare("SELECT nom, prenom FROM compteAdministrateur WHERE loginAdmin = :login");
$statement -> execute([
    ':login' => $_SESSION['login']
]);

$result = $statement -> fetch(PDO::FETCH_ASSOC);
echo $greeting . " " . $result['nom'] . " " . $result['prenom'];
echo "<br>";

$statement = $pdo -> prepare("SELECT * FROM stagiaire");
$statement -> execute();
$stagiaires = $statement -> fetchAll(PDO::FETCH_ASSOC);
?>
<link href="../src/output.css" rel="stylesheet" />
<?php
require "connectDB.php";
$statement=$pdo -> prepare("SELECT * FROM stagiaire,filiere where stagiaire.idFl=filiere.idFl;");
$statement -> execute();
$results = $statement->fetchAll(PDO::FETCH_ASSOC); 
?>
<br><br>
<button class="bg-sky-800 rounded-md w-28 h-10 shadow-orange-100 border-[3px]  outline-none text-white text-xl ml-2"><a href="ajouterStagiaire.php">Ajouter</a></button>
<div class="w-full flex justify-center mt-4 ">
<table class="w-[660px]  border-spacing-5 border-stone-700 border-4">
    <thead>
    <tr>
        <th class=" border-stone-700 border-4">nom</th>
        <th class=" border-stone-700 border-4">prenom</th>
        <th class=" border-stone-700 border-4">Date de naissance</th>
        <th class=" border-stone-700 border-4">photo</th>
        <th class=" border-stone-700 border-4">filiere</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach($results as $item):?>
    <tr>
    <td class=" border-stone-700 border-4"><?php echo $item['nom']?></td>
    <td class=" border-stone-700 border-4"> <?php echo $item['prenom']?></td>
    <td class=" border-stone-700 border-4"> <?php echo $item['dateNassance']?></td>
    <td class=" border-stone-700 border-4"><?php echo $item['photoProfil']?></td>
    <td class=" border-stone-700 border-4"><?php echo $item['intitule']?></td>
    <td class=" border-stone-700 border-4 h-11"><div class="flex text-sm justify-evenly" ><button class="bg-red-800 rounded-md w-20 h-7"><a  href='deleteStagiaire.php?idStagiaire=<?php echo $item['idSt']?>'>Supprimer</a></button><button class="bg-green-800 rounded-md w-20 h-7"><a href="modifierStagiaire.php?idStagiaire=<?php echo $item['idSt']?>">Modifier</a></button></div></td>
    </tr>
    <?php endforeach?>
    </tbody>
</table>
</div>

