const contenedor = document.querySelector('#contenedor')
console.log(contenedor.children)

//botones
const anterior = contenedor.children[0]
const siguiente = contenedor.children[2]
//span
const span = contenedor.children[1]

const marcas = [
    'Hermès', 'Zara', 'Boss',
    'Aeropostale', 'Kingpin', 'Tomy',
    'Gola', 'Hollister', 'Abercrombie',
    'JCrew', 'Gucci'
   ]

/*
   Estado inicial
   Vamos a mostrar una de las marcas dentro del span
*/   
let indice = 0
span.textContent = marcas[indice]

siguiente.addEventListener(
        'click',
        () => {
            indice++
            if( indice == marcas.length  ){
                indice = 0
            }
            span.textContent = marcas[indice]
        }
    )
anterior.addEventListener(
        'click',
        () => {
            indice--
            if( indice == -1 ){
                indice = marcas.length - 1
            }
            span.textContent = marcas[indice]
        }
)    
