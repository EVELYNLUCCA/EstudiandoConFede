/*
    try = intentar
    catch = agarrar

    La sentencia try...catch nos permite "probar" ejecutar algo
    si no se puede ejecutar correctamente, agarramos el error y lo manejamos.

    La diferencia entre usarlo y no usarlo, es que podemos manejar el error.
*/

const nombre = 'Federico';

try {
    document.write(nombr);
} catch (error) {
    document.write('q pusiste flaco');
}