/*
    - Pedimos al usuario que ingrese su nombre
    - Una vez que el usuario ingresa su nombre, 
        almacenamos ese dato en memoria
    - Escribimos el nombre del usuario en el documento
*/
let nombre = prompt('ingrese su nombre')
document.write('tu nombre es: ', nombre)
/*
    Cuando capturamos un dato con la función prompt 
    este dato siempre es un String

    document.write() siempre va a escribir al final del documento
*/

// Ubicamos un elemento dentro del documento
const cajaTexto = document.querySelector('#derecha span')

// escribimos dentro del span
cajaTexto.textContent = nombre