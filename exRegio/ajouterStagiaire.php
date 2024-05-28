<?php
session_start();
require 'connectdb.php';
if (!isset($_SESSION['login'])) {
    header("Location:index.php");
    exit();
}
$statement = $pdo -> prepare("SELECT idFl,intitule FROM filiere");
$statement -> execute([
]);

$result = $statement -> fetchAll(PDO::FETCH_ASSOC);
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
    <form class="w-[340px] flex  flex-col items-center rounded-lg h-[520px] mt-8 bg-sky-700" method="post" action="ajouterStDatabase.php">
        <input class="basis-9 mt-12 shadow-md shadow-orange-100 w-60 border-[3px] rounded-md outline-none pl-2 text-slate-800 focus:bg-gray-300/10  bg-gray-300/10  border-e-gray-300"  placeholder="Nom" type="text" name="nom">
        <input  class="basis-9 mt-12 shadow-md shadow-orange-100 w-60 border-[3px] rounded-md outline-none pl-2 text-slate-800 focus:bg-gray-300/10  bg-gray-300/10  border-e-gray-300 " placeholder="Prenom" type="text" name="prenom">
        <input  class="basis-9 mt-12 shadow-md shadow-orange-100 w-60 border-[3px] rounded-md outline-none pl-2 text-slate-800 focus:bg-gray-300/10  bg-gray-300/10  border-e-gray-300 " placeholder="Date" type="date" name="date">
        <input  class="basis-9 mt-12 shadow-md shadow-orange-100 w-60 border-[3px] rounded-md outline-none pl-2 text-slate-800 focus:bg-gray-300/10  bg-gray-300/10  border-e-gray-300 " placeholder="Image" type="file" name="image">
        <select class="basis-9 mt-12 shadow-md shadow-orange-100 w-60 border-[3px] rounded-md outline-none pl-2 text-slate-800 focus:bg-gray-300/10  bg-gray-300/10  border-e-gray-300 " name="filiere" >
            <?php foreach($result as $item):?>
                <option value="<?php echo $item["idFl"]?>"><?php echo $item["intitule"]?></option>
            <?php endforeach?>
        </select>
        <input class="shadow-md h-[32px] mt-10 w-60   bg-slate-500 hover:bg-slate-700 cursor-pointer rounded-md text-white" value="Modifier" type="submit"/>
    </form>
</body>
</html>
