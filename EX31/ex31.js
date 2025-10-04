let ladoA = parseInt(prompt("Digite o primeiro valor:"))
let ladoB = parseInt(prompt("Digite o segundo valor:"))
let ladoC = parseInt(prompt("Digite o terceiro valor:"))

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoB + ladoA){
    alert("Os valores formam um triângulo.")
}
else{
    alert("Os valores NÃO formam um triângulo.")
}