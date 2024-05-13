class Personne{
    constructor(id, nom, prenom){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }

    presentez_vous(){
        return 'I am ' + this.nom + ' ' + this.prenom
    }
}

let personne1 = new Personne(1, 'RAHMANI', 'Yassine');
let personne2 = new Personne(1, 'Radi', 'Youssef');

// Héritage

class Etudiant extends Personne {
    constructor(id, nom, prenom, groupe, note){
        super(id,nom, prenom);
        this.groupe = groupe;
        this.note = note;
    }



    presentez_vous(){
        return super.presentez_vous() + ' a trainee computer developer'
    }

    moyenne(){        
        return this.note
    }

}

let etudiant1 = new Etudiant(1, 'Ouafik', 'Mohammed', 'DD105', 16);

console.log(etudiant1.presentez_vous())
console.log(personne1.presentez_vous())


///Events keyboard

document.addEventListener('keyup', function(e){
    if(e.key == 'ArrowLeft'){
        document.body.style.backgroundColor = 'red'; 
        console.log("ksj")
    }
    if(e.key == 'ArrowRight'){
        document.body.style.backgroundColor = 'green' ; 
    }  
})



//clearTimeout(testTime);

let i = 0;
test = setInterval (function(){  
    i = i+ 1  
    console.log(i)
}, 1000)

let testTime = setTimeout(function(){
    clearInterval(test);
    console.log("Done")
}, 5000)

document.getElementById('btn-nouvelle').addEventListener('click', function(){
    window.open("https://www.youtube.com/")
})

document.getElementById('btn-fermer').addEventListener('click', function(){
    window.close()
})

document.addEventListener('keyup', function(e){
    if(e.key == 'Delete'){
        console.log('ok')
        window.close()
    }
})








