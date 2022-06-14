/* POST */

const data = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

axios.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(res => console.log(res.data) )
    .catch(error => console.log(error));


/* -------------------------------------------------- */

/* GET */
/* axios es una librería externa y hay que importarla en el html. */

axios.get('https://jsonplaceholder.typicode.com/users')
.then( (res) => console.log(res.data) )
.catch( error => console.log(error) );