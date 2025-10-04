let salario = parseFloat(prompt("Escreva o seu salario mensal atual:"));
let percentual = parseFloat(prompt("Escreva a sua porcentagem para o reajuste:"));

salario = salario + (salario*percentual/100);
alert("O reajuste do seu salario final de: " + salario);