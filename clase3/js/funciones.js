// Ubicar elementos dentro del DOM
//const caja = document.getElementById('caja')
const caja = document.querySelector('#caja')

// declaración de funciones
function cambiarRojo()
{
    caja.textContent = 'Rojo'
    caja.style.backgroundColor = 'hsl(0,60%,60%)'
    caja.style.rotate = '15deg'
}

function cambiarAzul()
{
    caja.textContent = 'Azul'
    caja.style.backgroundColor = 'hsl(210,70%,60%)'
    caja.style.rotate = '-10deg'
}

function cambiarFucsia()
{
    caja.textContent = 'Fucsia'
    caja.style.backgroundColor = 'hsl(280,70%,60%)'
    caja.style.rotate = '60deg'
}

/* Pasar parámetros a una función */
function cambiar( nombreColor, codigoColor, rotacion )
{
    caja.textContent = nombreColor
    caja.style.backgroundColor = codigoColor
    caja.style.rotate = rotacion
}

cambiar('Amarillo', 'hsl(50, 60%, 60%)', '-720deg')
