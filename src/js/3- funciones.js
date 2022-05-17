function escribirNums(cantidad){
    for (let i = 1; i <= cantidad; i++) {
        console.log(i);
    }
}

function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

escribirNums();
saludar('Ana');

/* ------------------------------------------------------------------------ */

const saludarFlecha = (nombre) => {
    console.log(`Hola ${nombre}`)
}

saludarFlecha('Anto');

/* ----------------------------------------------------------------------- */

function sumar(num1, num2){
    return num1 + num2;
}

const sumar2 = (num1, num2) => num1 + num2 

console.log(sumar2(6,5));

/* ----------------------------------------------------------------------- */
