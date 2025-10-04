let salarioFixo = parseFloat(prompt("Digite o salario fixo:"))
let valorVendas = parseFloat(prompt("Digite o valor das vendas:"))
let salarioTotal = 0

if (valorVendas <= 1500) {
    salarioTotal = ((valorVendas * 3) / 100) + salarioFixo
}
else {
    salarioTotal = ((valorVendas * 5) / 100) + salarioFixo
}

alert("Seu salário é de R$ " + salarioTotal)