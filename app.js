/*
const numeroInteiro = parseInt(prompt('Escolha um número inteiro'));

function lerNumeroInteiro(number){
    return number;
}

const result = lerNumeroInteiro(numeroInteiro);

console.log(result);

*/

/*
const primeiroNumero = parseInt(prompt('Escolha um numero (1/3)'));
const segundoNumero = parseInt(prompt('Escolha outro numero (2/3)'));
const terceiroNumero = parseInt(prompt('Agora o último numero (3/3)'));

function somaNumerosInteiros(num1, num2, num3){
    return num1 + num2 + num3;
}

alert(`A soma dos três números é ${somaNumerosInteiros(primeiroNumero,segundoNumero,terceiroNumero)}`);

*/

/*
const primeiroSemestre = parseInt(prompt('Nota do primeiro semestre'));
const segundoSemestre = parseInt(prompt('Nota do segundo semestre'));


function mediaNotas(nota1, nota2){
    const media = (nota1 + nota2) / 12;
    return media.toFixed(2);
}

console.log(mediaNotas(primeiroSemestre,segundoSemestre));

*/

/*
const numero1 = parseInt(prompt('Primeiro Número'));
const numero2 = parseInt(prompt('Segndo Número'));

function restoDaDivisao(num1,num2){
    if(num1 % num2 === 0){
        return 'Está é uma divisão exata'
    }
    else if(num1 % num2 !== 0){
        const resto = num1 % num2;
        return `O resto da divisão é ${resto}`;
    }
}

alert(restoDaDivisao(numero1,numero2));

*/

/*
function quadrado(num1){
    const quadrado = num1 ** 2
    return `O quadrado do ${num1} é ${quadrado}`;
}

console.log(quadrado(2));

*/

/*
function mediaPonderada(num1, num2, num3, num4){
    const peso1 = num1 * num1;
    const peso2 = num2 * num2;
    const peso3 = num3 * num3; 
    const peso4 = num4 * num4;
    const media = (peso1 + peso2 + peso3 + peso4) / (num1 + num2 + num3 + num4);
    return `A média ponderada da suas notas é ${media.toFixed(2)}`;
}

const nota1 = parseFloat(prompt('Qual foi a sua nota em História?'));
const nota2 = parseFloat(prompt('Qual foi a sua nota em Geografia?'));
const nota3 = parseFloat(prompt('Qual foi a sua nota em Português?'));
const nota4 = parseFloat(prompt('Qual foi a sua nota em Matemática?'));

alert(mediaPonderada(nota1,nota2,nota3,nota4));

*/

/*
function reajuste3PorCento(number){
    const valorReajustado = number + (number * 0.03);
    return valorReajustado;
}

const novoSalario = reajuste3PorCento(1100)
console.log(`Seu novo salário será de R$ ${novoSalario.toFixed(2)}`);

*/


function areaTriangulo(base,altura){
    const area = (base * altura) / 2;
    return area;
}

console.log(areaTriangulo(10,6));