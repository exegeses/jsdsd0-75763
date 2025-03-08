/*
* crear un reloj digital
* formato: hh:mm:ss         i.e.: 10:02:40
*/
const span = document.querySelector('#derecha span')


function agregarCero( numero )
{
    if( numero < 10 ){
        numero = '0'+ numero
    }
    return numero
}

function mostarrReloj()
{
    //creamos objeto de fecha
    const fecha = new Date()

    // obtenemos el número correspondiente a las horas
    let horas = fecha.getHours()
        horas = agregarCero(horas)

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
        minutos = agregarCero(minutos)

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
        segundos = agregarCero(segundos)

    //imprimimos en el span
        //concatenación (pegar cadenas de caractéres)
    //span.textContent = horas +':'+ minutos +':'+ segundos
        
        //interpolación de cadenas ` backtick   ${nombreVar}
    span.textContent = `${horas}:${minutos}:${segundos}`
}

mostarrReloj()

// Actualizamos el llamado a la función mostrarReloj()
setInterval( mostarrReloj, 1000 )