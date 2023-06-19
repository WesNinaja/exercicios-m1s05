/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */

function calculadora(num1, num2, operacao) {
    return operacao(num1, num2);
  }
  
  // Função de operação de adição
  function adicao(a, b) {
    return a + b;
  }
  
  // Função de operação de subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Função de operação de multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Função de operação de divisão
  function divisao(a, b) {
    return a / b;
  }
  
  // Exemplo de uso da função calculadora
  let resultadoAdicao = calculadora(5, 3, adicao);
  console.log("Resultado da adição:", resultadoAdicao);
  
  let resultadoSubtracao = calculadora(8, 2, subtracao);
  console.log("Resultado da subtração:", resultadoSubtracao);
  
  let resultadoMultiplicacao = calculadora(4, 6, multiplicacao);
  console.log("Resultado da multiplicação:", resultadoMultiplicacao);
  
  let resultadoDivisao = calculadora(10, 2, divisao);
  console.log("Resultado da divisão:", resultadoDivisao);
  