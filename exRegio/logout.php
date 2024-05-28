<?php 
session_start();
if(isset($_SESSION["users"])){
    unset($_SESSION["users"]);
    
    header("location:index.php");
    exit;
}
?>