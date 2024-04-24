const article ="Lorem ipsum slksd dolor slksd DD106 sit amet consectetur Zakaria DD105 adipisicing elit. DD104 Quaerat Zakari accusantium vitae laboriosam qui adipisci Zakaria veniam unde reprehenderit et dolorem nihil. Blanditiis facilis facere pariatur amet rerum expedita culpa voluptatibus optio.";
let nom="Zakaria"
let nom1=/(zakaria?)/i
let nom2=/DD[0-9]{3}/ig
let nom3=/(DD)([0-9]{3})/ig
// let nom1=/Zakaria?/i
let prenom=new RegExp('amin?')
//search method ==> -1 or index
let position = article.search(nom);
let position1= article.search(nom1);
console.log(position)
console.log(position1)
//match method ==> null or array
let position2= article.match(nom2);
console.log(position2)
console.log(article.matchAll(nom2))
//replace method
let updatedArticle=article.replace(nom2,"Dev")
console.log(updatedArticle)
console.log(article.replaceAll(nom2,"Dev"))
let modules ="PHP/HTML-CSS_POO"
let listModules=modules.split(/[/_]/)
console.log(listModules)
console.log(article.replace(nom1,"$1 msdl"))
//test method pattern
let tester=nom3.test(article)
console.log(tester)
//exec method pattern
let chercherElem=nom3.exec(article);
console.log(chercherElem)
//==> rechercher we do //
nom1="slksd"
let p1=/^nom1$/
let p=new RegExp(nom1,"i")
console.log(p)
position =article.search(p)
console.log(position)
position=article.match(nom3)
console.log(position)
position=article.replace(nom1,"pipi")
console.log(position)
position=p.test(article)
console.log(position)
// try{

// }
// catch(error){

// }
document.querySelector("button").addEventListener("click",()=>{
    let object ={
        id:1,nom:"zakaria",prenom:"Ahmed"
    }
    object=JSON.stringify(object)
    let request=new XMLHttpRequest()
    request.open("POST","pp.json",true)
    request.setRequestHeader("Content-type","application/json;charset=UTF-8")
    request.send(object)
    request.onreadystatechange=function(){
        if(this.status==201){
            console.log("Yesssssss!")
        }
    }
})