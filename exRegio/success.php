<?php 
session_start();
if(isset($_SESSION["users"])){
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Share life</title>
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css">
    <link rel="stylesheet" href="../src/output.css">
</head>
<body>
    <div class="h-screen w-full bg-purple-900/25 ">
        <header>
            <ul class="flex text-2xl pt-5 w-full pl-12  space-x-64 items-baseline">
                <div>
                <li><a class="font-extralight" href="">Share life </a></li></div>
                <div class="flex space-x-14 font-extralight ">
                <li><a href=""><span>Home</span></a></li>
                <li><a href=""><span>Posts</span></a></li>
                <li><a href=""><span>My posts</span></a></li>
                <li><a class="" href="">Friends</a></li></div>
                <div class="singIn">
                <li class="h-12 w-12 rounded-full flex justify-center text-white items-center bg-stone-500/50"></div>
            </ul>
        </header>
        <button class="mt-4 cursor-pointer bg-red-700 w-28 h-8 rounded-xl"><a href="logout.php">Log out</a></button>
        <br><br><br><br>
        <h1><?php echo " Hi  " . $_SESSION["users"]["userName"]?></h1>
    </div>
</body>
</html>
<?php
}
else{
    header("location:index.php");
}
?>