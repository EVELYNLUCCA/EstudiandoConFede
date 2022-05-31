let text = 'hola'; /* local */
var text1 = 'hola'; /* global */
const text2 = 'constante'; /* constante */

/* tipos de variables*/

let string = 'cadena de texto';
let number = 128;
let double = 123.54;
let booleano = true; /* true or false */
let array = ['hola', 'soy', 'un', 123421, 'array', ['otro', 'array', true]]; 
/* array dentro de otro -> matriz bidimensional */
console.log(array[5][1]); // Acceder a un elemento del array -> [posicion]

let gato = {
    nombe: 'gato',
    color: 'rojo',
    edad: 19,
    experiencias: ['dormir', 'comer', 'cagar'],
    comidas: {
        favorita: 'Whiskas',
        noFavorita: 'Ratones'
    },
    dormir: function dormir(){
        console.log('dormí');
    }
}

console.log(gato.comidas.favorita); // Acceder a un elemento del objeto -> .elemento

let variableUndefined = undefined; /* va a tener valor en un futuro */
let variableNula = null; /* no está inicializada */
let variableNaN = NaN; /* Not a Number */

/* ---------------------------------------------------------------------------- */

const nombre = prompt('nombre del usuario'); // guarda la respuesta de usuario ('string') en la variable nombre
const aceptas = confirm('sos mayor de 18?'); // guarda la respuesta del usuario (boolean) en la variable aceptas

/* escribir strings */

document.write(`Bienvenido ${nombre} a mi pagina
hecha con mucho amor`);

document.write('bienvenido/a ' + nombre + ' a mi página')








