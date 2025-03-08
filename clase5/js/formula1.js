// Ubicar elementos dentro del DOM
const navegacion = document.querySelectorAll('#navegacion a')
console.log(navegacion)

const btnRedbull = navegacion[0];
console.log(btnRedbull)

const btnMclaren = navegacion[1]
const btnFerrari = navegacion[2]
const btnMercedes = navegacion[3]
const btnAmartin = navegacion[4]

const redbull = document.querySelector('#redbull')
const mclaren = document.querySelector('#mclaren')
const ferrari = document.querySelector('#ferrari')
const mercedes = document.querySelector('#mercedes')
const amartin = document.querySelector('#amartin')

/*  estado inicial
    que sólo se vea 1 escudería
    ocultar las demás
*/
mclaren.style.display = 'none'
ferrari.style.display = 'none'
mercedes.style.display = 'none'
amartin.style.display = 'none'

btnRedbull.addEventListener(
            'click',
            () =>
            {
                redbull.style.display = 'flex'
                mclaren.style.display = 'none'
                ferrari.style.display = 'none'
                mercedes.style.display = 'none'
                amartin.style.display = 'none'                
            }
)

btnMclaren.addEventListener( 
            'click',
            () =>
            {
                redbull.style.display = 'none'
                mclaren.style.display = 'flex'
                ferrari.style.display = 'none'
                mercedes.style.display = 'none'
                amartin.style.display = 'none'
            }
)

btnFerrari.addEventListener( 
    'click',
    () =>
    {
        redbull.style.display = 'none'
        mclaren.style.display = 'none'
        ferrari.style.display = 'flex'
        mercedes.style.display = 'none'
        amartin.style.display = 'none'
    }
)

btnMercedes.addEventListener( 
    'click',
    () =>
    {
        redbull.style.display = 'none'
        mclaren.style.display = 'none'
        ferrari.style.display = 'none'
        mercedes.style.display = 'flex'
        amartin.style.display = 'none'
    }
)

btnAmartin.addEventListener( 
    'click',
    () =>
    {
        redbull.style.display = 'none'
        mclaren.style.display = 'none'
        ferrari.style.display = 'none'
        mercedes.style.display = 'none'
        amartin.style.display = 'flex'
    }
)