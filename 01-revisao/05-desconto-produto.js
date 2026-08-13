// EXERCÍCIO 05 - DESCONTO
// Considere:
//
// let preco = 200;
// let desconto = 20;
//
// Calcule o valor do desconto e o preço final.
// O desconto está em porcentagem.

// Escreva sua solução abaixo:

let preco = 200;
let desconto = 20;
let valorDesconto = (preco * desconto) / 100;
let precoFinal = preco - valorDesconto;

console.log(`O valor do desconto é R$ ${valorDesconto},00 e o preço final é R$ ${precoFinal},00.`);


