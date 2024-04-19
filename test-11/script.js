
// somme=(x,y)=>{
//     setTimeout(()=>{
//       return x+y  
//     },0.1)
    
// }
// let a=3
// let b=4
// let c= somme(a,b)
// console.log(c)
// const stagiaires=getStagiaires(function(stagiaires){
//     console.log(stagiaires)
// })
// function getStagiaires(cbStagiaires){
//     setTimeout(()=>{
//         return cbStagiaires([{id:1,nom:"Zakaria"},{id:2,nom:"Zizo"},
//     {id:3,nom:"Ahmed"},{id:4,nom:"Binin"}],10000)})

// }
// console.log(stagiaires)
// setTimeout(()=>{
//     console.log("kjksjf")
// },10)
// console.log("kjkjkl")
// let a=3
// let b=4
// let c
// setTimeout(()=>{
//     c=a+b
// },1000)
// console.log(c)
// setTimeout(()=>{
//     console.log(c)
// },3000) 
const stagiaires=getStagiaires()
console.log(stagiaires)
function getStagiaires(){
    setTimeout(()=>{
          return [{id:1,nom:"Zakaria"},{id:2,nom:"Zizo"},
      {id:3,nom:"Ahmed"},{id:4,nom:"Binin"}]
    },50)
  
}
setTimeout(()=>{
    console.log(stagiaires)
},1000)