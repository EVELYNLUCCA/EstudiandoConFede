/*
    callback = devolver la llamada

    en callback ejecutamos una funcion, como parámetro de otra.
*/

const perrito = 'lolo';
const gatito = 'gatito';

const llamarAnimal = (animalito) => {
    animalitoReal = animalito.toUpperCase();

    return animalitoReal;
}

const escribirPorConsola = (animalito) => {
    console.log(animalito);
}

escribirPorConsola( llamarAnimal(perrito) ); // Callback
