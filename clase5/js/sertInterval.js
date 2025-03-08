const span = document.querySelector('#derecha span')

let numero = 0

function incrementar()
{
    numero = numero + 1
    if( numero == 150 ){
        // detenamos el setInterval
        clearInterval(intervalo)
    }
    span.textContent = numero
}

incrementar()
let intervalo = setInterval( incrementar, 300 )