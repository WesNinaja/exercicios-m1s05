/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

const produtos = [
    { nome: "Camisa", preco: 29.99 },
    { nome: "Calça", preco: 59.99 },
    { nome: "Tênis", preco: 99.99 },
    { nome: "Boné", preco: 19.99 }
  ];
  
  let totalProdutos = 0;
  let valorTotal = 0;
  
  console.log("Produtos disponíveis:");
  
  for (let produto of produtos) {
    console.log(`Nome: ${produto.nome} - Preço: R$ ${produto.preco}`);
    totalProdutos++;
    valorTotal += produto.preco;
  }
  
  console.log("------------------------");
  console.log(`Total de produtos: ${totalProdutos}`);
  console.log(`Valor total: R$ ${valorTotal}`);
  