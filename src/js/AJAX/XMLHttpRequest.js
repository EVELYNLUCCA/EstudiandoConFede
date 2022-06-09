/* JAVASCRIPT OBJECT NOTATION */

// XMLHTTPreq -> Forma nativa

const request = new XMLHttpRequest;
// Creamos la variable con la que vamos a usar peticiones

request.addEventListener('load', (e) => {
    let response;

    if(request.status == 200){
        response = request.response;
    } else {
        response = request.status;
    }
    // Cuando esa variable cargue, ver el estado y guardar la respuesta si todo está bien.
    // si hay error, guardar sólo el estado

    console.log(JSON.parse(response));
    //Convertir a objeto javascript la respuesta
});

request.open('GET', 'https://jsonplaceholder.typicode.com/users');
//Creamos el mensaje que vamos a mandar al servidor

request.send();
/* mandamos el mensaje al servidor   */

/* POST */

const req = new XMLHttpRequest;
// Creamos la variable con la que vamos a usar peticiones

req.addEventListener('load', (e) => {
    let response;

    if(req.status == 200 || req.status == 201){
        response = req.response;
    } else {
        response = req.status;
    }
    // Cuando esa variable cargue, ver el estado y guardar la respuesta si todo está bien.
    // si hay error, guardar sólo el estado

    console.log(JSON.parse(response));
    //Convertir a objeto javascript la respuesta
});

req.open('POST', 'https://jsonplaceholder.typicode.com/posts');

req.setRequestHeader('Content-Type', 'application/json;charset=UTF8');

const data = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

req.send(JSON.stringify(data))