document.querySelector(".div3").style.display = "none";
let pr = document.querySelector(".pr");
let nom = document.querySelector(".nom");
let age = document.querySelector(".age");
let grp = document.querySelector(".grp");
const Stagiares = [];
document.querySelector(".ajt").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("lklfdkg");
  Stagiares.push({
    Prenom: pr.value,
    Nom: nom.value,
    Age: age.value,
    Groupe: grp.value,
  });
});

document.querySelector(".aff").addEventListener("click", (e) => {
  e.preventDefault();
  Stagiares.map((element) => {
    console.log("lksldk");
    console.log(Stagiares);
    let table = document.querySelector("table");
    let tr = document.createElement("tr");
    table.append(tr);
    let td1 = document.createElement("td");
    tr.append(td1);
    td1.textContent = element.Prenom;
    let td2 = document.createElement("td");
    tr.append(td2);
    td2.textContent = element.Nom;
    let td3 = document.createElement("td");
    tr.append(td3);
    td3.textContent = element.Age;
    let td4 = document.createElement("td");
    tr.append(td4);
    td4.textContent = element.Groupe;
    let dlt = document.createElement("button");
    dlt.className = "delete";
    dlt.textContent = "Delete";
    tr.append(dlt);
    tr.className = "trr";
    document.querySelector(".div3").style.display = "block";
    dlt.addEventListener("click", (e) => {
      e.preventDefault();
      element.Prenom = "";
      element.Nom = "";
      element.Age = "";
      element.Groupe = "";
      tr.remove();
      if (document.querySelectorAll(".trr").length === 0) {
        document.querySelector(".div3").style.display = "none";
      }
    });
  });
});
