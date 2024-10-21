document.addEventListener("DOMContentLoaded",chargement)

function chargement(){
    let request=new XMLHttpRequest()
    request.open("GET","filiere.json",true)
    request.onreadystatechange=function(){
        if(this.readyState==4){
            let filieres=JSON.parse(this.response).filiere
            let stagiaires=JSON.parse(this.response).stagiaires
            let content=""
            filieres.forEach((item)=>{
                content+=`<option value="${item.id}">${item.intitule}</option>`
            })
            document.getElementById("filiere").innerHTML=content
            let infos=""
            stagiaires.forEach((item)=>{
                infos+=`<tr>
                <td>${item.id}</td>
                <td>${item.nom}</td>
                <td >${item.prenom}</td> 
                <td>${item.groupe}</td>
                <td><button id="${item.id}" onclick=supprimer(event)>Supprimer</button></td></tr>`
            })
            document.querySelector("tbody").innerHTML=infos
        }
    }
    request.send()

}
function somme(){
    return "kjkjkjkj"
}
console.log(somme)
console.log(somme())