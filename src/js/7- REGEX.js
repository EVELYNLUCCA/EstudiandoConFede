const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const textito = 'cjfdksafjkd';

console.log(validatePassword.test(textito));

/* 
    1- seleccionar el input
    2- ponerle el evento keyup
    3- buscar una expresion que valide ese input
    4- SI la expresion se cumple, cambiar el borde a verde
    5- SI NO cambiar el borde a rojo
*/