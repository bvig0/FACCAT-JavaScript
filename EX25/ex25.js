let numeroConta = parseInt(prompt("Digite o numero da sua conta:"))
let saldoAtual = parseFloat(prompt("Digite o seu saldo:"))
let valorDebito = parseFloat(prompt("Digite o seu débito:"))
let valorCredito = parseFloat(prompt("Digite o seu crédito:"))

saldoAtual = saldoAtual - valorDebito +  valorCredito

if(saldoAtual >= 0){
    alert("Saldo positivo. Com R$ " + saldoAtual + " na conta")
}
else{
    alert("Saldo negativo. Com R$ " + saldoAtual + " na conta")
}