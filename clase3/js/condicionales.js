// Ubicar elementos dentro del DuOM
const span = document.querySelector('#derecha span')

/*
    Hacer una pregunta al usuario
    - El usuario va a responder
    - Vamos a almacenar la respuesta en memoria
*/
let respuesta = prompt('¿qué seleccionado ganó la copa del mundo Qatar 2022?')

/* 
    Vamos a comparar la respuesta enviada por el usuario
    - Si el usuario responde 'argentina'
        Entonces mostramos la palabra '¡Correcto!'
    - Si responde cualquier cosa diferente de 'argentina'
        Entonces mostramos la palabra '¡Inorrecto!'
*/
if( respuesta.toLowerCase() == 'argentina' ){
    //span.innerText = '¡Correcto!'
    //span.textContent = '¡Correcto!'
    span.innerHTML = '<img src="imgs/ok.png">'
}
else{
    //span.innerText = '¡Incorrecto!'
    //span.textContent = '¡incorrecto!'
    span.innerHTML = '<img src="imgs/error.png">'
}