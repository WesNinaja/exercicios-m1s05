/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

let cor = "blue";

let corTraduzida;

switch (cor) {
  case "red":
    corTraduzida = "vermelho";
    break;
  case "blue":
    corTraduzida = "azul";
    break;
  case "green":
    corTraduzida = "verde";
    break;
  case "yellow":
    corTraduzida = "amarelo";
    break;
  case "orange":
    corTraduzida = "laranja";
    break;
  default:
    corTraduzida = "cor desconhecida";
}

console.log("A cor", cor, "em português é", corTraduzida);
