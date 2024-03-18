// const stagiaires=getdata().then(function)
// const stagiaires=getdata()
// console.log(stagiaires)
// function getData(){
//   return new Promise(function(resolve,reject){
//     resolve("data recupéré");
//   })
// }
// Consommateur de la Promise
let vfound=true
let stgr
let satagiairelistNotes=[]
const stagiaires = getData()
  .then(function (response) {
    console.log(response);
    return getNotes(response)
  }).then(function (response) {
    satagiairelistNotes=response
    stgr=response.filter(function(item){
      return item.idStagiaire===2
    })
    console.log(stgr)
  }
  )
  .catch(function (error) {
    console.log(error);
  });
// Producteur de la Promise

console.log(stagiaires);
function getData() {
  return new Promise(function (resolve, reject) {
    if (vfound) {
      resolve([{id:1,nom:"kadiri"},{id:2,nom:"ahmed"},{id:3,nom:"abdo"}]);
    } else {
      reject("not allowed");
    }
  });
}
function getNotes() {
  return new Promise(function (resolve, reject) {
    resolve([
      {idStagiaire:1,module:"JAVASCRIPT",note:"10"},
      {idStagiaire:1,module:"HTML",note:"12"},
      {idStagiaire:1,module:"PYTHON",note:"14"},
      {idStagiaire:2,module:"JAVASCRIPT",note:"13"},
      {idStagiaire:2,module:"HTML",note:"8"},
      {idStagiaire:2,module:"PYTHON",note:"11"},
      {idStagiaire:3,module:"JAVASCRIPT",note:"17"},
      {idStagiaire:3,module:"HTML",note:"7"},
      {idStagiaire:3,module:"PYTHON",note:"15"}

    ])
  })}
document.querySelector(".btn").addEventListener("click",function(){
  stgr=satagiairelistNotes.filter(function(item){
    return item.idStagiaire===3
  })
  console.log(stgr)
})
document.querySelector(".btn1").addEventListener("click",function(){
  let dogA=fetch("").then(function(response){
    return response.json();
  }).then(function(data){
    console.log(data)
  })
})