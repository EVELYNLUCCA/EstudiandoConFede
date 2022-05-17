/* seleccion de elementos */

const h1 = document.querySelector('.titulo');
const enviar = document.getElementById('enviar');
const li = document.querySelectorAll('ul li');
const miInput = document.getElementById('miInput');

console.log(enviar);

/* ---------------------- */

/* MANEJAR ATRIBUTOS */

h1.setAttribute('id', 'titulito');
h1.setAttribute('hola', "valorHola"); /* le damos un atributo id al h1 */

const h1Id = h1.getAttribute('id'); /* obtenemos el valor de ese id */
h1.removeAttribute('id'); /* volamos el id */

/* --------------------- */

/* ATRIBUTO STYLE */

enviar.style.fontSize = '60px';

/* INPUTS */

miInput.type = 'date';

/* ----------------------- */

h1.classList.add('nuevaClase'); /* añade una clase */
// h1.classList.remove('titulo'); /* remueve una clase */

console.log(h1.classList.item(1));  // devuelve una clase según su índice

console.log(h1.classList.contains('titulo')); 
// Nos devuelve un booleano dependiendo si contiene o no la clase

h1.classList.replace('titulo', 'titulito'); 
// reemplaza una clase por otra

h1.classList.toggle('titulito123');
// Si la clase está, la elimina. Si no, la agrega.

/* ------------------------- */

const textoElement=document.getElementById("texto");
textoElement.innerText = `Soy un texto <span>dinámico</span>`;
// Incorpora texto literal al elemento

const textoDinamico = document.getElementById('textoDinamico');
textoDinamico.innerHTML = `Soy un texto <span>con inner html</span>`;
// Incorpora texto HTML al elemento

console.log(textoDinamico.outerHTML);
// Nos devuelve el html del elemento.

/* -------------------------- */

const miH3 = document.createElement('h3'); // Lo creamos
miH3.innerHTML = 'Hola soy un h3 dinámico :D';

const miH4 = document.createElement("h4");
miH4.innerHTML = 'Hola soy un h4 dinámico preferido B)'

const divPadre = document.querySelector('.ElementsJS');
divPadre.appendChild(miH3); // Le manda un hijo
divPadre.appendChild(miH4);

// divPadre.replaceChild(miH4, miH3); // Reemplazamos el hijo
// divPadre.removeChild(miH4); // Removemos el hijo

/* --------------------------- */

console.log(divPadre.firstChild); // Devuelve el primer hijo (CUENTA LOS ESPACIOS EN BLANCO)
console.log(divPadre.firstElementChild); // Devuelve el primer hijo SIN CONTAR ESPACIOS EN BLANCO (ELEMENTO)
console.log(divPadre.lastChild); // Devuelve el {ultimo hijo}
console.log(divPadre.lastElementChild); // Devuelve el ultimo hijo, SIN CONTAR ESPACIOS EN BLANCO

console.log(divPadre.childNodes); // Devuelve una lista contando los espacios en blanco
console.log(divPadre.children); // Devuelve una lista sin contar los espacios en blanco

/* --------------------------- */

const myh5=document.createElement("h5");
myh5.innerHTML=`soy un h5 dinámico creado por eve`;

divPadre.replaceChild(myh5, miH4); // Remplaza un hijo por otro... primero hijo nuevo, luego hijo viejo;
// console.log(divPadre.hasChildNodes()); Te devuelve boleano: tiene hijos?
// divPadre.removeChild(miH3); Remueve un hijo

/* --------------------------- */

console.log(myh5.parentElement);
console.log(myh5.parentNode);
// a través del hijo averiguamos el padre

/* --------------------------- */

const hijo1 = document.getElementById('hijo1');
const hijo2 = document.getElementById('hijo2');
const hijo3 = document.getElementById('hijo3');

console.log(hijo2.nextSibling); // Dice el hermano siguiente (cuenta espacios)
console.log(hijo2.previousSibling); // Dice el hermano anterior (cuenta espacios)


console.log(hijo2.nextElementSibling); // Dice el el hermano siguiente (no cuenta espacios)
console.log(hijo2.previousElementSibling); // Dice el el hermsno anterior (no cuenta espacios)

/* ---------------------------- */

console.log(divPadre.closest('#texto'));
// Busca el nodo que contenga al selector más cercano







