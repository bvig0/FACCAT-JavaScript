let maca = parseFloat(prompt("Escreva a quantidade de maçãs que você deseja comprar:"))

if(maca < 12){
    maca = maca * 1.30
}
else{
    maca = maca * 1
}

alert("O total foi: " + maca)