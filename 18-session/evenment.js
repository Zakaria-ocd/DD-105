document.querySelector(".btn").addEventListener("click",()=>{
  open("https://www.youtube.com/")
})
// appels synchrone
// let a=10
// let b=4
// let somme=a+b
// console.log(somme)
// let i =0
// setInterval(function(){
//   i++;
//   console.log(i)
// },1000)
// setTimeout(function(){
//   console.log("5 seconds ago")
// },5000)
// appels asynchrone
// let stagiaires=getData(function(){

// });
// console.log(stagiaires)
// function getData(){
//   setTimeout(() => {
//       return ["ELKADIRI","FAID","Batoli"]
//   }, 200);
// }
let stagiaires=getData(function(liststagiare){
  console.log(liststagiare)
});
console.log(stagiaires)
function getData(mycallbackfunction){
  setTimeout(() => {
      return mycallbackfunction(["ELKADIRI","FAID","Batoli"])
  }, 2000);
}
