var calculadora = require("./calculadora.js");

console.log("O Resultado da soma é: ",calculadora.soma(10,20));
let resultado = calculadora.mult(10,10);
let resultadoSub = calculadora.sub(20, 40);

console.log(calculadora.div(10, 2));
console.log(resultado);
console.log(resultadoSub);

calculadora.nome = "Estou mudando o texto que se encontra em calculadora.js"
console.log(calculadora.nome);