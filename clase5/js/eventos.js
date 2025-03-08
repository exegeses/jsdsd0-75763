// Ubicamos elementos dentro del dom
const btn = document.querySelector('#btn')
const span = document.querySelector('#derecha span')

// addEventListener('evento', acción)   

btn.addEventListener(
        'click',
        function()
        {
            span.textContent = 'hiciste click!'
        }
)
btn.addEventListener(
        'mouseover',
        function()
        {
            span.textContent = 'mouse sobre'
        }
)
// arrow function
btn.addEventListener(
        'mouseout',
        () =>
        {
            span.textContent = 'reposo'
        }
)