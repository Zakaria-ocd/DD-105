document.querySelector(".session-1").style.marginTop="10vh"
document.querySelector(".session-1").style.height="20vh"
document.querySelector(".crier-h1").style.marginTop="4vh"
document.querySelector(".session-1").style.backgroundColor="yellow"
document.querySelector(".crier-h1").addEventListener("click",function(){
    const parent =document.querySelector(".session-1");
    const titre =document.createElement("h1");
    titre.textContent="This is a title"
    titre.style.color="tomato"
    parent.append(titre)
    const paragraph=document.createElement("p")
    paragraph.textContent="khkjhkj kjhoii poipoi jkh"
    parent.append(paragraph)
    // parent.prepend(titre)
})
document.querySelector(".delete").addEventListener("click",function(){
    document.querySelector(".circ").remove()
    document.querySelector(".session-1").removeChild(document.querySelector(".para1"))
})
document.querySelector(".Remplacer").addEventListener("click",function(){
    const ancientElement=document.querySelector(".para1")
    const supp=document.querySelector(".title1")
    const parent=document.querySelector(".session-1")
    parent.replaceChild(supp,ancientElement)
    document.querySelector(".titleNav").replaceWith("btnMode")
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
})