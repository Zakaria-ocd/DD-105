<?php
session_start();
if (isset($_SESSION['error'])) {
    $error=$_SESSION['erreur'];
    header("Location:authentifier.php");
    exit();
}
else{
    $error="";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="../src/output.css" rel="stylesheet"/>
</head>
<body class="w-full flex justify-center">
    <form class="w-[340px] flex  flex-col items-center rounded-lg h-[350px] mt-24 bg-sky-700" action="authentifier.php" method="post">
        <input class="basis-9 mt-12 shadow-md shadow-orange-100 w-60 border-[3px] rounded-md outline-none pl-2 text-slate-800 focus:bg-gray-300/10  bg-gray-300/10  border-e-gray-300" type="email" placeholder="Email Adress" type="email" name="email">
        <input  class="basis-9 mt-12 shadow-md shadow-orange-100 w-60 border-[3px] rounded-md outline-none pl-2 text-slate-800 focus:bg-gray-300/10  bg-gray-300/10  border-e-gray-300 " placeholder="Password" type="password" name="password">
        <input class="shadow-md h-[32px] mt-16 w-60   bg-slate-500 hover:bg-slate-700 cursor-pointer rounded-md text-white" value="Log in" type="submit"></input>
        <p class="text-rose-600"><?php echo $error?></p>
    </form>
</body>
</html>


