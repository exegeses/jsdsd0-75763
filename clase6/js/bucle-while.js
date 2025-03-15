//let check = true

/*
    Generar un número mágico entre 1 y 10
    El usuario va a escribir un número 
        tratando de adivinar ese número mágico
    Si no acierta, que siga intentando
    Si acierta, mostrar un mensaje informando que lo adivinó
*/

/*while ( check ){
    respuesta = prompt('detenemos el bucle?')
    if( respuesta.toLowerCase() == 'si' ){
        check = false
    }
}*/

function generarNumero()
{
    // Math  Contiene muchos métodos aritméticos
    // Math.random()  Genera un número aleatorio entre 0 ~ 1
    let numeroAleatorio = Math.random()
    let numero = numeroAleatorio * 9 + 1
    // Math.round() Redondea un número a su entero más cercano
    let numeroEntero = Math.round( numero )
    return numeroEntero
}

const numeroMagico = generarNumero()
console.log(numeroMagico)

let check = true
// caja de texto 
const numeroUsuario = document.querySelector('#numeroUsuario')
const mensaje = document.querySelector('#mensaje')


while( check ){
    //let numeroIngresado = numeroUsuario.value 
    let numeroIngresado = prompt('Ingrese un número')
    if( numeroIngresado == numeroMagico ){
        mensaje.innerHTML = '<h2>¡Felicitaciones! adivinaste el número</h2>!'
        check = false
    }
    else if ( numeroIngresado > numeroMagico ){
        //mensaje.innerHTML = '<h2>Te pasaste, intenta con un número más bajo!</h2>'
        alert('Te pasaste, intenta con un número más bajo')
    }
    else {
        //mensaje.innerHTML = '<h2>Te quedaste corto, intenta con un número más alto!</h2>'
        alert('Te quedaste corto, intenta con un número más alto')
    }
}