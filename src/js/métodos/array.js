const array = ['fede', 'anto', 'eve', 'michi', 'magda', 'olivia'];
const objetos = [{name: 'mochila'}, {name: 'silla'}, {name: 'canopla'}, {name:'lapicera'}];
const nums = [0, 2, 4, 5, 4,5,4,3,1,6,7,8,4,2]

// console.log(array.pop()); //Elimina el último elemento y nos lo devuelve

// console.log(array.shift()); //Elimina el primer elemento y nos lo devuelve

// console.log(array.push('sofia')); //Agrega un nuevo elemento
// console.log(array);

// console.log(array.reverse()); //Invierte el orden

// array.unshift('michi2'); //Agrega un elemento en x posicion
// console.log(array);

// console.log(array.sort()); // Ordena alfabéticamente

// console.log(array.splice(3, 1, 'michiNuevo')); // Reemplaza y nos lo devuelve
// console.log(array.splice(2, 1, 'eveNueva'))
// console.log(array);
// (x, y, nuevoElemento) reemplaza en la posicion x, y veces por el elementoNuevo

console.log(array.join(","));
console.log(array.includes('Maria'));
console.log(array.indexOf('michi'));
console.log(array.lastIndexOf('michi'));

const objetos2 = objetos.map((el, index) => {
    const newName = el.name + '2';

    return newName;
});

console.log(objetos2);


const numerosFiltrados = nums.filter(el => el !== 4);

console.log(numerosFiltrados);