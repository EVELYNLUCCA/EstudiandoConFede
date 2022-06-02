function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

const saludarFlecha = (nombre) => {
    console.log('Hola', nombre);
    console.log('Chau', nombre);
}

saludarFlecha('Facundo');
saludarFlecha('Facundito');
saludarFlecha('Pepito');
saludarFlecha('Norita');

// /* ----------------------------------------------------------------------- */

function sumar(num1, num2){
    const resultado = num1 + num2;

    return resultado;
}

const suma5 = sumar(5, 5);
const suma10 = sumar(10, 10);

console.log(suma10);

/* ----------------------------------------------------------------------- */
