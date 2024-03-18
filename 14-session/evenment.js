const stagiaire = {
  code: 1,
  nom: "Ouchouid",
  prenom: "Zakaria",
  groupe: 100,
};
console.log(stagiaire);
stagiaire.nom = "Ahmed";
stagiaire.branche="DD"
console.log(stagiaire);
delete stagiaire.groupe;
console.log(stagiaire);
// const stagiaires =new Array(4)
// console.log(stagiaires.length);
// stagiaires.push("lksf")
// stagiaires[0]="KLJK"
// console.log(stagiaires);
const stagiaires =new Array("Ahmed","Mohammed",19,"dd105","Ahmed")
console.log(stagiaires.length);
console.log(stagiaires[1]);
console.log(stagiaires.indexOf(19));
console.log(stagiaires.indexOf("Ahmed"));
console.log(stagiaires.indexOf("Ahmed",1));
stagiaires.forEach(function(itemvalue,itemIndex,stArray){
  console.log(itemvalue);
})
const copieStagiaires=stagiaires.map(function(item,index){
  return item+" "+"dev"
});
// console.log(copieStagiaires);
// stagiaires.push("yassin")
// console.log(stagiaires)
// stagiaires.unshift("yassin")
// console.log(stagiaires)
// stagiaires.pop()
// stagiaires.shift()
console.log(stagiaires)
const modules=["Algo","POO","CSS","HTML","Algo"]
// modules.splice(1,2)
// modules.sort()
// modules.reverse()
// const md=modules.find(function(item){
//   return item==="Algo"
// })
// console.log(md)
// const md=modules.filter(function(item){
//   return item==="Algo"
// });
// console.log(md)
const md=modules.findIndex(function(item){
  return item==="Algo"
});
console.log(md)
