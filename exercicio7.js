/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */

// Função para adicionar elemento ao final do array
function adicionarElemento(array, elemento) {
    array.push(elemento);
    return array;
  }
  
  // Função para remover o último elemento do array
  function removerUltimoElemento(array) {
    return array.pop();
  }
  
  // Função para remover elementos entre um índice inicial e final do array
  function removerElementosIntervalo(array, indiceInicial, indiceFinal) {
    array.splice(indiceInicial, indiceFinal - indiceInicial + 1);
    return array;
  }
  
  // Exemplo de uso das funções
  let myArray = [1, 2, 3, 4, 5];
  
  console.log("Array inicial:", myArray);
  
  myArray = adicionarElemento(myArray, 6);
  console.log("Array após adicionar elemento:", myArray);
  
  let elementoRemovido = removerUltimoElemento(myArray);
  console.log("Elemento removido:", elementoRemovido);
  console.log("Array após remover último elemento:", myArray);
  
  myArray = removerElementosIntervalo(myArray, 1, 3);
  console.log("Array após remover elementos do intervalo:", myArray);
  