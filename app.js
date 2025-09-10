let numeroMaximo = 3;
let numerosSorteados = [];
// let numeroSecreto = 5;
let numeroSecreto = geraNumeroAleatorio(numeroMaximo);
let tentativas = 1;

exibirMensagemInicial();

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = `Escolha um número de 1 a ${numeroMaximo}`;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    falarTextoDaTela(texto);
    campo.innerHTML = texto;
}

function falarTextoDaTela(texto) {
    // Speech: Responsive Voice
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });

    // Speech: Web Speech API
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', `Escolha um número de 1 a ${numeroMaximo}`);
}

function verificarChute() {
    // console.log('O botão foi clicado!');
    // console.log(numeroSecreto);

    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function geraNumeroAleatorio(numeroMaximo) {
    let novoNumero = parseInt(Math.random() * numeroMaximo + 1);

    if (numerosSorteados.length == numeroMaximo) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(novoNumero)) {
        return geraNumeroAleatorio(numeroMaximo); // recursividade
    } else {
        numerosSorteados.push(novoNumero);
        return novoNumero;
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    console.log(numerosSorteados);
    numeroSecreto = geraNumeroAleatorio(numeroMaximo);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}