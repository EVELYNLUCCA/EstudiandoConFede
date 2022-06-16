const array = [
    {
        texto: 'tatata',
        numero: 123,
        acepta: 'on'
    }
]

let datos;

const button = document.getElementById('guardar');
const inputTexto = document.getElementById('texto');
const inputNumber = document.getElementById('numero');
const acepta = document.getElementById('aceptar');

button.addEventListener('click', (e) => {
    const texto = inputTexto.value;
    const numero = inputNumber.value;
    const aceptar = acepta.value;

    const data = {
        texto: texto,
        numero: numero,
        aceptar: aceptar
    };

    array.push(data);

    localStorage.setItem('datos', JSON.stringify(array));

    datos = JSON.parse(localStorage.getItem('datos'));
    console.log(datos);
})

const buttonLimpiar = document.getElementById('limpiar');

buttonLimpiar.addEventListener ('click', (e) => {
    localStorage.clear(datos);
});



