class Activites



// declaration
const stagiairesArray=[]
const activitesArray=[]

//events
document.addEventListener("DOMContentLoaded",chargement);

//functions
function chargement() {
    const request = new XMLHttpRequest();
    request.open("GET", "test.json", true);
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
             stagiairesArray = JSON.parse(this.responseText).Stagiaires;
             activitesArray=JSON.parse(this.responseText).Activites;
            console.log(Stagiaires);
            console.log(Activites);
            let activiteOption="";
            for(let i=0;i<activitesArray.lenght;i++){}
        }
    };
    request.send();
}
document.querySelector(".btn-search").addEventListener("click",search)
let searchInput=document.querySelector("form-control")
function search(){
    let searchStagiaire=stagiairesArray.find((item)=>{
        return item.code===searchInput
    })
    console.log(searchStagiaire)
}













// const request = new XMLHttpRequest();
// request.open("GET", "file.json", true);
// request.onreadystatechange = function () {
//   if(this.readyState==4 && this.status==200){
//     console.log(this.response)
//       data =JSON.parse(this.response)
//       user = data.user
//       content="<ul>";
//       content+= '<li>user name : $(user.nom)</li>';
//       content+='<li>user age : $(user.age)</li>';
//       content+="</ul>";
//       document.getElementById("container").innerHTML=content
// };
// request.send();
// }