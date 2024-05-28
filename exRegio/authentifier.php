<?php
session_start();
require 'connectdb.php';

$statement = $pdo -> prepare("SELECT * FROM compteadministrateur WHERE loginAdmin = :login AND motPasse = :password");

$statement -> execute([
    ':login' => $_POST['email'],
    ':password' => $_POST['password']
]);

$result = $statement -> fetchAll(PDO::FETCH_ASSOC);

if(!($result)) {
    $_SESSION['erreur'] = "check your informations";
    header("Location:index.php");
    exit;
}else {
    $_SESSION['login'] = $_POST['email'];
    unset($_SESSION['erreur']);
    header("Location:espaceprivee.php");
    exit;
}