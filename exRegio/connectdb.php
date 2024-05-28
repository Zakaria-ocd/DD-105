<?php
$host="sql208.infinityfree.com";
$port=3306;
$dbName='if0_36629730_mysqlZakaria';
$user="if0_36629730";
$password="wXVYhRRW7saNeWE";
$dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8";
try{
    $pdo=new PDO($dsn,$user,$password,);
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    
    // echo "connected successfully";
}catch(PDOException $e){
    echo "connected failed : ". $e->getMessage();
}