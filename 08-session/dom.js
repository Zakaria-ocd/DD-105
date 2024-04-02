console.log(document.body)

document.write("<input>")
console.log(document.querySelector(".session-1").textContent)
document.querySelector(".crier-h1").addEventListener("click",function(){
    const parent =document.querySelector(".session-1");
    const titre =document.createElement("h1");
    titre.innerText="This is a title"
    titre.style.color="tomato"
    parent.append(titre)
    const paragraph=document.createElement("p")
    parent.append(paragraph)
    paragraph.textContent="khkjhkj kjhoii poipoi jkh"

    // parent.prepend(titre)
    
})
document.querySelector(".delete").addEventListener("click",function(){
    document.querySelector(".circ").remove()
})
document.querySelector(".Remplacer").addEventListener("click",function(){
    const ancientElement=document.querySelector(".para1")
    const supp=document.querySelector(".title1")
    const parent=document.querySelector(".session-1")
    parent.replaceChild(supp,ancientElement)
    document.querySelector(".titleNav").replaceWith(supp)
})
document.querySelector(".bntContainer").addEventListener("click",function(){
    const vContain=document.createElement("div");
    vContain.classList.add("container");
    document.body.append(vContain);
    vContain.setAttribute("name","container")
    const circle=document.createElement("div")
    circle.classList.add("circle")
    document.body.append(circle);
    document.querySelector(".delete").classList.add("circle")
    document.querySelector(".delete").setAttribute("id","delete")
    const img1=document.createElement("img");
    document.body.append(img1)
    img1.setAttribute("src","38ccd5c_5104936-01-06.jpg")
    let link=document.createElement("a")
    document.body.append(link)
    link.setAttribute("href","https://www.youtube.com/")
    link.classList.add("circle")
    link.textContent="Click here"
    console.log(link.href)
})
document.getElementById("test11").innerHTML='<a class="circle" href"https://www.youtube.com/">click here</a>'
document.getElementById("test11").className="session-1"
document.getElementById("test11").classList.add("session-2")
console.log(document.getElementById("test11"))
let bb=document.getElementsByClassName("session-1")
console.log(bb)
for(let i=0;i<=bb.length-1;i++){
    bb[i].style.marginTop="10vh"
bb[i].style.height="20vh"
bb[i].style.marginTop="4vh"
bb[i].style.backgroundColor="yellow"
bb[i].style.width="300px"
}
console.log(document.getElementById("test11"))
console.log(document.querySelectorAll(".session-1").length)