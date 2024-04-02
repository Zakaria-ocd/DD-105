document.querySelector("form").style.backgroundColor="aqua"
function fun(){
    let a=3
    let b=2
    return a*b
}
// let a=[1,3,3,4]
// notes=[...a]
// console.log(a)
// console.log(notes)
// notes.push(6)
// console.log(a)
// console.log(notes)
const notes = [11, 14, 15, 12, 19,16];
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Stagiaires=[{nom:"Ouchouid",prenom:"Zakaria",age:18},
                {nom:"Mifdal",prenom:"Ilyas",age:21},
                {nom:"Nail",prenom:"Anouar",age:20},
                {nom:"Anas",prenom:"Hamza",age:19},
                {nom:"Ouazani",prenom:"Ahmed",age:24}
            ]
console.log(document.head)
console.log(document.body)
const addDiv=()=>{
let container=document.createElement("div")
container.style.backgroundColor="red"
container.style.width="100px"
container.style.height="100px"
document.body.append(container)
let elemp=document.createElement("p")
let elemhinput=document.createElement("input")
elemp.textContent="heeeeeeeeeey!"
container.append(elemp)
container.append(elemhinput)
}
let elembtn=document.createElement("button")
elembtn.textContent="Add div"
document.body.append(elembtn)
elembtn.addEventListener("click",addDiv)
let elem1=document.getElementById("elem1")
let elem2=document.getElementById("elem2")
let elem11=document.getElementById("elem11")
elem1.style.height="100px"
elem1.style.width="100px"
elem1.style.backgroundColor="tomato"
elem2.style.height="100px"
elem2.style.width="100px"
elem2.style.backgroundColor="blue"
