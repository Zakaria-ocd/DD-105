document.addEventListener("DOMContentLoaded",()=>{
    // let request= new XMLHttpRequest()
    // request.open("GET","stagiaire.json",true)
    // request.onreadystatechange=function(){
    //     if(this.readyState==4){
    //         let stagiaires=JSON.parse(this.response).stagiaire
    //         let content=''
    //         for(let i=0;i<stagiaires.length;i++){
    //             content += `
    //             <tr><td>${stagiaires[i].nom}</td>
    //             <td>${stagiaires[i].prenom}</td>
    //             <td>${stagiaires[i].age}</td>
    //             <td>${stagiaires[i].groupe}</td>
    //             </tr>
    //             `;
    //         }
    //         document.querySelector("tbody").innerHTML=content
    //     }
    // }
    // request.send()
    fetch("https://countriesnow.space/api/v0.1/countries/positions")
    .then((response) => response.json())
    .then(data =>data.data)
    .then(countries=>console.log(countries[146].name)
)
    // for(leti=0;i<data..length;i++){
    //   console.log(data[i])
    // }
})