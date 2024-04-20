class Stagiaire{
    constructor(id,nom,prenom,age,branche,activite,nbrjrs,dateDebut,validation){
        this.id=id
        this.nom=nom
        this.prenom=prenom
        this.age=age
        this.branche=branche
        this.activite=activite
        this.nombreJours=nbrjrs
        this.dateDebut=dateDebut
        this.validation=validation
    }
}

let stagiaires=[]
let activities=[]
let select_activites = document.querySelector(".select_activites")
let searchBtn=document.querySelector(".searchBtn")
let idInput=document.querySelector(".idInput")
let stagiaire={}
let nbrJours=document.querySelector(".nbrJours")
let dateDebut=document.querySelector(".dateDebut")
let stagiairesAjoutées=[]
let table=document.querySelector("table")
let selectedStagiaire={}
let validation=document.querySelector(".validation")
let valide=""
let stagiaireModifier

document.addEventListener("DOMContentLoaded",chargement)
document.querySelector(".supprimerBtn").addEventListener("click",supprimer)
document.querySelector(".modifierBtn").addEventListener("click",modifier)
document.querySelector(".ajouter").addEventListener("click",(e)=>{
    e.preventDefault()
    ajouter()
})
searchBtn.addEventListener("click",(e)=>{
e.preventDefault()
search()
})

function chargement(){
    let request=new XMLHttpRequest()
    request.open("GET","stagiaires.json",true)
    request.onreadystatechange=function(){
        if(this.readyState== 4 && this.status==200){
            stagiaires=JSON.parse(this.responseText).Stagiaires
            activities=JSON.parse(this.responseText).Activities
            activities.forEach((item)=>{
                let option=""
                option=`<option>${item.libelle}</option>`
                select_activites.innerHTML+=option
            })
        }
    }
    request.send()
}
function search(){
    stagiaire=stagiaires.find((item)=>{
        return item.id==idInput.value
    })
    console.log(stagiaire)
}
function ajouter(){
    console.log(valide)
    let stagiaireAjouté=new Stagiaire(stagiaire.id,stagiaire.nom,stagiaire.prenom,stagiaire.age,stagiaire.branche,select_activites.value,nbrJours.value,dateDebut.value,validation.checked)
    stagiairesAjoutées.push(stagiaireAjouté)
    console.log(stagiairesAjoutées)
    afficher()
}
    function afficher(){
    let tr=""
    stagiairesAjoutées.forEach((item)=>{
        if(item.validation==true){
            valide="checked"
        }
        else{
            valide=""
        }
        tr+=`<tr><td>${item.id}</td>
        <td>${item.nom}</td>
        <td>${item.prenom}</td>
        <td>${item.age}</td>
        <td>${item.branche}</td>
        <td>${item.activite}</td>
        <td>${item.nombreJours}</td>
        <td>${item.dateDebut}</td>
        <td><input type="checkbox" class="validation" ${valide}></td>
        </tr>`
        valide=""
    })
    table.querySelector("tbody").innerHTML=tr
    let tRow=table.querySelectorAll("tr")
    for(let i=1;i<tRow.length;i++){
        tRow[i].addEventListener("click",()=>{
            for(let j=1;j<tRow.length;j++){
                tRow[j].classList.remove("green")
            }
            tRow[i].classList.add("green")
            selectedStagiaire=tRow[i].getElementsByTagName("td")[0].textContent
            console.log(selectedStagiaire)
        })
    }
}
function supprimer(){
    stagiairesAjoutées=stagiairesAjoutées.filter((item)=>{
        return item.id!=selectedStagiaire
    })
    afficher()
}
function modifier(){
    stagiaireModifier=stagiairesAjoutées.find((item)=>{
        return item.id==selectedStagiaire
    })
    stagiairesAjoutées=stagiairesAjoutées.filter((item)=>{
        return item.id!=selectedStagiaire
    })
    stagiaire=stagiaireModifier
    document.querySelector(".idInput").value=stagiaire.id
    select_activites.value=stagiaire.activite
    nbrJours.value=stagiaire.nombreJours
    dateDebut.value=stagiaire.dateDebut
    validation.checked=stagiaire.validation
}
