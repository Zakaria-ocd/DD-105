let nom = document.querySelector("#name");
let prenom = document.querySelector("#fstname");
let age = document.querySelector("#age");
let stagiares = [];
document.querySelector("table").style.display="none";
document.querySelector(".ajouter").addEventListener("click", function (e) {
  e.preventDefault();
  let stagiare = {};
  stagiare.nom = nom.value;
  stagiare.prenom = prenom.value;
  stagiare.age = Number(age.value);
  stagiares = [...stagiares, stagiare];
  console.log(stagiares);
});
document.querySelector(".afficher").addEventListener("click", function (e) {
    e.preventDefault();
    stagiares.map((item) => {
        console.log(item)
        let trdata = document.createElement("tr")
        document.querySelector("table").append(trdata)
        let tdnom=document.createElement("td")
        tdnom.textContent=item.nom 
        trdata.append(tdnom)
        let tdprenom=document.createElement("td")
        tdprenom.textContent=item.prenom 
        trdata.append(tdprenom)
        let tdage=document.createElement("td")
        tdage.textContent=item.age
        trdata.append(tdage)
        document.querySelector("table").style.display="block";
        let tdelete=document.createElement("button")
        tdelete.textContent="delete"
        let tddel=document.createElement("td")
        tddel.append(tdelete)
        trdata.append(tddel)
        tdelete.classList.add("btndel")
        tdelete.addEventListener("click",function(e){
          e.preventDefault;
          trdata.removeAttribute
        })
    });
});
