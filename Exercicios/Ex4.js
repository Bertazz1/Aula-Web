const numeros = [];
for(let i=0;i<=9;i++){
    numeros.push(Math.floor(Math.random()*100)+1);
}  
function ehPrimo(num) {
    if (num < 2) return false; // Números menores que 2 não são primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Se for divisível, não é primo
    }
    return true; // Se não for divisível por nenhum número, é primo
}

// Loop para verificar e imprimir os números primos
numeros.forEach(function(numero) {
    if (ehPrimo(numero)) {
        console.log(numero + " é um número primo.");
    }
});