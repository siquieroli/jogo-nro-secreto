// Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundoNoConsole() {
    console.log('Olá, mundo!');
}
exibirOlaMundoNoConsole();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNomeNoConsole(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirNomeNoConsole('Eduardo');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero) {
    return numero * 2;
}
console.log(dobro(3));

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
console.log(media(2, 4, 6));

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}
console.log(maior(5, 7));
console.log(maior(8, 7));

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(numero) {
    return numero * numero;
}
console.log(quadrado(3));
