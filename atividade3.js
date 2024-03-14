/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno: pietro almeida salomone
*/
var teclado = require("prompt-sync")();
var letra = teclado("Digite a letra: ");
if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i"
    || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U") {
    console.log("A letra digitada \u00E9 vogal");
}
else {
    console.log("A letra digitada \u00E9 uma consoante");
}
