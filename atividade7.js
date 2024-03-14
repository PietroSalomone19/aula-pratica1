/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
  e R$ 0,25 se forem compradas pelo menos doze.
   Escreva um programa que leia o número de maçãs compradas,
    calcule e escreva o valor total da compra.
Nome Aluno:
E-mail:
*/
var maca1 = 0.30;
var maca2 = 0.25;
var compra = parseFloat("teclado (Digite quantas ma\u00E7\u00E3s voc\u00EA comprou: )");
if (compra < 12) {
    var duzia = (maca1 * compra);
    console.log('O valor total da compra é de ${duzia}');
}
else if (compra >= 12) {
    var doze = (maca2 * compra);
    console.log("'O valor total da compra \u00E9 de ".concat(doze));
}
else {
    console.log("algo deu errado!");
}
