class Stagiaire{
    constructor(id,nom,note,groupe,filiere,matieres){
        this.id=id
        this.nom=nom
        this.note=note
        this.groupe=groupe
        this.filiere=filiere
        this.matieres=matieres
    }
}
let stagiaires=[]
let index=""
let stagiaire1=new Stagiaire(1,"Zakaria Ouchouid",16,"TDD104","tdm",["php","javascript"])
let stagiaire2=new Stagiaire(2,"Khalil Abdo",5,"TDD106","tdi",["php"])
let stagiaire3=new Stagiaire(3,"Jallam Ahmed",10,"TDD105","trj",["python","javascript","php"])
stagiaires.push(stagiaire1)
stagiaires.push(stagiaire2)
stagiaires.push(stagiaire3)
let modifierCheck=false
let idInput=document.getElementById("id")
let nomInput=document.getElementById("nom")
let noteInput=document.getElementById("note")
let groupeSelect=document.getElementById("groupe")
let valid=true
document.addEventListener("DOMContentLoaded",chargement)

function chargement(){
    let request= new XMLHttpRequest()
    let groupes=""
    request.open("Get","groupe.json",true)
    request.onload=function(){
        if(this.status==200){
            groupes=JSON.parse(this.responseText).groupes
            let option=""
            groupes.forEach((item)=>{
                option+=`<option value=${item}>${item}</option>`
            })
            groupeSelect.innerHTML=option
        }
    }
    request.send()
}
document.getElementById("ajouter").addEventListener("click",ajouter)
function validation(){
    if(idInput.value==""){
        idInput.style.backgroundColor="red"
        valid=false
    }
    else{
        idInput.style.backgroundColor=""
    }
    if(nomInput.value==""){
        valid=false
        nomInput.style.backgroundColor="red"
    }
    else{
        nomInput.style.backgroundColor=""
    }
    if(noteInput.value==""){
        valid=false
        noteInput.style.backgroundColor="red"
    }
    else{
        noteInput.style.backgroundColor=""
    }
}
function ajouter(e){
    e.preventDefault()
    validation()
    if(valid==true){
    if(modifierCheck==false){
    let filiere=document.querySelector("input[name='filiere']:checked")
    let matiere=document.querySelectorAll("input[name='matieres']:checked")
    let matieres=[]
    matiere.forEach((item)=>{
        matieres.push(item.value)
    })
    let stagiaire=new Stagiaire(idInput.value,nomInput.value,noteInput.value,groupeSelect.value,filiere.value,matieres)
    stagiaires.push(stagiaire)
    console.log(stagiaire)
    afficher()
}
else{
    modifierCheck=false
    ajouterModifier()
    afficher()
}
}   
else{
    valid=false
}
}
function afficher(){
    let tr=""
    let decision=""
    let apperance=""
    let notes=[]
    for(let i=0;i<stagiaires.length;i++){
        if(stagiaires[i].note>=10){
            decision="Admis"
            apperance="success"
        }
        else if(stagiaires[i].note<10){
            decision="Redoublant"
            apperance="danger"
        }
        notes.push(stagiaires[i].note)
        tr+=`<tr><td>${stagiaires[i].id}</td>
        <td class=${apperance}>${stagiaires[i].nom}</td>
        <td>${stagiaires[i].note}</td>
        <td>${stagiaires[i].groupe}</td>
        <td>${stagiaires[i].filiere}</td>
        <td>${stagiaires[i].matieres}</td>
        <td><button id=${i} onclick=supprimer(event)>Supprimer</button>
        <button id=${i} onclick=modifier(event)>Modifier</button></td>
        <td>${decision}</td></tr>`
    }
    document.querySelector("tbody").innerHTML=tr   
    document.getElementById("meilleurNote").innerHTML=Math.max(...notes)

}
function supprimer(event){
    let stagiaireSupprimé=stagiaires[event.currentTarget.id].id
    stagiaires=stagiaires.filter((item)=>{
        return item.id!=stagiaireSupprimé
    })
    afficher()
}
function modifier(event){
    modifierCheck=true
    let stagiaireModifier=stagiaires[event.currentTarget.id]
    index=event.currentTarget.id
    idInput.value=stagiaireModifier.id
    nomInput.value=stagiaireModifier.nom
    noteInput.value=stagiaireModifier.note
    let filiere=document.querySelectorAll("input[name='filiere']")
    console.log(filiere)
    filiere.forEach((item)=>{
        console.log("oooo")
        if(item.value==stagiaireModifier.filiere){
            item.checked=true
            console.log("sdf")
        }
    })
    let matiere=document.querySelectorAll("input[name='matieres']")
    for(let i=0;i<matiere.length;i++){
        matiere[i].checked=false
        console.log("lkj")
        for(let j=0;j<stagiaireModifier.matieres.length;j++){
            if(matiere[i].value==stagiaireModifier.matieres[j]){
                matiere[i].checked=true
            }
        }
    }
}
function ajouterModifier(){
    let stagiaireModifier=stagiaires[index]
    stagiaireModifier.id=idInput.value
    stagiaireModifier.nom=nomInput.value
    stagiaireModifier.note=noteInput.value
    stagiaireModifier.groupe=groupeSelect.value
    let filiere=document.querySelector("input[name='filiere']:checked").value
    stagiaireModifier.filiere=filiere
    let matieres=[]
    let matiere=document.querySelectorAll("input[name='matieres']:checked")
    matiere.forEach((item)=>{
        matieres.push(item.value)
    })
    stagiaireModifier.matieres=matieres
}
let validnomProd=/^[a-z0-9+;_%]+@gmail.com$/i
let nomProd=document.getElementById("nomProd")
document.getElementById("btnn").addEventListener("click",()=>{
    if((validnomProd).test(nomProd.value)){
    console.log('yesss')
}
})
let stagiaires=JSON.stringify(stagiaires)
let request =new XMLHttpRequest()
request.open("Post",url,true)
request.setRequestHeader("Content-type","application/json ; charset=UTF-8")
request.send(stagiaires)
request.onload=function(){
    if(this.status==200){
        console.log("kjkj")
    }
}
