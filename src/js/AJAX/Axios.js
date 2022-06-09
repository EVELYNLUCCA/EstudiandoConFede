/* POST */

const data = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

axios.post('https://jsonplaceholder.typicode.com/posts', data)
    .then((res) => { console.log(res.data) })
    .catch(error => console.log(error));


/* -------------------------------------------------- */

async function renderUsers(){
    let users;

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( function(res) {
        users = res.data;
    } )
    .catch( error => console.log(error) );

    setTimeout(() => {
            const container = document.querySelector('.container');

            users.forEach(element => {
            const userCard = `
                <div class="card">
                    <p>${element.name}</p>
                    <p>${element.email}</p>
                    <p>${element.phone}</p>
                </div>
            `;
        
            container.innerHTML = container.innerHTML + userCard;
        });
    }, 5000);
}

renderUsers();