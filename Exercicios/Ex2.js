// Solicita um número inteiro positivo ao usuário
const numero = parseInt(prompt("Digite um número inteiro positivo:"));

// Verifica se o número é positivo
if (numero > 10) {
    // Inicia a contagem regressiva de 10
    for (let i = numero; i >= 10; i--) {
        console.log(i);
        
        // Para a contagem se o número for menor que 10
        if (i < 10) {
            break;
        }
    }
} else {
    console.log("Por favor, digite um número inteiro positivo, maior que 10.");
}