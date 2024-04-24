let inputMatricule=document.querySelector(".inputMatricule")
let inputMarque=document.querySelector(".inputMarque")
let inputModèle=document.querySelector(".inputModèle")
let inputAnnéeProd=document.querySelector(".inputAnnéeProd")
let inputCarburant=document.querySelector(".inputCarburant")
let inputPrix=document.querySelector(".inputPrix")
let consulterBtn=document.querySelector(".consulterBtn")
let enregistrerBtn=document.querySelector(".enregistrerBtn")
let viderBtn=document.querySelector(".viderBtn")
let valid=true

let voitures=[]
enregistrerBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    enregistrer()
})
consulterBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    consulter()
})
let checkMatricule=/[0-9]{1,8}-[a-z]{1}-[0-9]{1,2}/i
let checkMarque=/\b[a-z]{4,15}\b/i
let checkCarburants=/\b[a-z]{4,15}\b/i
let checkPrix=/[0-9]{3,}/
function vider(){
    inputMatricule.value=""
    inputAnnéeProd.value=""
    inputCarburant.value=""
    inputMarque.value=""
    inputModèle.value=""
    inputPrix.value=""
}
function valider(){
    valid=true
    if(checkMatricule.test(inputMatricule.value)==false){
        inputMatricule.style.backgroundColor="orange"
        valid=false
    }
    else{
        inputMatricule.style.backgroundColor=""
    }
    if(checkMarque.test(inputMarque.value)==false){
        inputMarque.style.backgroundColor="orange"
        valid=false
    }
    else{
        inputMarque.style.backgroundColor=""
    }
    if(checkCarburants.test(inputCarburant.value)==false){
        inputCarburant.style.backgroundColor="orange"
        valid=false
    }
    else{
        inputCarburant.style.backgroundColor=""
    }
    if(checkPrix.test(inputPrix.value)==false){
        inputPrix.style.backgroundColor="orange"
        valid=false
    }
    else{
        inputPrix.style.backgroundColor=""
    }
    if(inputModèle.value==""){
        inputModèle.style.backgroundColor="orange"
        valid=false
    }
    else{
        inputModèle.style.backgroundColor=""
    }
    if(inputAnnéeProd.value==""){
        inputAnnéeProd.style.backgroundColor="orange"
        valid=false
    }
    else{
        inputAnnéeProd.style.backgroundColor=""
    }
}
function enregistrer(){
    valider()
    if (valid==true){
        let voiture={}
        voiture.matricule=inputMatricule.value
        voiture.marque=inputMarque.value
        voiture.modèle=inputModèle.value
        voiture.annéeProd=inputAnnéeProd.value
        voiture.carburant=inputCarburant.value
        voiture.prix=inputPrix.value
        voitures.push(voiture)
        vider()
        alert("Done")
    }
    else{
        alert("You should fix your informations")
    }
}
function consulter(){
    console.log(voitures)
    let tr=""
    voitures.forEach((item)=>{
        tr+=`<tr><td>${item.matricule}</td>
        <td>${item.marque}</td>
        <td>${item.modèle}</td>
        <td>${item.annéeProd}</td>
        <td>${item.carburant}</td>
        <td>${item.prix}</td></tr>`
    })
    document.querySelector("tbody").innerHTML=tr
    document.querySelector("table").style.display="block"
}