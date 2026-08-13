// EXERCÍCIO 25 - DO...WHILE
// Crie:
//
// let tentativa = 1;
//
// Utilize do...while para mostrar:
// Tentativa 1
// Tentativa 2
// Tentativa 3
//
// O laço deve parar depois da terceira tentativa.

// Escreva sua solução abaixo:

let tentativa = 1;

do {
  console.log("Tentativa " + tentativa);
  tentativa++;
} while (tentativa <= 3);