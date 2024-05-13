class Personne{
    constructor(id,nom,prenom,){
        this.id=id
        this.nom=nom
        this.prenom=prenom
    }
    presenter(){
        return "I am "+this.prenom+" "+this.nom
    }
}
class Stagiaire extends Personne{
    constructor(id,nom,prenom,groupe,note){
        super(id,nom,prenom)
        this.groupe=groupe
        this.note=note
    }
    presenter(){
        return super.presenter()+" "+this.id
    }
}
let personne1=new Personne(1,"Ouchouid","Zakaria")
console.log(personne1)
console.log(personne1.presenter())
console.log(personne1.nom)
let personne2=new Personne(2,"Khalil","Abdo")
console.log(personne2)
console.log(personne2.presenter())
console.log(personne2.nom)
let stagiaire1=new Stagiaire(1,"Khalil","Abdo","TDD105","16")
console.log(stagiaire1)
console.log(stagiaire1.presenter())
console.log(stagiaire1.nom)