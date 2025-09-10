// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
// a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}
console.log(imc(81, 1.72));

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5));

// Crie uma função que converte um valor em dólar, passado como parâmetro, 
// e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dolar2Real(valorDolar) {
    return (valorDolar / 4.8).toFixed(2);
}
console.log(dolar2Real(10));

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
// utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetroSetaRegular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return `A: ${area} / P: ${perimetro}`;
}
console.log(areaPerimetroSetaRegular(3, 5));

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
// utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaPerimetroSetaCircular(raio) {
    let area = (Math.PI * raio * raio).toFixed(2);
    let perimetro = (2 * Math.PI * raio).toFixed(2);
    return `A: ${area} / P: ${perimetro}`;
}
console.log(areaPerimetroSetaCircular(4));

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuadaMultiplicacao(numero) {
    for (let index = 1; index <= 10; index++) {
        let resultado = index * numero;
        console.log(index + ' * ' + numero + ' = ' + resultado);
    }
}
console.log(tabuadaMultiplicacao(5));
