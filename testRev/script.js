function color(){
    if(document.querySelector("button").style.backgroundColor=="red"){
    document.querySelector("button").style.backgroundColor="green"}
    else{
        document.querySelector("button").style.backgroundColor="red"
    }
}
a=300
let x = prompt("Donnez un numéro entre 5 et 10");
try {
    if (x === "") throw "Vide";
    x = Number(x);
    if (isNaN(x)) throw "Ce n'est pas un nombre";  // Gérer le cas où l'utilisateur entre autre chose qu'un nombre
    if (x < 5) throw "Trop petit";
    if (x > 10) throw "Trop grand";
    console.log("Merci pour votre numéro :", x);
}
catch (err) {
    console.log("Erreur :", err);
}