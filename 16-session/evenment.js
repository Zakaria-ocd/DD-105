function Stagiare(nom,prenom,age,branche){
  this.nom=nom;
  this.prenom=prenom;
  this.age=age;
  this.branche=branche;
  this.presenter=function(){
    console.log("I am "+this.nom+" "+this.prenom)
    console.log(`I am `)
  }
}
const stagiare2 =new Stagiare("Zizo","Ahmed",19,"DD")
stagiare1={
  nom:"Ouchouid",
  prenom:"Zakaria",
  age:18,
  branche:"DD105",
  presenter:function(){
    console.log("I am "+this.nom+" "+this.prenom)
  }
}
console.log(stagiare1.nom)
console.log(stagiare1.branche)
stagiare1.presenter()
console.log(stagiare2.presenter())
function Achat(id,nom,contitec,prix){
  this.id= id;
  this.nom=nom;
  this.contite=contitec;
  this.prix=prix;
  this.calculertva=function () {
    return this.prix*this.contite+this.prix*this.contite*20/100
  }
}
const Achat1=new Achat(299,"Phones",10,1000);
console.log("Le ttc est "+Achat1.calculertva());
console.log(Achat1.contite)
class Acht{
  constructor(id,article,prix,quantite){
    this.id=id;
    this.article=article;
    this.prix=prix;
    this.quantite=quantite;
  }
  calculertva(){
    return this.prix*this.quantite+this.prix*this.quantite*20/100
  }
}
const Acht1=new Achat(1,"iPhones",10000,10);
const Acht2=new Achat(2,"iPods",2000,20);
const Acht3=new Achat(3,"iMacs",30000,5);
console.log("le ttc est",Acht1.calculertva());
console.log("le ttc est",Acht2.calculertva());
console.log("le ttc est",Acht3.calculertva());
let nom="Development103";
console.log(nom.length)
console.log(nom.charAt(3))
console.log(nom.substring(2,6))
console.log(nom.toUpperCase())
console.log(nom.toLowerCase())
console.log(nom.startsWith("D"))
console.log(nom.endsWith("3"))
console.log(nom.indexOf("e"))
console.log(nom.lastIndexOf("e"))
console.log(nom.split())
console.log(Array.from(nom))
let phrase="Iea-t-an-apple"
console.log(phrase.split("-"))
let vDate = new Date();
console.log(vDate.getFullYear())
console.log(vDate.getMonth())
console.log(vDate.getDate())
console.log(vDate.getDay())
console.log(vDate.getHours())
let vDatey= new Date("2006-02-24")
console.log(vDate)
vDatey.setMonth("04")
console.log(vDatey)