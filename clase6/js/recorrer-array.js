const lista = document.querySelector('#lista')

const marcas = [
    'Hermès', 'Zara', 'Boss',
    'Aeropostale', 'Kingpin', 'Tomy',
    'Gola', 'Hollister', 'Abercrombie',
    'JCrew'
   ]

lista.innerHTML = ``   
/* let n = 0
while ( n < marcas.length ){
    //lista.innerHTML += '<li>'+ marcas[n] + '</li>'
    lista.innerHTML += `<li>${marcas[n]}</li>`
    n ++
}*/

for( let n = 0; n < marcas.length; n ++ ){
    lista.innerHTML += `<li>${marcas[n]}</li>`
}
