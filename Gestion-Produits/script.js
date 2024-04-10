class Produit{
    constructor(code,titre,description,prix,categorie){
        this.code=code
        this .titre=titre
        this.description=description
        this.prix=prix
        this.categorie=categorie
    }
}
let produits=[]
let code =document.getElementById("codeProduit")
let titre =document.getElementById("titreProduit")
let description =document.getElementById("descriptionProduit")
let prix =document.getElementById("prixProduit")
let categorie =document.getElementById("catégorieProduit")
let validation = true
let produitSupprimé=""
let categories=[]
document.addEventListener("DOMContentLoaded",()=>{
    let code1=1
    let titre1="ArfanOil"
    let description1="huile d'argan"
    let prix1=199
    let categorie1="Santé"
    let code2=2
    let titre2="Nike Zoom"
    let description2="chaussure pour homme"
    let prix2=599
    let categorie2="Sport"
    let produit1 =new Produit(code1,titre1,description1,prix1,categorie1)
    produits.push(produit1)
    let produit2 =new Produit(code2,titre2,description2,prix2,categorie2)
    produits.push(produit2)
    afficher()
    let request=new XMLHttpRequest()
    request.open("GET","file.json",true)
    request.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            categories=JSON.parse((this.responseText)).data
        }
    }
    request.send()
})
document.getElementById("categories").addEventListener("click",afficherCategories)
document.getElementById("ajouter").addEventListener("click",(e)=>{
    e.preventDefault()
    document.querySelector("#formProduits").style.display="block"
})
document.getElementById("annuler").addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("formProduits").style.display="none"
})
document.getElementById("supprimer").addEventListener("click",supprimer)
document.getElementById("vider").addEventListener("click",()=>{
    for (let i=0;i<document.querySelectorAll("#formProduits input").length;i++){
        document.querySelectorAll("#formProduits input")[i].classList.remove("success")
        document.querySelectorAll("#formProduits input")[i].classList.remove("danger")
        document.querySelectorAll("#formProduits p")[i].style.visibility="hidden"
    }})
document.getElementById("sauvegarder").addEventListener("click",(e)=>{
    e.preventDefault()
    for (let i=0;i<document.querySelectorAll("#formProduits input").length;i++){
        if( document.querySelectorAll("#formProduits input")[i].value.length<1){
            document.querySelectorAll("#formProduits input")[i].classList.remove("success")
            document.querySelectorAll("#formProduits input")[i].classList.add("danger")
            document.querySelectorAll("#formProduits p")[i].style.visibility="visible"
            validation=false
        }
        else{
            document.querySelectorAll("#formProduits p")[i].style.visibility="hidden"
            document.querySelectorAll("#formProduits input")[i].classList.remove("danger")
            document.querySelectorAll("#formProduits input")[i].classList.add("success")
        }
    }
    if(validation==false){
            validation=true
    }
    else{
                sauvegarder()
    }

})

function sauvegarder(){
validation=true
let produit ={}
produit.code=code.value
produit.titre=titre.value
produit.description=description.value
produit.prix=prix.value
produit.categorie=categorie.value
produits.push(produit)
afficher()
}
function afficher(){
    let tableDatas=""
    produits.forEach((item)=>{
        tableDatas+=`<tr><td>${item.code}</td>
        <td>${item.titre}</td>
        <td>${item.description}</td>
        <td>${item.prix}</td>
        <td>${item.categorie}</td></tr>`
    })
    document.querySelector("tbody").innerHTML=tableDatas
    selectRow()
}
function selectRow(){
    let tRows= document.querySelector("table").rows
    for(let i=1;i<tRows.length;i++){
        tRows[i].addEventListener("click",()=>{
         for(let k=0;k<tRows.length;k++){
            tRows[k].classList.remove("selected")
        }
        tRows[i].classList.add("selected")
        produitSupprimé=tRows[i]
        produitSupprimé=produitSupprimé.querySelectorAll("td")[0].textContent
        })
    }
}
function supprimer(){
    produits=produits.filter((item)=>{
        return item.code!=produitSupprimé
    })
    afficher()
}
function afficherCategories(){
    let liste=""
    liste+=`<ul><li>${categories[0].titre}</li>
    <li>${categories[1].titre}</li>
    <li>${categories[2].titre}</li></ul>`   
    document.getElementById("listeCategories").innerHTML=liste
}