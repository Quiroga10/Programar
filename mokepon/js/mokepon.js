//variables Globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    //para solo mostrar la Seleccion de Mascota
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    // ocultar seleccionar mascota
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    //Luego de seleccionar mascota, me aparesca seleccionar ataque
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

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
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

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

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML ='Tú mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '-' +resultado

    sectionMensajes.appendChild(parrafo)
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