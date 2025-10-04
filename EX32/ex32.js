let timeA = prompt("Digite o primeiro time:")
let timeB = prompt("Digite o segundo time:")

let golsA = parseInt(prompt("Digite os gols do " + timeA +": "))
let golsB = parseInt(prompt("Digite os gols do " + timeB +": "))

if(golsA > golsB){
    alert(timeA + " ganhou com " + golsA + " pontos.")
}
else if(golsA < golsB){
    alert(timeB + " ganhou com " + golsB + " pontos.")
}
else{
    alert("EMPATE.")
}