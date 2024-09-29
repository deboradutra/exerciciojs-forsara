///EXERCICIO 1

// let mensagem = "a turma de UX/UI é dinâmica e tem as características essenciais para brilhar em uma empresa.";

// alert("a turma de UX/UI é dinâmica e tem as características essenciais para brilhar em uma empresa.");

// console.log("Primeira ocorrência da letra U (posição " + mensagem.indexOf('U') + ")");
// console.log("Primeira ocorrência da letra X (posição " + mensagem.indexOf('X') + ")");
// console.log('a string tem '+ mensagem.length);

/////////////////////////////////////////

///EXERCICIO 2

// let myWishList = [
//     "uma viagem para o Japão",
//     "um pacote de biscoitos de champagne da Bauducco",
//     "um toca discos",
//     "uma câmera Canon",
//     "um par de meias do Piu-Piu"
// ];

// for (let i = 0; i < myWishList.length; i++) {
//     console.log("Prenda " + (i + 1) + ": " + myWishList[i]);
// }

// console.log("Total de prendas na lista: " + myWishList.length);

/////////////////////////////////////////

///EXERCICIO 3

// function multiply(a, b) {
//     let resultado = a * b;
//     console.log("O resultado da multiplicação é: " + resultado);
// }

/////////////////////////////////////////

///EXERCICIO 4

// function isShortsWeather(temperature) {
//     if (temperature > 25) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isShortsWeather(32));  
// console.log(isShortsWeather(13)); 

/////////////////////////////////////////

///EXERCICIO 5

function nameUser() {
    let userName = prompt("Qual é o teu nome?");
    
    if (userName) {
    
        alert("Olá, " + userName + "!");
    } else {
        alert("Por favor, insere o teu nome.");
    }
}

/////////////////////////////////////////

///EXERCICIO 6

function sumArray(numbers) {
    let soma = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        soma += numbers[i];
    }
    
    console.log("A soma de todos os números do array é: " + soma);
}

let meuArray = [15, 10, 15, 3];
sumArray(meuArray);  


