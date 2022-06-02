import {texto, saludar, edadDeTextito, saludar} from './variables.js';
/* importamos una por una las variables que exportamos dentro de un { } */

import vars from './variables.js'; 
/* como es default no usamos los { } para importar el objeto con todas las variables */

console.log(vars.texto);
console.log(vars.edadDeTextito);
console.log(vars.norita);
console.log(vars.saludar('fede'));