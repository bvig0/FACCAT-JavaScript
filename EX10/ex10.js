let carrosVendidos = parseFloat(prompt("Digite o número de carros vendidos:"));
let vendas = parseInt(prompt("Digite o valor total das vendas:"));
let salario = parseFloat(prompt("Digite o salário fixo"));
let comissao = parseFloat(prompt("Digite a comissão fixa por carro vendido:"));

salario = salario + (carrosVendidos * comissao) + vendas * 0.05;
alert("O salário final do vendedor é: R$ " +  salario);