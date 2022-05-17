let text = 'hola'; /* local */
var text1 = 'hola'; /* global */
const text2 = 'constante';

/* tipos de variables*/

let string = 'cadena de texto';
let number = 123;
let double = 123.54;
let booleano = true; /* true or false */
let array = ['hola', 'soy', 'un', 123421, 'array', ['otro', 'array', true]]; 
/* array dentro de otro -> matriz bidimensional */

let objeto = {
    nombre: 'Federico',
    apellido: 'Oviedo',
    años: 19,
    cumplirAños: function cumplir(){
        console.log('cumpli años')
    }
} /* objeto o array asociativo */

let variableUndefined = undefined; /* va a tener valor en un futuro */
let variableNula = null; /* no tiene valor */
let variableNaN = NaN; /* Not a Number */

/* ---------------------------------------------------------------------------- */

let nombre = prompt('nombre del usuario');
let aceptas = confirm('sos mayor de 18?');

/* escribir strings */

document.write(`Bienvenido ${nombre} a mi pagina
hecha con mucho amor`);

document.write('bienvenido/a ' + nombre + ' a mi página')

if (x > y && x !== z) console.log('las dos condiciones tienen que ser verdaderas')

if (x > y || x !== z) console.log('con que una sea verdadera es suficiente')

/* operador ternario */
(x > y) ? console.log('si') : console.log('no');

/* SWITCH */

switch (x) {
    case 1:
        console.log('x es 1')
        break;
    case 2: 
        console.log('x es 2');
        break;
    case 3:
        console.log('x es 3');
        break;
    default:
        console.log('x no es ni 1 ni 2 ni 3');
} 






