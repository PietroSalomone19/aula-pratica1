/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
 sabendo que PI é um valor constante de 3.14159,
  o programa deve pedir os valores de RAIO e ALTURA,
   utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: pietro almeida salomone
*/
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("digite o valor do raio: "));
var altura = parseFloat(teclado("digite o valor do altura: "));
var resultado = 3.14 * (raio * raio) * altura;
console.log("resultado \u00E9 ".concat(resultado));
