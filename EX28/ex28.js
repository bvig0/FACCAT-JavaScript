let valor1 = parseInt(prompt("Digite o primeiro valor:"))
let valor2 = parseInt(prompt("Digite o segundo valor:"))
let valor3 = parseInt(prompt("Digite o terceiro valor:"))
let maior = 0

if(valor1 > valor2 && valor1 > valor3){
    maior = valor1
}
else if(valor2 > valor1 && valor2 > valor3){
    maior = valor2
}
else{
    maior = valor3
}

alert("O maior valor é: " + maior)