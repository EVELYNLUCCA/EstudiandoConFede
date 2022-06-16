// Local

localStorage.setItem('llave', 'valor'); //Insertar un item

const miValor = localStorage.getItem('llave'); //Obtenemos el item a partir de su llave.
console.log(miValor);

console.log(localStorage.key(0)); // Ponemos un índice, y nos devuelve su llave.

localStorage.removeItem('llave'); // Removemos un item a través de su llave

localStorage.clear(); //Limpiamos el storage.

// Session

sessionStorage.setItem('llave', 'valor');

const miValor2 = sessionStorage.getItem('llave');
console.log(miValor2);

console.log(sessionStorage.key(0));

sessionStorage.removeItem('llave');

sessionStorage.clear();

// Guardar arrays y objetos

const gatitos = {
    1: 'gatito1',
    2: 'gatito2'
};

localStorage.setItem('gatitos', JSON.stringify(gatitos)); // Lo pasamos a string antes de guardarlo

const gatitosNew = JSON.parse(localStorage.getItem('gatitos')); // Lo pasamos a objeto cuando lo traemos
console.log(gatitosNew);