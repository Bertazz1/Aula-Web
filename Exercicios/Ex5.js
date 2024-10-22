const numeros = [];
for(let i=0;i<5;i++){
    numeros.push(Math.floor(Math.random()*10+1));
}
let soma=0;
for(let i=0;i<5;i++){
  soma+=numeros[i];
}
let media = soma/5;
console.log(media);
if(media>7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}