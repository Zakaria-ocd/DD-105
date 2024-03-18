let k = parseInt(100)
let randomNumber=Math.floor(Math.random()*20+1)
let pickNumber=(e)=>{
    let numberInput=document.querySelector("input").value
    e.preventDefault();
    if (numberInput!=randomNumber){
        k=k-5
        document.querySelector(".p1").textContent="It's the wrong number"
        document.querySelector(".p2").textContent="Try again"
        document.querySelector("input").value=1
    }
    else {
        document.querySelector(".p1").textContent="you won"
        let score="Your score is "+k+"%"
        document.querySelector(".p2").textContent=score
        k=100
        randomNumber=Math.floor(Math.random()*20+1)
    }
    if (k===0){
        let score="your score is"+k
        document.querySelector(".p2").textContent=score
        k=100
    }

}
document.querySelector("button").addEventListener("click",pickNumber)
