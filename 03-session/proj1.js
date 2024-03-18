//les types primitifs
console.log(typeof (5))
console.log(typeof (undefined))
console.log(typeof ("jkhjkdhfd"))
console.log(typeof (null))
console.log(Object(3) instanceof Number)
console.log(typeof (true))
//les types structurels 
console.log(typeof (null))
let numStagiaires = [1, 2, 3]
console.log(typeof (numStagiaires))
let CnumStagiaires = numStagiaires
let annee;
let nAnne;
annee="2024"
// nAnne= Number(annee)
nAnne=+annee
console.log(nAnne)
console.log(typeof(nAnne))
let groupe=105;
let sGroupe;
// sGroupe = String(groupe)
sGroupe=groupe.toString()
// console.log(sGroupe)
// console.log(typeof(sGroupe))
// let n;
// n=1
// console.log(Boolean(0))
// console.log(Boolean(1))
// let vdate = new Date()
// console.log(vdate.getDate())
// console.log(vdate.getDay())
// console.log(vdate.getFullYear())
// console.log(vdate.getHours())
// console.log(vdate.getSeconds())
// console.log(vdate.getMinutes())
// console.log(vdate.getMonth())
// console.log(vdate.getMilliseconds())
// console.log(vdate.getTime())
// console.log(String(vdate.getDay()))
// console.log(vdate.getDay().toString())
// if (note>=10){
//     document.write("Réussi")
// }
// else if (note>8) {
//     document.write("rattrapage")
// }
// else{
//     document.write("échoué")
// }
let day;
let vday=new Date().getDay()
switch (vday){
    case 0:
        day="saturday";break;
    case 1:
        day="monday";break;
    case 2:
        day="tuesday";break;
    case 3:
        day="wendesday";break;
    case 4:
        da ="thursday";break;
    case 5:
        day="friday";break;
    case 6:
        day="sunday";break;
}
console.log(day);
let bronche;
let abreviation="d";
switch (abreviation){
    case "dd":
        bronche="le développement digital"
    ;break;
    case "id":
        bronche="l'infrastructure digital"
    ;break;
    case "wd":
        bronche="le web deign"
    ;break;
    default:
        bronche=""
};
console.log("la bronche est",bronche);

















// //spread operator
// let liste = [23, 242, 76]
// let cliste = [...liste,7856]
// console.log(liste)
