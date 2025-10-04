let horaMes = parseInt(prompt("Digite o número de horas trabalhadas no mês:"))
let horasExtras = 0
let salarioHora = parseFloat(prompt("Digite o valor do salário por hora:"))

if(horaMes > 160){
    horasExtras = horaMes - 160
}
else{
    horasExtras = 0    
}

let valorHoraExtra = salarioHora * 1.5
let salarioTotal = (160*salarioHora) + (horasExtras * valorHoraExtra)

alert("O salário total do funcionário é: R$ " + salarioTotal)