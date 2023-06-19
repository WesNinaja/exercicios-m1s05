/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

let número = 6; // Exemplo de número a ser verificado

let éPrimo = true;
let divisor = 2;

do {
  if (número % divisor === 0) {
    // Se o número é divisível por algum divisor além de 1 e ele mesmo, não é primo
    éPrimo = false;
    break;
  }
  
  divisor++;
} while (divisor < número);

if (éPrimo) {
  console.log(número, "é um número primo.");
} else {
  console.log(número, "não é um número primo.");
}
