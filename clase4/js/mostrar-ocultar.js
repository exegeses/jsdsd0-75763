// ubicar elementos dentro del DOM

//const caja = document.getElementById("caja")
const caja = document.querySelector('#caja')

function ocultar()
{
    caja.style.display = 'none'
}

function mostrar()
{
    caja.style.display = 'block'
}

function mostrarOcultar()
{
    if ( caja.style.display == 'none' ) {
        //caja.style.display = 'block'
        mostrar()
    }
    else{
        //caja.style.display = 'none'
        ocultar()
    }
}

/* funciones con parámetros */
function on_off( valorAtributo )
{
    caja.style.display = valorAtributo // 'none', 'block'
}

function interruptor()
{
    if ( caja.style.display == 'none' ) {
        //caja.style.display = 'block'
        on_off('block')
    }
    else{
        //caja.style.display = 'none'
        on_off('none')
    }
}