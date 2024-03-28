
document.querySelector('')
document.getElementById("btn-load").addEventListener("click", function (e) {
  e.preventDefault()
  let user;
  let content;
  const request = new XMLHttpRequest();
  request.open("GET", "file.json", true);
  request.onreadystatechange = function () {
    if(this.readyState==4 && this.status==200){
      console.log(this.response)
        data =JSON.parse(this.response)
        user = data.user
        content="<ul>";
        content+="<li>user name : $(user.nom)</li>";
        content+="<li>user age : $(user.age)</li>";
        content+="</ul>";
        document.getElementById("container").innerHTML=content
  };
  request.send();
}

});
console.log("kjshefj")