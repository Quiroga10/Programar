//variables Globales
//funcion iniciarJuego
//para solo mostrar la Seleccion de Mascota
let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
//ocultar boton reiniciar
let sectionReinniciar = document.getElementById('reiniciar')
let botonMascotaJugador = document.getElementById('boton-mascota')
let botonFuego = document.getElementById('boton-fuego')
let botonAgua = document.getElementById('boton-agua')
let botonTierra = document.getElementById('boton-tierra')
let botonReiniciar = document.getElementById('boton-reiniciar')

//function seleccionarMascotaJugador
// ocultar seleccionar mascota
let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
//Luego de seleccionar mascota, me aparesca seleccionar ataque
let inputHipodoge = document.getElementById('hipodoge')
let inputCapipepo = document.getElementById('capipepo')
let inputRatigueya = document.getElementById('ratigueya')
let spanMascotaJugador = document.getElementById('mascota-jugador')

//function seleccionarMascotaEnemigo
let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

//function combate
let spanVidasJugador = document.getElementById('vidas-jugador')
let spanVidasEnemigo = document.getElementById('vidas-enemigo')

//function crearMensaje
let sectionMensajes = document.getElementById('resultado')
let ataquesDelJugador = document.getElementById('ataques-del-jugador')
let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')


let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'

    sectionReinniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonFuego.addEventListener('click',ataqueFuego)

    botonAgua.addEventListener('click',ataqueAgua)

    botonTierra.addEventListener('click',ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }
    else{
        alert('NO Seleccionaste NADA')
        reiniciarJuego()
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()

}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    }else{
        ataqueEnemigo = 'Tierra'
    }
    combate()
}

function combate(){
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje("GANASTE")
        //resta las vidas del enemigo
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje("GANASTE")
        //resta las vidas del enemigo
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje("GANASTE")
        //resta las vidas del enemigo
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        //resta la vidas del jugador
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    //revisar las vidas de ambos jugadores
    revisarVidas()

}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones! Ganaste 🎉")
    }else if(vidasJugador == 0){
        crearMensajeFinal("Lo siento, perdiste 😢")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true
    sectionReinniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//codigo para no importar si coloco el script arriba o abajo
//carga primero html
window.addEventListener('load', iniciarJuego)