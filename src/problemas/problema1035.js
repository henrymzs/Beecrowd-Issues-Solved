/*
Leia 4 valores inteiros A, B, C e D. A seguir, 
se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, 
forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

Entrada
Quatro números inteiros A, B, C e D.

Saída
Mostre a respectiva mensagem após a validação dos valores.
*/

//let valores = lines[0].split(" "); 
let a = 5; //parseInt(valores[0]);
let b = 6; //parseInt(valores[1]);
let c = 7; //parseInt(valores[2]);
let d = 8; //parseInt(valores[3]);

let somaCD = c + d;
let somaAB = a + b;

if (b > c && d > a && somaCD > somaAB && c >= 0 && d >= 0 && a % 2 === 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}