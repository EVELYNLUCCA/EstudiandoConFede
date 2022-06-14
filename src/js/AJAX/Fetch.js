let data;

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
/* los then son lo que va a ocurrir si se cumple la promesa. (reciben como parametro una funcion
    flecha con los datos*/
    .then(users => {
        data = users;
        console.log(data);
    })
    .catch(error => console.log(error));
/* el catch es lo que se usa para manejar errores... también recibe una función flecha
con el error, y siempre se ejecuta al final de los then */

fetch('GET', 'https://jsonplaceholder.typicode.com/users')
//fetch recibe 2 parámetros, GET, o sea la petición y la url de la api, el parámetro es get por defecto.
    .then( function(res) { res.json() } )
    .then( (data) => data.json() )
    .catch(error => console.log(error));







    
/* el async desbloquea el await */
// const getData = async (url) => {
//     const response = await fetch(url);
//     // Espera a que haga el fetch

//     const users = await response.json();
//     // Espera a que esa respuesta se convierta a json

//     return users;
// }

// const usersData = getData('https://jsonplaceholder.typicode.com/users')
//     .then(res => console.log(res));

// async function getData(){

// }