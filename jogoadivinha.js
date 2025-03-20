// Gerar um número aleatório entre 1 e 10
let numeroCorreto = Math.floor(Math.random() * 10) + 1;

let palpite;
let tentativas = 0;

// Loop até o usuário acertar o número
while (palpite !== numeroCorreto) {
    // Pede ao usuário para digitar o palpite
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 10:"));

    // Verifica se o palpite é maior ou menor que o número correto
    if (palpite > numeroCorreto) {
        alert("O número é menor. Tente novamente.");
    } else if (palpite < numeroCorreto) {
        alert("O número é maior. Tente novamente.");
    }

    tentativas++;
}

alert(`Parabéns! Você acertou o número ${numeroCorreto} em ${tentativas} tentativas.`);
