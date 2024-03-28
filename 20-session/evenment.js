// const stagiaires={
//   id:1,
//   "nom":"Ouchouid",
//   "prenom":"Zakaria",
//   "age":18
// }
// //Objet JS ===>objet JSON
// let stagiairesJson=JSON.stringify(stagiaires)
// console.log(stagiaires);
// console.log(stagiairesJson)
// //Objet JSON ===>objet JS
// stagiairesJson=JSON.parse(stagiairesJson)
// console.log(stagiairesJson)
document.getElementById("btn-load").addEventListener("click", function (e) {
  e.preventDefault();
  let request = new XMLHttpRequest();
  request.open("GET", "file.txt", true);
  request.onreadystatechange = function () {
    if(this.readyState==4 && this.status==200){
      document.getElementById("container").innerHTML=this.responseText;
        }
  };
  request.send();
});
// document.createElement("h1").textContent="kljlkdjglkdfjgdkfj";
// document.getElementById("container").append(document.createElement("h1"));
// request.onload