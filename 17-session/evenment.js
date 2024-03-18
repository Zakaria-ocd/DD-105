let nombre =5.6;
console.log(Math.abs(nombre))
console.log(Math.ceil(nombre));
console.log(Math.trunc(nombre));
console.log(Math.floor(nombre));
console.log(Math.sqrt(nombre));
console.log(Math.max(19,12,14,6))
console.log(Math.min(19,12,14,6))
let nombre1=[19,12,14,2]
console.log(Math.max(...nombre1))
console.log(Math.min(...nombre1))
const stagiaires= [{id:2,nom:"Ouchouid",note:20},
                    {id:8,nom:"Mifdal",note:14},
                    {id:21,nom:"lkihl",note:17},]
let listNotes=stagiaires.map(function(itemValue){
  return itemValue.note;
})
console.log(listNotes)
maxNote=Math.max(...listNotes)
console.log(Math.max(...listNotes))
let majorantsListe=stagiaires.filter(function(itemValue){
  return itemValue.note === maxNote
})
console.log(majorantsListe)
console.log(Math.floor(Math.random()*20+1))
console.log(Math.round(Math.random()*20+1))