// == comparação implícita
const numero = 5;
const texto = "5"

console.log(numero == texto); // compara só valor
console.log(numero === texto); // compara valor e tipo de dado

// typeof pra saber o tipo de dado que está sendo salvo na variável
console.log(typeof numero);
console.log(typeof texto);

// boa prática: usar === e conversão explícita
