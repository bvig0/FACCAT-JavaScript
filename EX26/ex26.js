let quantEstoque = parseFloat(prompt("Digite a quantidade disponível em estoque:"))
let maximo = parseFloat(prompt("Digite a quantidade máxima desse produto em estoque:"))
let minimo = parseFloat(prompt("Digite a quantidade minímo desse produto em estoque:"))

let quantMedia = (maximo + minimo)/2

if(quantEstoque >= quantMedia){
    alert("Não efetuar a compra")
}
else{
    alert("Efetuar compra")
}