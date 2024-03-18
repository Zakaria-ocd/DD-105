jours = ["lundi","mardi","mercredi","jeudi","vendredi"]

for (i=0;i<=4;i++){
    console.log(jours[i])
}
for (item in jours){
    console.log(jours[item])
}
for (jr of jours){
    console.log(jr)
}
const a = ["lundi","mardi","mercredi","jeudi","vendredi"]
a.push("ksj")
console.log(a)
let txt="";
jours.forEach(myfonction);
function myfonction(value,index,array){
    txt+= "    j"+index+"  "
}
console.log(txt)
//la boucle while 
let n = 10;
while (n >= 0){
    // console.log(n)
    n-=1
}
do{
    // console.log(n)
    n -=1
}
while(n>=0)
let text;
for (let i = 0; i < 5; i++) 
{
    if (i === 3) 
    { continue; }
    text = "The number is " + i ;
    console.log(text)
}
let text1;
for (let i = 0; i < 5; i++) 
{
    if (i === 3) 
    { 
        text1= "This  is " + i ;
        console.log(text1)
        break; 
    }
    text1 = "The number is " + i ;
    console.log(text1)
}
let text2;
for (let i = 0; i < 5; i++) 
{
    if (i === 3) 
    {break;}
    text2 = "The number is " + i ;
    console.log(text2)
}