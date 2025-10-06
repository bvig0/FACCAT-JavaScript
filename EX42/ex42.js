let cod = parseInt(prompt("Código do funcionário: "))
let anoNasc = parseInt(prompt("Digite o ano de nascimento: "))
let anoEntrada = parseInt(prompt("Digite o ano que entrou na empresa: "))

let idade = 2025 - anoNasc
let tempoEmpresa = 2025 - anoEntrada

if (idade >= 65 || tempoEmpresa > 30 || idade >= 60 && tempoEmpresa > 25) {
    alert("Requerer aposentadoria.")
}
else {
    alert("Não requerer aposentadoria.")
}