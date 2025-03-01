/* 
    Un parámetro completa el sentido de una función
    Si nosotros le pasamos un parámetro una función 
    esta función puede cambiar su comportamiento levemente
*/

function saludar( nombrePersona )
{
    console.log('Hola', nombrePersona)
}

saludar( 'Rick' )
saludar( 'Morty' )
saludar( 'Summer' )

/*
    @param valor int numero a convertir
    @param unidad string unidad destino
*/
function conversor( valor, unidad )
{
    let resultado = 0;
    if( unidad == 'km' ){
    // kilómetros a millas
        resultado = valor * 1.60934
    }
    else if( unidad == 'mi' ){
    // millas a kilómetros
        resultado = valor / 1.60934
    }
    console.log('son', resultado, unidad)
}

conversor( 100, 'km' )
conversor( 100, 'mi' )


