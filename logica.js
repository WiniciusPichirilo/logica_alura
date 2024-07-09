// 1. Exibir uma mensagem de boas-vindas
console.log("Bem-vindo!");

// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Exiba a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Winicius";
console.log("Olá, " + nome + "!");

// 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Exiba a mensagem "Olá, [seu nome]!" com alert.
let nome2 = "Winicius";
alert("Olá, " + nome2 + "!");

// 4. Pergunte ao usuário sobre sua linguagem de programação favorita e mostre a resposta no console.
let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("Sua linguagem de programação favorita é: " + linguagemFavorita);

// 5. Crie duas variáveis, some os valores e mostre o resultado no console.
let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultado + ".");

// 6. Crie duas variáveis, subtraia os valores e mostre o resultado no console.
let valor3 = 15;
let valor4 = 7;
let resultadoSubtracao = valor3 - valor4;
console.log("A diferença entre " + valor3 + " e " + valor4 + " é igual a " + resultadoSubtracao + ".");

// 7. Peça ao usuário para inserir sua idade e determine se é maior ou menor de idade.
let idade = prompt("Insira sua idade:");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 8. Verifique se um número é positivo, negativo ou zero.
let numero = prompt("Insira um número:");
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// 9. Use um loop while para imprimir os números de 1 a 10 no console.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 10. Verifique se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado".
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 11. Use o Math.random para gerar qualquer número aleatório e exiba no console.
let numeroAleatorio = Math.random();
console.log("Número aleatório: " + numeroAleatorio);

// 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba no console.
let numeroAleatorio1a10 = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatório entre 1 e 10: " + numeroAleatorio1a10);

// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba no console.
let numeroAleatorio1a1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatório entre 1 e 1000: " + numeroAleatorio1a1000);
