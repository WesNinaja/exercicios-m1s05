/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

let número = 20; // Exemplo de número até onde a sequência será gerada
let fibonacci = [0, 1]; // Inicializa a sequência com os dois primeiros números

while (fibonacci[fibonacci.length - 1] <= número) {
  let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(nextNumber);
}

console.log("Sequência de Fibonacci até o número", número + ":");

for (let i = 0; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}
