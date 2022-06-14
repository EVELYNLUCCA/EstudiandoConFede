/*
    Las promesas sirven, justamente, para prometer algo.
    Si esa promesa se cumple, manejamos el resultado, y si no se cumple, manejamos el error.
*/

const nota = 10;

const promesaNota = new Promise( (resolve, reject) => {
    if (nota >= 8) {
        resolve('te compro el celular');
    } else {
        reject('anda a cagar');
    }
});

promesaNota
    .then( (respuesta) => {document.write(respuesta)} )
    .catch( (error) => {document.write(error)} );