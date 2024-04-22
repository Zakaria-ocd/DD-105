const stagiaire = {
  code: 1,
  nom: "Ouchouid",
  prenom: "Zakaria",
  groupe: 100,
};
delete stagiaire.prenom
let st=[1,2,3,4,5,6]
for (let key in stagiaire) {
  console.log(stagiaire[key]);
}
st.push(8)
st.unshift("hmd")
delete st[7]
console.log(st.length)
console.log(st)
console.log(st[7])
st[11]=111
st.pop()
st.shift()
console.log(st)
let vdat =new Date()
console.log(vdat.getDate())
console.log(stagiaire);
stagiaire.nom = "Ahmed";
stagiaire.branche="DD"
console.log(stagiaire);
delete stagiaire;
console.log(stagiaire);
const sttt=st.forEach((elem)=>{
  console.log(elem) 
})
// const stagiaires =new Array(4)
// console.log(stagiaires.length);
// stagiaires.push("lksf")
// stagiaires[0]="KLJK"
// console.log(stagiaires);
const stagiaires =new Array("Ahmed","Mohammed",19,"Ahmed","dd105","Ahmed","Ahmed")
console.log(stagiaires.length);
console.log(stagiaires[1]);
console.log(stagiaires.indexOf("Mohammed"));
console.log(stagiaires.indexOf("Ahmed"));
console.log(stagiaires.indexOf("Ahmed",7));
stagiaires.forEach(function(itemvalue,itemIndex,stArray){
  console.log(itemvalue);
})
const copieStagiaires=stagiaires.map(function(item,index){
  return item+" "+"dev"
});
console.log(copieStagiaires);
stagiaires.push("yassin")
console.log(stagiaires)
stagiaires.unshift("yassin")
console.log(stagiaires)
stagiaires.pop()
stagiaires.shift()
console.log(stagiaires)
const modules=["Algo","POO","CSS","HTML","Algo"]
modules.splice(3,1)
console.log(modules)
modules.sort()
console.log(modules)
modules.reverse()
console.log(modules)
// const md=modules.find(function(item){
// return item==="Algo"
// })
// console.log(md.indexOf())
// const md=modules.filter(function(item){
//   return item==="Algo"
// });
// console.log(md)
// const md=modules.findIndex(function(item){
//   return item==="Algo"
// });
// console.log(md)
