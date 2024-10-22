const numeros = [];
for(let i=0;i<=9;i++){
    numeros.push(Math.floor(Math.random()*100)+1);
}
let soma=0
for(let i=0;i<numeros.length;i++){
soma += numeros[i];
}
console.log("Numeros gerados: ",numeros)
console.log("soma:",soma);