const button = document.getElementById('enviar');
const input = document.getElementById('miInput');

button.addEventListener('dblclick', (e) => {
    console.log(e.target);

    e.target.style.width = '300px';
    e.target.style.height = '300px';

/* Si los estilos están declarados en el css, la transición se ejecuta
pero si no están declarados, no se ejecuta */
});

input.addEventListener('keyup', (e) => {
    console.log(e.target.value);
})

/* */

const buttonForm = document.querySelector('.buttonForm');

buttonForm.addEventListener('click', (e) => {
    e.preventDefault();
})

/* ----------------------------------------- */
