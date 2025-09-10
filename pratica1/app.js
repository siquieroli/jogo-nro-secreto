// Faça o download de outro projeto no link https://github.com/alura-cursos/js-curso-2/tree/desafio_1 e abra no Visual Studio Code.

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function btnConsole() {
    console.log('O botão console foi clicado!');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function btnAlert() {
    alert('Eu amo JS!')
}
// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function btnPrompt() {
    let cidade = prompt('Informe o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function btnSoma() {
    let num1 = parseInt(prompt('Informe um número:'));
    let num2 = parseInt(prompt('Informe outro número:'));
    let soma = num1 + num2;
    alert(`A soma dos números ${num1} + ${num2} é ${soma}.`);
}
