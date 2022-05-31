const x = 5;
const y = 10;

if (x >= y && x === 5) {
    console.log('x es mayor a y')
} else {
    console.log('x es menor a y')
};

// if (x > y && x !== z) console.log('las dos condiciones tienen que ser verdaderas')

// if (x > y || x !== z) console.log('con que una sea verdadera es suficiente')

/* operador ternario */
(x >= y || x === 6) ? console.log('si') : console.log('no');

/* SWITCH */

/*switch (variable) {
    case condicion:
        si se cumple;
        break;
    default:
        si no se cumple ninguna
}*/

switch (x) {
    case 1:
        console.log('x es 1');
        break;
    case 2: 
        console.log('x es 2');
        break;
    case 3:
        console.log('x es 3');
        break;
    default:
        console.log('x no es ni 1 ni 2 ni 3');
        break;
} 
