class Stagiaire{
    constructor(id,nom,prenom,age,branche,activite,nbrjrs,dateDebut){
        this.id=id
        this.nom=nom
        this.prenom=prenom
        this.age=age
        this.branche=branche
        this.activite=activite
        this.nombreJours=nbrjrs
        this.dateDebut=dateDebut
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

document.addEventListener("DOMContentLoaded",chargement)
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
    let stagiaireAjouté=new Stagiaire(stagiaire.id,stagiaire.nom,stagiaire.prenom,stagiaire.age,stagiaire.branche,select_activites.value,nbrJours.value,dateDebut.value)
    stagiairesAjoutées.push(stagiaireAjouté)
    console.log(stagiairesAjoutées)
    
}
