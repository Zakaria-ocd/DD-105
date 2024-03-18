// document.querySelector(".input-test").addEventListener("keydown",
// function(event){
//   if (event.keyCode === 38){
//     console.log("click1")
//   }
// }
// )
// document.querySelector(".input-test").addEventListener("keydown",
// function(event){
//     if (event.keyCode === 39){
//       console.log("click2")
//     }
// }

// )
// document.querySelector(".input-test").addEventListener("keydown",
// function(event){
//   if (event.keyCode === 40){
//     console.log("click3")
//   }
// }
// )
// document.body.addEventListener("keydown",
// function(event){
//   if (event.keyCode === 39){
//     document.querySelector(".box").classList.add("box1")
//   }
// }
// )
// document.body.addEventListener("keydown",
// function(event){
//   if (event.keyCode === 40){
//     document.querySelector(".box1").classList.add("box2")
//   }
// }
// )
// document.body.addEventListener("keydown",
// function(event){
//   if (event.keyCode === 37){
//     document.querySelector(".box2").classList.add("box3")
//   }
// }
// )
// document.body.addEventListener("keydown",
// function(event){
//   if (event.keyCode === 38){
//     document.querySelector(".box3").classList.add("box")
//   }
// }
// )
var valid_email =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// var inputName = document.querySelector(".input-name").value;
// var inputEmail = document.querySelector(".input-email").value;
document.querySelector(".btn-envoyer").addEventListener("click", function validateForm(e) {
    e.preventDefault();
    if (document.querySelector(".input-name").value.length <3) {
      document.querySelector(".input-name").classList.add("danger");
      document.querySelector(".rouge1").textContent =
        "Name must be at least 3 characters long.";
    }
    if (!document.querySelector(".input-email").value.match(valid_email)) {
      document.querySelector(".input-email").classList.add("danger");
      document.querySelector(".rouge2").textContent = "Invalid email address.";
    }
    else{
      document.querySelector("form").submit()
    }
  });
document.querySelector(".input-name").addEventListener("focusout", function (e) {
    e.preventDefault();
    if (document.querySelector(".input-name").value.length > 3) {
      document.querySelector(".input-name").classList.add("success");
      document.querySelector(".input-name").classList.remove("danger");
      document.querySelector(".rouge1").textContent = "";
    }
  });
document.querySelector(".input-email").addEventListener("focusout", function (e) {
    e.preventDefault();
    if (document.querySelector(".input-email").value.match(valid_email)) {
        document.querySelector(".input-email").classList.add("success");
        document.querySelector(".input-email").classList.remove("danger");
        document.querySelector(".rouge2").textContent = "";
    }
  });
