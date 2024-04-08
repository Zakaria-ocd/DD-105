var valid_email =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
document.querySelector(".btn-submit").addEventListener("click",(e)=>{
    e.preventDefault()
    let inputs=document.querySelectorAll("input")
    let selectGender=document.querySelector("select")
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value==""){
            inputs[i].nextElementSibling.style.visibility="visible"
            inputs[i].classList.add("invalid")
        }
        else if(inputs[i].value.length>3){
            inputs[i].nextElementSibling.style.visibility="hiddden"
            inputs[i].classList.remove("invalid")
            inputs[i].classList.add("valid")
        }
    }
    if(!(document.querySelector(".emailInput").value==valid_email)){
        selectGender.nextElementSibling.style.visibility="visible"
        selectGender.classList.add("invalid")
    }
    else{
        document.querySelector(".emailInput").nextElementSibling.style.visibility="hidden"
        document.querySelector(".emailInput").classList.remove("invalid")
        document.querySelector(".emailInput").classList.add("valid")
    }
    if(selectGender.value=="Select your gender"){
        selectGender.nextElementSibling.style.visibility="visible"
        selectGender.classList.add("invalid")
    }
    else{
        selectGender.nextElementSibling.style.visibility="hidden"
        selectGender.classList.remove("invalid")
        selectGender.classList.add("valid")
        document.querySelector("form").submit()
    }
})
document.querySelector(".emailInput").addEventListener("focusout",(e) =>{
    e.preventDefault()
    if (!valid_email.test(document.querySelector(".emailInput").value)) {
        document.querySelector(".emailInput").classList.add("invalid");
        document.querySelector(".emailInput").classList.remove("valid");
        document.querySelector(".emailInput").nextElementSibling.style.visibility = "visible";
    } else {
        document.querySelector(".emailInput").classList.remove("invalid");
        document.querySelector(".emailInput").classList.add("valid");
        document.querySelector(".emailInput").nextElementSibling.style.visibility = "hidden";
    }
})


// document.querySelector(".btn").addEventListener("click",()=>{
// console.log(document.querySelector(".dateInput").)
// })