/*
    Para declarar una variable en Javascript 
    utilizamos la palabra reservada 'let'
*/
let numero = 10
let precio = 20
let score = 0
/*
    Para declarar una constante en Javascript 
    utilizamos la palabra reservada 'const'
*/
const PI = 3.141592
const nacimiento = '15/02/1995'


// Escribimos el valor almacenado en el documento
document.write(numero)
document.write('<br>')
document.write(precio)
document.write('<br>')
document.write(nacimiento)
document.write('<br>')

// Sobre escribimos el valor de la variable número
numero = 50
score = 25
// sobre escribimos el valor de la constante
/*nacimiento = '22'
No se puede sobre describir el valor de una constante
*/
document.write(numero)