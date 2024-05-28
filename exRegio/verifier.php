<?php
session_start();
if (!isset($_POST['login']) || !isset($_POST['password'])) {
    $_SESSION['error'] = "Les données d'authentification sont obligatoires.";
    header("Location:authentifier.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form action="verifier.php" method="post">
        <label for="login">Login</label>
        <input type="text">
        <label for="password">Password</label>
        <input type="password">
    </form>
</body>
</html>