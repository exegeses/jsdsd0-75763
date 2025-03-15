const span = document.querySelector('#derecha span')

const marcas = [
                'Hermès', 'Zara', 'Boss',
                'Aeropostale', 'Kingpin', 'Tomy',
                'Gola', 'Hollister', 'Abercrombie',
                'JCrew'
               ]
console.log(marcas)
console.log(marcas[2])

span.textContent = marcas[5]

// Array con los días de la semana
const semana = [
                'Domingo', 'Lunes', 'Martes',
                'Miércoles', 'Jueves', 'Viernes',
                'Sabado'
               ]

const fecha = new Date();
console.log(fecha)               
// Obtengo el número de día de la semana
const nDiaSemana = fecha.getDay()
console.log(nDiaSemana)
// Si queremos ver el nombre del día de la semana en español
// Deberíamos combinar este número de índice con un elemento de un array 
// que almacenee los días de la semana
console.log( semana[ nDiaSemana ] )