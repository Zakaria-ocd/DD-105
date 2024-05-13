class Stagiaire{
    constructor(id,nom,note,filiere,groupe,matieres){
        this.id=id
        this.nom=nom
        this.note=note
        this.filiere=filiere
        this.groupe=groupe
        this.matieres=matieres
    }
}
let indice=""
let modifierAction=false
let stagiaires=[]
let groupes=[]
let valid=true
let groupeSelect=document.getElementById("groupe")
let idInput=document.getElementById("id")
let nomInput=document.getElementById("nom")
let noteInput=document.getElementById("note")
let filiere=document.querySelector("#filiere:checked")
let stagiaire1=new Stagiaire(1,"Zakaria Ouchouid",16,"TDM","TDD104",["PHP","JAVASCRIPT"])
let stagiaire2=new Stagiaire(2,"Khalil Abdo",5,"TDI","TDD106",["PHP"])
let stagiaire3=new Stagiaire(3,"Jallam Ahmed",10,"TRJ","TDD105",["PYTHON","JAVASCRIPT","PHP"])
stagiaires.push(stagiaire1)
stagiaires.push(stagiaire2)
stagiaires.push(stagiaire3)
let note1=15
let note2=20

document.addEventListener("DOMContentLoaded",chargement)
document.getElementById("ajouter").addEventListener("click",ajouter)
function chargement(){
    try{
        
    let request=new XMLHttpRequest()
    request.open("Get","groupe.json",true)
    request.onload=function(){
        if( this.status==200){
            groupes=JSON.parse(this.responseText).groupes
            let option=""
            groupes.forEach((item)=>{
                option+=`<option value="${item}">${item}</option>`
            })
            groupeSelect.innerHTML=option
        }
    }
    request.send()
    if(note1>14){
    throw "toobig"
    }
    else if(note1<14){
        throw "small"
    }
    
}
catch(error){
    console.log( error);
}
finally{
    console.log("done")
}
}

function validation(){
    if(idInput.value==""){
        valid=false
        idInput.style.backgroundColor="red"
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
        if(modifierAction==false){
        let filiere=document.querySelector("input[name='filiere']:checked")
        let matiere=document.querySelectorAll("input[name='matiere']:checked")
        let matieres=[]
        matiere.forEach((item)=>{
            matieres.push(item.value)
        })
        let stagiaire=new Stagiaire(idInput.value,nomInput.value,noteInput.value,filiere.value,groupeSelect.value,matieres)
        stagiaires.push(stagiaire)
        afficher()
        }
        else{
            ajouterModifier()
            modifierAction=false
        }
    }
    else{
        valid=true
    }
}
function afficher(){
    let tr=""
    let i=0
    stagiaires.forEach((item)=>{
        tr+=`<tr><td>${item.id}</td>
        <td>${item.nom}</td>
        <td>${item.note}</td>
        <td>${item.filiere}</td>
        <td>${item.groupe}</td>
        <td>${item.matieres.length} matières</td>
        <td>${"decision"}</td>
        <td><button id=${i} onclick=supprimer(event)>Supprimer</button>
        </td><td><button id=${i} onclick=modifier(event)>Modifier</button></td>
        </tr>`
        i+=1
    })
    document.querySelector("tbody").innerHTML=tr
}
function supprimer(event){
    let stagiaireId=stagiaires[event.currentTarget.id].id
    stagiaires=stagiaires.filter((item)=>{
        return item.id!=stagiaireId
    })
    afficher()
}
function modifier(event){
    modifierAction=true
    indice=event.currentTarget.id
    let stagiaireModifier=stagiaires[event.currentTarget.id]
    idInput.value=stagiaireModifier.id
    nomInput.value=stagiaireModifier.nom
    noteInput.value=stagiaireModifier.note
    let filiere=document.querySelectorAll("input[name='filiere']")
    filiere.forEach((item)=>{
        if(item.value==stagiaireModifier.filiere){
            item.checked=true
        }
    })
    groupeSelect.value=stagiaireModifier.groupe
    let matiere=document.querySelectorAll("input[name='matiere']")
    for(let i=0;i<matiere.length;i++){
        matiere[i].checked=false
        for(let j=0;j<stagiaireModifier.matieres.length;j++){
            if(matiere[i].value==stagiaireModifier.matieres[j]){
                matiere[i].checked=true
            }
        }
    }
}
function ajouterModifier(){
    stagiaires[indice].id=idInput.value
    stagiaires[indice].nom=nomInput.value
    stagiaires[indice].note=noteInput.value
    let filiere=document.querySelector("input[name='filiere']:checked")
    let matiere=document.querySelectorAll("input[name='matiere']:checked")
    stagiaires[indice].filiere=filiere.value
    let listesMatieres=[]
    matiere.forEach((item)=>{
        listesMatieres.push(item.value)
    })
    stagiaires[indice].matieres=listesMatieres
    stagiaires[indice].groupe=groupeSelect.value
    afficher()
}
let x = Number(prompt("Donnez un numéro entre 5 et 10"));
try {
if(x == "") throw "Vide";
if(isNaN(x)) throw "Ce n’est pas un numéro";
x = Number(x);
if(x < 5) throw "Trop petit";
if(x > 10) throw "Trop grand";
}
catch(err) 
{
console.log(err);
}
