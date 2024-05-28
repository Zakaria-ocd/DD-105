<?php
session_start();
require 'connectdb.php';
var_dump($_POST);
if (!isset($_SESSION['login'])) {
    header("Location:index.php");
    exit();
}

$statament=$pdo->prepare("INSERT INTO stagiaire values(idSt=:idSt,nom=:nom,prenom=:prenom,dateNassance=:dateNassance,photoProfil=:photoProfil,idFl=:idFl");
$statament->execute([
    ":idSt"=>1,
    ":nom"=>"lklk",
    ":prenom"=>"popo",
    ":dateNassance"=>"2024-05-02",
    ":photoProfil"=>"mlkmlk",
    ":idFl"=>3,
]);