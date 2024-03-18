const stagiares = [];
document.querySelector(".btn-envoyer").addEventListener("click", function (e) {
e.preventDefault();
if(document.querySelector(".btn-envoyer").textContent==="Envoyer"){
  let stagiare = {};
  stagiares.push(stagiare)
  stagiare.cin=document.querySelector(".input-cin").value;
  stagiare.nom=document.querySelector(".input-nom").value;
  stagiare.prenom=document.querySelector(".input-prenom").value;
  console.log(stagiares);

}
}
);
document.querySelector(".btn-search").addEventListener("click", function (e) {
  e.preventDefault();
  if(document.querySelector(".btn-search").textContent==="Search"){
  for ( let i=0;i<stagiares.length;i++){
    if(document.querySelector(".input-search").value===stagiares[i].cin){
      document.querySelector(".input-cin").value=stagiares[i].cin;
      document.querySelector(".input-nom").value=stagiares[i].nom;
      document.querySelector(".input-prenom").value=stagiares[i].prenom;
      document.querySelector(".btn-search").textContent="Modify";
      document.querySelector(".btn-envoyer").textContent="Annuler";
      console.log("hi");
      document.querySelector(".btn-search").classList.add("btn-modify");
      document.querySelector(".btn-modify").classList.remove("btn-search");
    };
    document.querySelector(".btn-modify").addEventListener("click", function (e) {
    e.preventDefault();
    if(document.querySelector(".btn-modify").textContent==="Modify"){
    stagiares[i].cin=document.querySelector(".input-cin").value;
    stagiares[i].nom=document.querySelector(".input-nom").value;
    stagiares[i].prenom=document.querySelector(".input-prenom").value;
    document.querySelector(".input-cin").value=""
    document.querySelector(".input-nom").value=""
    document.querySelector(".input-prenom").value=""
    document.querySelector(".input-search").value=""
    document.querySelector(".btn-modify").textContent="Envoyer";
    document.querySelector(".btn-modify").textContent="Search";
    console.log("ho");
    document.querySelector(".btn-modify").classList.add("btn-search");
    document.querySelector(".btn-search").classList.remove("btn-modify");
    }
  }
   );
  break; 
  }
}
}
);
document.querySelector(".btn-envoyer").addEventListener("click", function (e) {
  e.preventDefault(); 
  if(document.querySelector(".btn-annuler").textContent==="Annuler"){    
    document.querySelector(".input-cin").value=""
    document.querySelector(".input-nom").value=""
    document.querySelector(".input-prenom").value=""
    document.querySelector(".input-search").value=""
    document.querySelector(".btn-annuler").textContent="Envoyer";
    document.querySelector(".btn-modify").textContent="Search";
    console.log("ha")
    document.querySelector(".btn-annuler").classList.add("btn-envoyer");
    document.querySelector(".btn-envoyer").classList.remove("btn-annuler");
  } 
  }
);
// document.addEventListener("DOMContentLoaded",()=>{
//   branchlist.map((itemValue)=>{
//     let option =document.createElement("option");
//     option.setAttribute("value",itemValue.code)
//     option.innerHTML=itemValue.libelle
//     branche.append(option)

//   })
// })

