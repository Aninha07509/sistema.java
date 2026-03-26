// solicite a idade a pessoa 
let idade = 19;

// verifique se apessoa pode votar 
if (idade >= 16) {
    console.log("você pode votar");
} else {
    console.log("voçê ainda não pode votar.");
}
// Solicita o peso em kg
let peso = 88.5;
let altura = 1.88;

// Calcula o IMC
let imc = peso / (altura * altura);

// Exibe o IMC
console.log("Seu IMC é: " + imc);

// Exibe a categoria de peso
if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
// Solicita um número
let numero = 5;

// Verifica se o número é positivo, negativo ou zero
if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}