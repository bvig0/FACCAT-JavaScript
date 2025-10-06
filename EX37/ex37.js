let morangoKG = parseFloat(prompt("Quantos quilos de morango: "))
let macaKG = parseFloat(prompt("Quantos quilos de maçã: "))
let morangoPreco, macaPreco, total = 0

// Definindo o preço do morango
if (morangoKG <= 5) {
    morangoPreco = 2.50
}
else {
    morangoPreco = 2.20
}

// Definindo o preço da maçã
if (macaKG <= 5) {
    macaPreco = 1.80
}
else {
    macaPreco = 1.50
}

total = (morangoKG * morangoPreco) + (macaKG * macaPreco)

if (morangoKG + macaKG > 8 || total > 25) {
    total = total * 0.9
}

alert("O valor a ser pago é: R$ " + total)