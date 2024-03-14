/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a
 participação da pessoa no crime.
 Se a pessoa responder positivamente a 2 questões ela deve
  ser classificada/exibida como "Suspeita",
  entre 3 e 4 como "Cúmplice" e 5 como "Assassino".
   Caso contrário, ele será classificado como "Inocente".
Aluno:
*/
console.clear();
var teclado = require("prompt-sync")();
var resposta1 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o"));
var resposta2 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o"));
var resposta3 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o"));
var resposta4 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o"));
var resposta5 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o"));
var interrogatorio = 0;
if (resposta1 == 1) {
    interrogatorio++;
}
if (resposta2 == 1) {
    interrogatorio++;
}
if (resposta3 == 1) {
    interrogatorio++;
}
if (resposta4 == 1) {
    interrogatorio++;
}
if (resposta5 == 1) {
    interrogatorio++;
}
if (interrogatorio == 2) {
    console.log("Suspeita");
}
else if (interrogatorio >= 3 && interrogatorio <= 4) {
    console.log("Cúmplice");
}
else if (interrogatorio == 5) {
    console.log("Assassino");
}
else {
    console.log("Inocente");
}
