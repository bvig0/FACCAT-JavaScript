let anos = parseInt(prompt("Digite a sua idade/anos:"));

let meses = parseInt(prompt("Digite quantos meses você tem"));

let dias = parseInt(prompt("Digite quantos dias você tem:"));

dias = (anos * 365) + (meses * 30) + dias;

alert("Total de dias vividos: " + dias);