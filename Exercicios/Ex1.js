const vetor = [];
for(let i =0;i < 10; i++){
    vetor.push(Math.floor(Math.random()*100+1))
}
const pares = vetor.filter(num => num % 2===0)
pares.forEach(function(numero) {
    console.log(numero)
});
