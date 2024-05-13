document.querySelector(".ajouter").addEventListener("click",(e)=>{
    e.preventDefault()
    validation()
})
document.querySelector(".lireBtn").addEventListener("click",(e)=>{
    e.preventDefault()
    lireStagiaire()
})
let trs
let valid=true
let idInput=document.querySelector(".idInput")
let nomInput=document.querySelector(".nomInput")
let noteInput=document.querySelector(".noteInput")
let stagiaireId;
let TDI=document.getElementById("TDI")
let TDM=document.getElementById("TDM")
let TRJ=document.getElementById("TRJ")
let stagiaires=[]
let notes=[]
let noteMax
let stagiaireEnregistré={}
stagiaireEnregistré.id=1
stagiaireEnregistré.nom="Alami Hicham"
stagiaireEnregistré.filière="TDI"
stagiaireEnregistré.note=5
stagiaires.push(stagiaireEnregistré)
supprimer()
function validation(){
    if(idInput.value==""){
        valid=false
        idInput.classList.remove("success")
        idInput.classList.add("danger")
    }
    else{
        idInput.classList.remove("danger")
        idInput.classList.add("success")
    }
    if(nomInput.value==""){
        valid=false
        nomInput.classList.remove("success")
        nomInput.classList.add("danger")    }
    else{
        nomInput.classList.remove("danger")
        nomInput.classList.add("success")
    }
    if(noteInput.value==""){
        valid=false
        noteInput.classList.remove("success")
        noteInput.classList.add("danger")}
    else{
        noteInput.classList.remove("danger")
        noteInput.classList.add("success")
    }
    if(valid==false){
        valid=true
    }
    else{
        ajouterNote()
    }
}
function ajouterNote(){
    let stagiaire={}
    stagiaire.id=idInput.value
    stagiaire.nom=nomInput.value
    // let filieres=document.querySelectorAll(".filiere")
    // for(let i=0;i<filieres.length;i++){
    //     if(filieres[i].checked==true){
    //         stagiaire.filière=filieres[i].value
    //     }
    // }
    if(TDI.checked==true){
        stagiaire.filière=TDI.value
    }
    else if(TDM.checked==true){
        stagiaire.filière=TDM.value
    }
    else if(TRJ.checked==true){
        stagiaire.filière=TRJ.value
    }
    stagiaire.note=noteInput.value
    stagiaires.push(stagiaire)
    console.log(stagiaires)
    afficher()
}
function afficher(){
    trs=""
    stagiaires.forEach((item)=>{
        trs+=`<tr><td>${item.id}</td>
        <td class="px-4 py-2">${item.nom}</td>
        <td class="px-4 py-2">${item.note}</td>
        <td class="px-4 py-2">${item.filière}</td>
        <td class="px-4 py-2"><button class="supprimer">Supprimer</button></td></tr>`
    })
    actualiserNoteMax()
    document.querySelector("tbody").innerHTML=trs
    supprimer()
}
function lireStagiaire(){
    let stagiaireLire=stagiaires.find((item)=>{
        return item.id==idInput.value
    })
    idInput.value=stagiaireLire.id
    nomInput.value=stagiaireLire.nom
    if(stagiaireLire.filière==TDI.value){
        TDI.checked=true
    }
    else if(stagiaireLire.filière==TDM.value){
        TDM.checked=true
    }
    else if(stagiaireLire.filière==TRJ.value){
        TRJ.checked=true
    }
    noteInput.value=stagiaireLire.note
}
function supprimer(){
    let buttons=document.getElementsByClassName("supprimer")
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",()=>{
            stagiaireId=document.getElementsByTagName("tr")[i+1].getElementsByTagName("td")[0].textContent
            stagiaires=stagiaires.filter((item)=>{
                return  stagiaireId!=item.id
            })
            afficher()
        })
    }
}
function actualiserNoteMax(){
    noteMax =0
    notes=stagiaires.map((item)=>{
        if(Number(item.note)>noteMax){
            noteMax=item.note
        }
    })
    trs+=`<tr><td class="px-4 py-2" rowspan=2 colspan=2>LA MEILLEUR NOTE<td>
    <td class="px-4 py-2">${noteMax}</td></tr>`
}
let modules= document.querySelectorAll(".nomduleInput:checked");
for(let i=0;i<modules.length;i++){
console.log(modules[i].value);
}