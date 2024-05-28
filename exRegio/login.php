<?php
session_start();
require "connectdb.php";

$statement=$pdo->prepare("SELECT * from users where userEmail=:userEmail and passwordUser=:passwordUser");
$statement->execute([
    ":passwordUser"=>$_POST["password"],
    ":userEmail"=>$_POST["email"]
]);
$result=$statement->fetch(PDO::FETCH_ASSOC);
var_dump($result);
echo isset($_SESSION["users"]);
if($result){
    $_SESSION["users"]=["userId"=>$result["userId"],"userName"=>$result["userName"],"userEmail"=>$result["userEmail"],"passwordUser"=>$result["passwordUser"]];
    header("location:success.php");
}
else{
    header("location:index.php");
}

