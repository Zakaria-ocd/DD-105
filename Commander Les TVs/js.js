let nomTv= document.querySelector(".selectTVs")
let paragraphSelect=document.querySelector(".selectTVs +p")
let quantiteTv=document.querySelector(".inputQuantite")
let paragraphQuantite=document.querySelector(".inputQuantite +p")
document.querySelector(".ajouterPanier").addEventListener("click",validation)






function validation(e){
    e.preventDefault()
    if(nomTv.value != "Choisir un TV"){
        nomTv.classList.remove("invalid")
        paragraphSelect.style.visibility="hidden"
        nomTv.classList.add("valid")
    }
    else{
        nomTv.classList.remove("valid")
        paragraphSelect.style.visibility="visible"
        nomTv.classList.add("invalid")
    }
    if(Number(quantiteTv.value)>0 && Number(quantiteTv.value)<=10 && quantiteTv.value.length<=2){
        quantiteTv.classList.remove("invalid")
        paragraphQuantite.style.visibility="hidden"
        quantiteTv.classList.add("valid")
    }
    else{
        quantiteTv.classList.remove("valid")
        paragraphQuantite.style.visibility="visible"
        quantiteTv.classList.add("invalid")
    }
    remplirTVs()
}
function remplirTVs(){
    
}




















// function valider(e){
//     e.preventDefault()
//     let selectTVs = document.querySelector(".selectTVs");
//     let inputQuantite = document.querySelector(".inputQuantite");

//     if (selectTVs.value =="Choisir un TV") {
//         selectTVs.nextElementSibling.style.visibility = "visible";
//         selectTVs.classList.add("invalid");
//     } else {
//         selectTVs.nextElementSibling.style.visibility = "hidden";
//         selectTVs.classList.add("valid");
//         selectTVs.classList.remove("invalid");
//     }
//     if(Number(document.querySelector(".inputQuantite").value)>10 || document.querySelector(".inputQuantite").value=="" ){
//         document.querySelector(".inputQuantite").nextElementSibling.style.visibility="visible"
//         inputQuantite.classList.add("invalid")
//         console.log("NO2")
//     }
//     else{
//         inputQuantite.nextElementSibling.style.visibility="hidden"
//         inputQuantite.classList.add("valid")
//         inputQuantite.classList.remove("invalid")
//         console.log("YES2")
//     }
//     ajouterAuPanier()
// }
// let tvs=[]
// let stagiairesShow=[]
// let selectNomsTVs=document.querySelector(".selectTVs")
// document.addEventListener("DOMContentLoaded",remplirTVs)
// document.querySelector(".ajouterPanier").addEventListener("click",valider)
// function remplirTVs(){
// let request =new XMLHttpRequest()
// request.open("GET","test.json",true)
// request.onreadystatechange=function(){
//     if(this.readyState==4 && this.status==200){
//         tvs=JSON.parse((this.responseText)).tvs
//         console.log(tvs)
//         let options=""
//         options+=`<option >Choisir un TV</option>`
//         for(let i=0;i<tvs.length;i++){
//         options+=`<option>${tvs[i].nom}</option>`
//         }
//         selectNomsTVs.innerHTML=options
//     }
// }
// request.send()
// }
// function ajouterAuPanier(){
//     let stagiaireShow={}
//     stagiaireShow.nom=selectTVs.
// }