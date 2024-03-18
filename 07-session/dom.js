console.log(document.querySelector(".nom").value);
document.querySelector(".nom").value="Ahmed";
console.log(document.querySelector(".age").value);
console.log(typeof(document.querySelector(".age").value));
let a;
a=Number(document.querySelector(".number1").value);
let b;
b=Number(document.querySelector(".number2").value);
let c;
c=a+b
document.querySelector(".number3").value=c;
if (a>20){
    document.querySelector(".number1").style.backgroundColor="orange";
}
if (b>20){
    document.querySelector(".number2").style.backgroundColor="orange";
}
// console.log(document.head)
// console.log(document.body)
//  let calculeClick= function(e){
//      e.preventDefault();
//      console.log("You clicked me!");
//  }
//  document.querySelector(".btn-calculer").addEventListener("click",calculeClick);
// document.querySelector(".btn-calculer").
// addEventListener("click",function(e){
//     e.preventDefault();
//     console.log("You clicked me!");
// });
// document.querySelector(".btn-calculer").
// addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log("You clicked me!");
// });

let  btnC=document.querySelector(".btn-calculer");
btnC.style.borderRadius="10px"
btnC.style.color="yellow"
let calculerF=(e)=>
{
    e.preventDefault();
    btnC.style.color="yellow"
    let n1=document.querySelector(".numberUn").value
    let n2=document.querySelector(".numberDeux").value
    if (btnC.textContent==="Calculer"){
        document.querySelector(".somme").value=Number(n1)+Number(n2)
        btnC.textContent="vider"
        btnC.style.color="red"
    }
    else {
        document.querySelector(".numberUn").value = "";
        document.querySelector(".numberDeux").value = "";
        document.querySelector(".somme").value=""
        btnC.textContent="Calculer";
    }
}
document.querySelector(".btn-calculer").
addEventListener("click",calculerF);
console.log(document.querySelector("input"))
console.log(document.querySelectorAll("input"))
let vInput=document.querySelectorAll("input");
// console.log(vInput);
// vInput[1].style.backgroundColor="tomato"
for (let i=5 ; i<=7 ; i++){
    vInput[i].style.backgroundColor="tomato";
    vInput[i].style.color="green"
}
// console.log(vInput[1]);
// console.log(vInput.length)
document.querySelector(".btn-calculer").style.border="solid 3px green";
document.querySelector(".btn-calculer").style.marginTop="10px";
document.querySelector(".btn-calculer").style.marginBottom="20px";
document.querySelector(".btn-calculer").style.width="120px";
document.querySelector(".btn-calculer").style.height="30px";
document.querySelector(".btn-calculer").style.backgroundColor="skyblue";
let text1=document.getElementById("test1");
text1.textContent="infre";
text1.style.color="yellow";
console.log(document.getElementsByClassName("test2"))
document.getElementsByClassName("test2")[2].style.backgroundColor="red";
for (let i=0;i<=document.getElementsByClassName("test2").length-1;i++){
    document.getElementsByClassName("test2")[i].style.border="5px solid gray"
}
// console.log(document.title)
// document.title="lkqjlkj"
// console.log(document.getElementsByTagName("input"));
// let titH=document.getElementsByTagName("input");
// for (i=0;i<=titH.length-1;i++){
//     titH[i].style.fontSize="0.4rem"
// }