let horaInicio = parseInt(prompt("Digite a hora de ínicio (24h):"))
let horaTermino = parseInt(prompt("Digite a hora de término (24h):"))
let duracao = 0

if(horaInicio < horaTermino){
    duracao = horaTermino - horaInicio
}
else{
    duracao = (24-horaInicio) + horaTermino
}

alert("A partida durou "+ duracao +" horas")