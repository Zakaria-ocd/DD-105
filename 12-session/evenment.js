document.querySelector(".input-test").addEventListener("keydown",
function(event){
if (event.keyCode === 38){
console.log("click1")
  }
}
)
document.querySelector(".input-test").addEventListener("keydown",
function(event){
     if (event.keyCode === 39){
       console.log("click2")
     }
 }

 )
 document.querySelector(".input-test").addEventListener("keydown",
 function(event){
   if (event.keyCode === 40){
     console.log("click3")
   }
 }
 )
 document.body.addEventListener("keydown",
 function(event){
   if (event.keyCode === 39){
     document.querySelector(".box").classList.add("box1")
   }
 }
 )
 document.body.addEventListener("keydown",
 function(event){
   if (event.keyCode === 40){
     document.querySelector(".box1").classList.add("box2")
   }
 }
 )
 document.body.addEventListener("keydown",
 function(event){
   if (event.keyCode === 37){
    document.querySelector(".box2").classList.add("box3")
   }
}
)
document.body.addEventListener("keydown",
function(event){
if (event.keyCode === 38){
document.querySelector(".box3").classList.add("box")
}
}
)
