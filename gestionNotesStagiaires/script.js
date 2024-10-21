let stagiaires=[]
let inputId=document.getElementById("inputId")
let inputNom=document.getElementById("inputNom")
let inputNote=document.getElementById("inputNote")
let valid = true

document.getElementById("addStagiaire").addEventListener("click",validation)


function validation(e){
    e.preventDefault()
    if(inputId.value==""){
        inputId.classList.remove("success")
        inputId.classList.add("danger")
        valid=false
        document.querySelector("#idParagraph").style.visibility="visible"
    }
    else{
        document.querySelector("#idParagraph").style.visibility="hidden"
        inputId.classList.remove("danger")
        inputId.classList.add("success")
    }
    if(inputNom.value==""){
        inputId.classList.remove("success")
        document.querySelector("#nomParagraph").style.visibility="visible"
        inputNom.classList.add("danger")
        valid=false
    }
    else{
        document.querySelector("#nomParagraph").style.visibility="hidden"
        inputNom.classList.remove("danger")
        inputNom.classList.add("success")
    }
    if(inputNote.value==""){
        inputId.classList.remove("success")
        document.querySelector("#noteParagraph").style.visibility="visible"
        inputNote.classList.add("danger")
        valid=false
    }
    else{
        document.querySelector("#noteParagraph").style.visibility="hidden"
        inputNote.classList.remove("danger")
        inputNote.classList.add("success")
    }
    ajouterNote()
    
}

function gereAjoutNote(){
    let content=""
    let colorNote=''
    let meilleurNote=0
        stagiaires.forEach((item)=>{
            if(meilleurNote<item.note){
                meilleurNote=item.note
            }
            colorNote=item.note>=10?"green":"red"
            content+=`<tr>
            <td>${item.id}</td>
            <td>${item.nom}</td>
            <td style="color:${colorNote}">${item.note}</td> 
            <td>${item.filiere}</td>
            <td><button id="${item.id}" onclick=supprimer(event)>Supprimer</button></td></tr>`
        })
        content+=`<tr><td colspan="2">LA MEILLEUR NOTE :</td>
        <td>${meilleurNote}</td></tr>`
        document.querySelector("tbody").innerHTML=content

}

function ajouterNote(){
    if(valid){
        let stagiaire={}
        stagiaire.id=inputId.value
        stagiaire.nom=inputNom.value
        let filieres=document.querySelectorAll("input[name='filiere']")
        for (let i=0;i<filieres.length;i++){
            if(filieres[i].checked){
                stagiaire.filiere=filieres[i].value
            }
        }
        stagiaire.note=inputNote.value
        stagiaires.push(stagiaire)
    }
    gereAjoutNote()
    valid=true
}
function supprimer(event){
    let cuurentId=event.currentTarget.id
    console.log(cuurentId)
    stagiaires=stagiaires.filter((item)=>{
        return item.id!=cuurentId
    })
    console.log(stagiaires)
    gereAjoutNote()
}