//variables globales
let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
}

function seleccionarMascotaJugador(){
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
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje("GANASTE")
    }else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje("GANASTE")
    } else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje("GANASTE")
    }else{
        crearMensaje("PERDISTE")
    }
}
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML ='Tú mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '-' +resultado

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//codigo para no importar si coloco el script arriba o abajo
//carga primero html
window.addEventListener('load', iniciarJuego)