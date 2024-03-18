// function greeting(){
//   console.log("HELLO BUTTIN !!!")
// }
// let count=0;
// choicecolor()=>{
//   document.querySelector(".btn-save").style.background="gray"

// }
// document.querySelector(".btn-save").addEventListener("mouseover",()=>{
//   document.querySelector(".btn-save").style.background="green"
// })
// document.querySelector(".btn-save").addEventListener("mouseout",
// )
document.querySelector(".btn-save").addEventListener("mousedown",()=>{
  console.log("down")
  document.querySelector(".btn-save").style.backgroundColor="red"
})
document.querySelector(".btn-save").addEventListener("mouseup",()=>{
  console.log("up")
  document.querySelector(".btn-save").style.backgroundColor="green"
})
document.querySelector(".btn-save").addEventListener("click",()=>{
  console.log("click")
  document.querySelector(".btn-save").style.backgroundColor="blue"
})
document.querySelector(".btn-save").addEventListener("dblclick",()=>{
  console.log("Doucle Click")
})
let pos = document.querySelector('#pos');
pos.addEventListener('mousemove', (e) => {
let affichage = document.querySelector('#affichage');
affichage.innerText = `Screen X/Y: (${e.screenX}, ${e.screenY}) Client X/Y: (${e.clientX}, ${e.clientY})`
})


















// document.querySelector(".btn-save").onclick=function(){
//   console.log("HELLO BUTTIN !!!")
// }




// document.querySelector(".btn-save").onclick=greeting