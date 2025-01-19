/*
A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:
- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

Entrada
A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.
 */

let raio = 150.00;// (lines[0]);
const PI = 3.14159;
let area = (PI * Math.pow(raio,2)).toFixed(4);
console.log("A=" + area);