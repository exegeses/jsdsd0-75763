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



function showHide( seccion )
    {
        switch( seccion ){
            case 'redbull':
                redbull.style.display = 'flex';
                mclaren.style.display = 'none'
                ferrari.style.display = 'none'
                mercedes.style.display = 'none'
                amartin.style.display = 'none'
                break;
            case 'mclaren':
                redbull.style.display = 'none';
                mclaren.style.display = 'flex'
                ferrari.style.display = 'none'
                mercedes.style.display = 'none'
                amartin.style.display = 'none'
                break;
            case 'ferrari':
                redbull.style.display = 'none';
                mclaren.style.display = 'none'
                ferrari.style.display = 'flex'
                mercedes.style.display = 'none'
                amartin.style.display = 'none'
                break;
            case 'mercedes':
                redbull.style.display = 'none';
                mclaren.style.display = 'none'
                ferrari.style.display = 'none'
                mercedes.style.display = 'flex'
                amartin.style.display = 'none'
                break;

            case 'amartin':
                redbull.style.display = 'none';
                mclaren.style.display = 'none'
                ferrari.style.display = 'none'
                mercedes.style.display = 'none'
                amartin.style.display = 'flex'
                break;
        }
    }



btnRedbull.addEventListener(
            'click',
            () =>
            {
                showHide( 'redbull' )
            }
)

btnMclaren.addEventListener( 
            'click',
            () =>
            {
                showHide( 'mclaren' )
            }
)

btnFerrari.addEventListener( 
    'click',
    () =>
    {
        showHide( 'ferrari' )
    }
)

btnMercedes.addEventListener( 
    'click',
    () =>
    {
        showHide( 'mercedes' )
    }
)

btnAmartin.addEventListener( 
    'click',
    () =>
    {
        showHide( 'amartin' )
    }
)