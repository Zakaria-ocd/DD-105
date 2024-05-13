
// somme=(x,y)=>{
//     setTimeout(()=>{
//       return x+y  
//     },1000)
    
// }
// let a=3
// let b=4
// let c= somme(a,b)
// console.log(c)
// const Stagiaires=getStagiaires(function(stagiaires){
//     console.log(stagiaires)
// })
// function getStagiaires(cbStagiaires){
//     setTimeout(()=>{
//         return cbStagiaires([{id:1,nom:"Zakaria"},{id:2,nom:"Zizo"},
//     {id:3,nom:"Ahmed"},{id:4,nom:"Binin"}],10000)})

// }
// console.log(Stagiaires)
// setTimeout(()=>{
//     console.log("kjksjf")
// },10)
// console.log("kjkjkl")

// setTimeout(()=>{
//     c=a+b
// },1000)
// console.log(c)
// setTimeout(()=>{
//     console.log(c)
// },3000) 
// const stagiaires=getStagiaires()
// console.log(stagiaires)
// function getStagiaires(){
//     setTimeout(()=>{
//           return [{id:1,nom:"Zakaria"},{id:2,nom:"Zizo"},
//       {id:3,nom:"Ahmed"},{id:4,nom:"Binin"}]
//     },50)
  
// }
// setTimeout(()=>{
//     console.log(stagiaires)
// },1000)
// let a=3
// if(a==3){
//     if(a==3){
//          b=2
//     } 
//        console.log(b)
// }
// let s=1
// console.log(Object(s) instanceof String)
let x =5
function facto(x){
    let n=x
    for (let i=1;i<n;i++){
        x*=i
}
return x
}
console.log(facto(x))
let table=["a","b","c","d","e","a"]
console.log(table)
// table.splice(0,4)
let nom="zakariaahmedanas"
// console.log(nom.split(""))
console.log(nom.substring(12,16))
console.log(nom.toUpperCase())
console.log(nom.endsWith("s"))
console.log(Array.from(nom))
let date=new Date()
date.setMonth("10")
console.log(date.getMonth())
let a=-14
console.log(Math.abs(a))
a= 2.2
console.log(Math.ceil(a))
a=-2.99
console.log(Math.floor(a))
a=[13,10,15,2,3,7]
console.log(Math.max(...a))
console.log(Math.min(...a))
a=1
console.log(Math.random())
a=3.99
console.log(Math.round(a))
a=1
console.log(Math.floor(Math.random(a)*20))
console.log(Math.floor(Math.random()*20+1))
a=-1.9
console.log(Math.trunc(a))