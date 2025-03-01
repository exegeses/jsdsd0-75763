// ubicamos elementos dentro del DOM
/* Hasta el año 2015 teníamos
    document.getElementById()
    document.getElementsByTagName()
    document.getElementsByClassName()
    document.getElementsByTagName()
*/

// el section con el id "uno"
//const uno = document.getElementById('uno');
const uno = document.querySelector('#uno');
uno.style.backgroundColor = '#22a';

// todos los artículos dentro de "uno"
//const articulos = document.getElementsByTagName('article');
const articulos = document.querySelectorAll('#uno article');
//articulos[0].style.backgroundColor = '#010141';
articulos[2].style.backgroundColor = '#010141';

// el arte con él id "segundo"
//const segundo = document.getElementById('segundo');
const segundo = document.querySelector('#segundo');
segundo.style.backgroundColor = '#bdbdff';
segundo.style.color = '#000000';