class Personne{
    constructor(id,nom,prenom){
        this.id=id
        this.nom=nom
        this.prenom=prenom
    }
    presenter_vous(){
        console.log('I am'+this.nom+' '+this.prenom)
    }
}
let personne1=new Personne(1,'Ouchouid','Zakaria')
let personne2=new Personne(1,'Khalil','Abdo')
personne1.presenter_vous()
class Etudiant{
    constructor(id,nom,prenom,groupe,note){
        this.id=id
        this.nom=nom
        this.prenom=prenom
        this.groupe=groupe
        this.note=note
    }

}
document.addEventListener("keyup",(e)=>{
    if(e.key=='ArrowLeft'){
        document.body.style.backgroundColor="red"
    }
    if(e.key=='ArrowRight'){
        document.body.style.backgroundColor="green"
    }
})
//seul fois plusieurs fois
document.write("ldk")