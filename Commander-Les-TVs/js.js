let nomTv= document.querySelector(".selectTVs")
let paragraphSelect=document.querySelector(".selectTVs +p")
let quantiteTv=document.querySelector(".inputQuantite")
let paragraphQuantite=document.querySelector(".inputQuantite +p")
let searchTv=""
let checkTVs=false
let checkQuantite=false
let tvSelected=[]
let prixHT=0
let prixTVsSelected=""
let quantiteTvsSelected=""
let tvs_commande=[]
document.querySelector(".ajouterPanier").addEventListener("click",validation)
document.addEventListener("DOMContentLoaded",remplirTVs)
function validation(e){
    e.preventDefault()
    if(nomTv.value != "Choisir un TV"){
        nomTv.classList.remove("invalid")
        paragraphSelect.style.visibility="hidden"
        nomTv.classList.add("valid")
        checkTVs=true
        
    }
    else{
        nomTv.classList.remove("valid")
        paragraphSelect.style.visibility="visible"
        nomTv.classList.add("invalid")
        checkTVs=false
    }
    if(Number(quantiteTv.value)>0 && Number(quantiteTv.value)<=10 && quantiteTv.value.length<=2){
        quantiteTv.classList.remove("invalid")
        paragraphQuantite.style.visibility="hidden"
        quantiteTv.classList.add("valid")
        checkQuantite=true  
    }
    else{
        quantiteTv.classList.remove("valid")
        paragraphQuantite.style.visibility="visible"
        quantiteTv.classList.add("invalid")
        checkQuantite=false
    }
    if(checkQuantite==true && checkTVs==true){
        search()
        ajouterAuPanier()

    }
}
function remplirTVs(){
    let request=new XMLHttpRequest()
    request.open("GET","test.json",true)
    request.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText)
            tvs=(JSON.parse((this.responseText))).tvs
            let option=""
            option+=`<option>Choisir un TV</option>`
            for(let i=0;i<tvs.length;i++){
                option+=`<option>${tvs[i].nom}</option>`
            }
            nomTv.innerHTML=option
        }
    }
    request.send()
}
function search(){
    searchTv=tvs.find((item)=>{
        return item.nom==nomTv.value
    })
    let tv={}
    tv.nom=nomTv.value
    tv.quantite=Number(quantiteTv.value)
    tv.image=searchTv.image
    tv.supprimer="<button>Supprimer</button>"
    tvSelected.push(tv)
}
function ajouterAuPanier(){
    let rowTV=""
    for(let i=0;i<tvSelected.length;i++){
        rowTV+=`<tr><td>${tvSelected[i].nom}</td>`
        rowTV+=`<td>${tvSelected[i].quantite}</td>`
        rowTV+=`<td><img src="${tvSelected[i].image}"/></td>`
        rowTV+=`<td>${tvSelected[i].supprimer}</td></tr>`
    }
    document.querySelector("tbody").innerHTML=rowTV
    supprimerDuPanier()
    calculerPrixHT()
    JsonSerialiser()
}
function supprimerDuPanier(){
    let buttons=document.querySelectorAll("td button")
    // console.log(buttons)
    for(let i=0; i<buttons.length;i++){ 
        buttons[i].addEventListener("click",()=>{
            // console.log(tvSelected[i])
            tvSelected=tvSelected.filter((item,index)=>{
            return index != i
            }) 
            // console.log(tvSelected) 
            ajouterAuPanier()
        })
    }
}
function calculerPrixHT(){
    for (let i=0;i<tvSelected.length;i++){
        prixTVsSelected=tvs.find((item)=>{
        return item.nom==tvSelected[i].nom
        })
        prixTVsSelected=prixTVsSelected.prix
        quantiteTvsSelected=tvSelected[i].quantite
        prixHT+=prixTVsSelected*quantiteTvsSelected
        
}
console.log(prixHT)
document.querySelector(".prixHT").textContent=prixHT+" DHS"
calculerPrixTTC()
prixHT=0
}
function calculerPrixTTC(){
    document.querySelector(".prixTTC").textContent=prixHT+(prixHT*20/100)+" DHS"
}
function JsonSerialiser(){
    tvs_commande=tvSelected.map((item)=>{
        return {"reference":item.nom,"quantite":item.quantite}
    })
    tvs_commande={"tvs_commande":tvs_commande}
    tvs_commande=JSON.stringify(tvs_commande)
    console.log(tvs_commande)
}
// let a= ""
// let b=1
// let c=a+b
// console.log(typeof c)













// function valider(e){
//     e.preventDefault()
//     let selectTVs = document.querySelector(".selectTVs");
//     let inputQuantite = document.querySelector(".inputQuantite");

//     if (selectTVs.value =="Choisir un TV") {
//         selectTVs.nextElementSibling.style.visibility = "visible";
//         selectTVs.classList.add("invalid");
//     } else {
//         selectTVs.nextElementSibling.style.visibility = "hidden";
//         selectTVs.classList.add("valid");
//         selectTVs.classList.remove("invalid");
//     }
//     if(Number(document.querySelector(".inputQuantite").value)>10 || document.querySelector(".inputQuantite").value=="" ){
//         document.querySelector(".inputQuantite").nextElementSibling.style.visibility="visible"
//         inputQuantite.classList.add("invalid")
//         console.log("NO2")
//     }
//     else{
//         inputQuantite.nextElementSibling.style.visibility="hidden"
//         inputQuantite.classList.add("valid")
//         inputQuantite.classList.remove("invalid")
//         console.log("YES2")
//     }
//     ajouterAuPanier()
// }
// let tvs=[]
// let stagiairesShow=[]
// let selectNomsTVs=document.querySelector(".selectTVs")
// document.addEventListener("DOMContentLoaded",remplirTVs)
// document.querySelector(".ajouterPanier").addEventListener("click",valider)
// function remplirTVs(){
// let request =new XMLHttpRequest()
// request.open("GET","test.json",true)
// request.onreadystatechange=function(){
//     if(this.readyState==4 && this.status==200){
//         tvs=JSON.parse((this.responseText)).tvs
//         console.log(tvs)
//         let options=""
//         options+=`<option >Choisir un TV</option>`
//         for(let i=0;i<tvs.length;i++){
//         options+=`<option>${tvs[i].nom}</option>`
//         }
//         selectNomsTVs.innerHTML=options
//     }
// }
// request.send()
// }
// function ajouterAuPanier(){
//     let stagiaireShow={}
//     stagiaireShow.nom=selectTVs.
// }