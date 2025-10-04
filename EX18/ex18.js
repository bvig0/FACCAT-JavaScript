let anoNasc = parseFloat(prompt("Digite o ano em que você nasceu:"))
let anoAtual = parseFloat(prompt("Digite o ano atual:"))
let idade = anoAtual - anoNasc

if(idade < 16){
    alert("Você ainda não pode votar. Idade: " + idade)
}
else{
    alert("Você pode votar! Idade: " + idade)
}
