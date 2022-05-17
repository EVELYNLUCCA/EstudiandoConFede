const form = {
}

const button = document.getElementById('enviar');
const input = document.getElementById('miInput');

button.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = 'red';
});

input.addEventListener('keyup', (e) => {
    form.name = e.target.value;
    console.log(form);
})

/* */

const buttonForm = document.querySelector('.buttonForm');

buttonForm.addEventListener('click', (e) => {
    e.preventDefault();
})

/* ----------------------------------------- */
