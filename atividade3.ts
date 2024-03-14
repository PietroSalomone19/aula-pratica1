/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno: pietro almeida salomone 
*/

let teclado = require (`prompt-sync`)();

let letra : string  = teclado(`Digite a letra: `);

if(letra == `a` || letra == `A` || letra == `e` || letra == `E` || letra == `i` 
|| letra == `I`|| letra == `o` || letra == `O` || letra == `u` || letra == `U`){
    console.log(`A letra digitada é vogal`)

}
else{
    console.log(`A letra digitada é uma consoante`);

}