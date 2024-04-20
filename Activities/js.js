class Stgrs{
    constructor(id,prenom,nom,acivite,nbrJour,dateDebut,Validation){
        this.id=id
        this.prenom=prenom
        this.nom=nom
        this.acivite=acivite
        this.nbrJour=nbrJour
        this.dateDebut=dateDebut
        this.Validation=Validation
    }
}
document.querySelector(".contAjouter").style.display="none"
document.querySelector(".table_btns").style.display="none"
let Stagiaires=[]
let Activities=[]
let valueStagiaire
let Stagiaire=""
let selectAcitivite= document.querySelector(".select-Acivite")
let option=""
let stagiairesShow=[]
let stagiaireModifier=""
let addStagiaireModifier=false
document.addEventListener("DOMContentLoaded",()=>{
const request = new XMLHttpRequest()
request.open("GET","test.json",true)
request.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        Stagiaires=JSON.parse(this.responseText).Stagiaires
        Activities=JSON.parse(this.responseText).Activites
        console.log(Stagiaires)
        console.log(Activities)
        Activities.forEach((element)=>{
            option+=`<option>${element.libelle}</option>`
         }
         )
         selectAcitivite.innerHTML=option
    }
}
request.send();
}
)
document.querySelector(".btn-search").addEventListener("click",searchId)
document.querySelector(".btn-ajouter").addEventListener("click",ajouter)
document.querySelector(".btn-supprimer").addEventListener("click",supprimer)
document.querySelector(".btn-modifier").addEventListener("click",modifier)

function searchId(e){
    e.preventDefault();
    Stagiaire=Stagiaires.find((element)=>{
        return element.id==document.querySelector(".inputId").value
    })
    console.log(Stagiaire)
    if(document.querySelector(".inputId").value=Stagiaire.id){
        document.querySelector(".contAjouter").style.display="flex"
    }   
    
}
function ajouter(e){
    e.preventDefault()
    document.querySelector(".btn-search").style.display="inline"
    document.querySelector(".table_btns").style.display="block"
    document.querySelector(".contAjouter").style.display="none"
    console.log(Stagiaire)
    if(addStagiaireModifier==false){
    let id=Stagiaire.id
    let nom=Stagiaire.nom
    let prenom=Stagiaire.prenom
    let acivite=selectAcitivite.value
    let nbrJour=document.querySelector(".nbrJours").value
    let dateDebut=document.querySelector(".dateDebut").value
    let Validation=document.querySelector(".checkValide").checked
    let stagiaireShow= new Stgrs(id,prenom,nom,acivite,nbrJour,dateDebut,Validation)
    stagiairesShow.push(stagiaireShow)
    console.log(stagiairesShow)
    console.log(stagiaireShow)}
    else{
        let id=stagiaireModifier.id
                let nom=stagiaireModifier.nom
                let prenom=stagiaireModifier.prenom
                let acivite=selectAcitivite.value
                let nbrJour=document.querySelector(".nbrJours").value
                let dateDebut=document.querySelector(".dateDebut").value
                let Validation=document.querySelector(".checkValide").checked
                let stagiaireShow= new Stgrs(id,prenom,nom,acivite,nbrJour,dateDebut,Validation)
                stagiairesShow.push(stagiaireShow)
        stagiairesShow=stagiairesShow.filter((element)=>{
            return  stagiaireModifier.id != element.id
        })
        stagiairesShow.push(stagiaireShow)
    }
    afficher_activites();
    addStagiaireModifier=false
    console.log(stagiairesShow)
}
function afficher_activites(){
let validCh =
stagiairesShow.sort((a, b) => a.id - b.id)
let tdValue=""
stagiairesShow.forEach((element)=>{
tdValue+=`<tr><td>${element.id}</td>`
tdValue+=`<td>${element.prenom}</td>`
tdValue+=`<td>${element.nom}</td>`
tdValue+=`<td>${element.acivite}</td>`
tdValue+=`<td>${element.nbrJour}</td>`
tdValue+=`<td>${element.dateDebut}</td>`
tdValue+=`<td><input type ="checkbox" class="valideInpt" checked=${element.Validation}/></tr>`
document.querySelector("tbody").innerHTML=tdValue
console.log(element.Validation)
})
let tableRows=document.querySelector("table").rows
console.log(tableRows.length)
for(let i=1;i<tableRows.length;i++){
tableRows[i].addEventListener("click",()=>{
    for(let j=1;j<tableRows.length;j++){
        tableRows[j].classList.remove("bg")
    }
    tableRows[i].classList.add("bg")
    valueStagiaire=tableRows[i].getElementsByTagName("td")[0].textContent
    console.log(valueStagiaire)
    // stagiaireModifier=""
})
}}
function supprimer (){
    stagiairesShow = stagiairesShow.filter(function(itemValue){
        return itemValue.id != valueStagiaire;
})
    console.log(stagiairesShow)
    if(stagiairesShow.length>0){
        afficher_activites()
    }
    else{
document.querySelector("tbody").innerHTML=""
document.querySelector(".table_btns").style.display="none"
    }
}
function modifier (){
    addStagiaireModifier=true
    document.querySelector(".btn-search").style.display="none"
    document.querySelector(".table_btns").style.display="none"
    document.querySelector(".contAjouter").style.display="flex"
    stagiaireModifier= stagiairesShow.find(function(itemValue){
        return itemValue.id == valueStagiaire;
}
    )
    console.log(stagiaireModifier)
    document.querySelector(".inputId").value=stagiaireModifier.id
    document.querySelector(".select-Acivite").value=stagiaireModifier.acivite
    document.querySelector(".nbrJours").value=stagiaireModifier.nbrJour
    document.querySelector(".dateDebut").value=stagiaireModifier.dateDebut
    document.querySelector(".checkValide").checked=stagiaireModifier.Validation
    
}
// for(let i =0;i<document.querySelectorAll(".sel option").length;i++){
//     console.log(document.querySelectorAll(".sel option")[i].textContent)
//     document.querySelectorAll(".sel option")[i].value=4-i
//     console.log(document.querySelectorAll(".sel option")[i])
// }