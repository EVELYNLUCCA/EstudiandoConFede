// let mia = {
//     nombre: 'mia',
//     edad: 6,
//     color: 'gris'
// }

// /* WHILE */

// while (mia.edad < 5) {
//     console.log('mia es un gatito');
//     mia.edad ++; /* siempre contador, sino bucle infinito */
// } /* mientras la condicion se cumpla, se ejecuta el código*/

// do {
//     console.log('mia es un gatito');
//     mia.edad ++;
// } while (mia.edad < 5); 
/* cumplis la condicion si o si una vez, despues verificas si seguir */

/* ---------------------------------------------------------------------------------------- */

/* declaracion, condicion, contador */
// for (let i = 0; i < 16; i++) {
//     if(i === 13) {
//         continue;
//     }; /* evita un bucle */

//     console.log(i);
// };

// const saludos = [
//     {
//         name: 'Fede',
//         rol: 'profesor',
//         colorFavorito: 'negro' 
//     },
//     {
//         name: 'Anto',
//         rol: 'alumna',
//         colorFavorito: 'Amarillo'
//     },
//     {
//         name: 'Evelynn',
//         rol: 'alumna',
//         colorFavorito: 'Negro'
//     },
//     {
//         name: 'Mia',
//         rol: 'Gato',
//         colorFavorito: 'Gris'
//     }
// ];

// for (let index = 0; index < saludos.length; index++) {

//     const element = saludos[index];
    
//     console.log(`${index}: ${element.colorFavorito}`);
// }

// saludos.forEach((element, index) => {
//     console.log(`${index}: ${element.name}`)
// });

/* ----------------------------------------------------------------------------------------- */

let gatos = ['mia', 'sasha', 'lola', 'amy'];

for (let gato in gatos) {
    console.log(gato)
} /* escribe indice */

for (let element of gatos) {
    console.log(element);
} /* escribe el elemento */

/* ----------------------------------------------------------------------------------------- */

