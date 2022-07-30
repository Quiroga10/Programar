function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "🥌"
    }else if(jugada == 2){
        resultado = "📋"
    }else if(jugada == 3){
        resultado = "✂"
    }else{
        resultado = "No existe ese numero"
    }
    return resultado
}
function combate(pc,jugador){
    let consecuencia =""
     //COMBATE
    if(pc == jugador){
        consecuencia = "EMPATE"
    }else if(jugador == 1 && pc == 3){
        consecuencia = "GANASTE"
        triunfos = triunfos + 1
    }else if(jugador == 2 && pc == 1){
        consecuencia = "GANASTE"
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2){
        consecuencia = "GANASTE"
        triunfos = triunfos + 1
    }else{
        consecuencia = "PERDISTE"
        perdidas = perdidas + 1
    }
    return consecuencia
}
 // 1- Piedra 2- Papel 3- Tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3)
    jugador = prompt("Elije: 1:piedra 2:papel 3:tijera");

    alert("PC elije: " + eleccion(pc))
    alert("Tu elijes: " + eleccion(jugador))
    alert("Tú " + combate(pc,jugador))
}
alert("Ganaste " + triunfos + " veces. Perdiste "+ perdidas + " veces.");