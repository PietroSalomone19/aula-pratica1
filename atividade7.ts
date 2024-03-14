
/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
  e R$ 0,25 se forem compradas pelo menos doze.
   Escreva um programa que leia o número de maçãs compradas,
    calcule e escreva o valor total da compra.
Nome Aluno:
E-mail:
*/

let maca1: number = 0.30;

let maca2: number = 0.25;

let compra: number = parseFloat(`teclado (Digite quantas maçãs você comprou: )`);

if(compra<12){

let duzia: number = (maca1 * compra);

console.log('O valor total da compra é de ${duzia}');

}

else if(compra>=12){

let doze: number = (maca2 * compra);

console.log(`'O valor total da compra é de ${doze}`);

}

else{

console.log(`algo deu errado!`);

}