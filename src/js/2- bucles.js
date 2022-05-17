let mia = {
    nombre: 'mia',
    edad: 4,
    color: 'gris'
}

// console.log(gatos[1]);

console.log(`hola soy ${mia.nombre},
tengo ${mia.edad} años y soy de color ${mia.color}`);

/* WHILE */

// while (mia.edad < 10) {
//     console.log('mia es un gatito');
//     mia.edad ++;
// } /* mientras la condicion se cumpla, se ejecuta el código*/

// do {
//     console.log('mia es un gatito');
//     mia.edad ++;

//     if(mia.edad === 8) break;
// } while (mia.edad < 10); /* cumplis la condicion si o si una vez, despues verificas si seguir */

/* ---------------------------------------------------------------------------------------- */

// for (let i = 0; i < 16; i++) {
//     if(i === 13) {
//         continue;
//     }; /* evita un bucle */

//     console.log(i);
// }

/* ----------------------------------------------------------------------------------------- */

let variableCorto = mia.patitas || 'hice cortocircuito';
console.log(variableCorto);

/* ----------------------------------------------------------------------------------------- */

let gatos = ['mia', 'sasha', 'lola', 'amy'];

for (const gato in gatos) {
    console.log(gato)
} /* escribe indice */

for (const gato of gatos) {
    console.log(gato);
} /* escribe el elemento */

/* ----------------------------------------------------------------------------------------- */

