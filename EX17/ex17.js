let nota1 = parseFloat(prompt("Escreva o valor da 1° nota:"))
let nota2 = parseFloat(prompt("Escreva o valor da 2° nota:"))

let media = (nota1 + nota2) / 2

if (media >= 6) {
    alert("O aluno foi aprovado")
}
else {
    alert("O aluno foi reprovado")
}