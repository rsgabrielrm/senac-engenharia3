/*
* Class two node/express by: https://www.youtube.com/watch?v=bssLyDTgCAE&list=PLDqnSpzNKDvkgJdaBT14ll07yXCbuMucM&index=2
*/

const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

let clients = [
    {id: 4, name: 'Fulano da Silva', phone: '51991234433'},
    {id: 2, name: 'Ronaldo Brasil', phone: '51995555555'},
    {id: 3, name: 'Maria Gabriela Dias', phone: '51998111111'},
    {id: 1, name: 'Jussara Luz', phone: '519755588841'},

];

/*
* List
*/
app.get('/clients', (request, response) => response.json(clients))

/*
* Find
*/
app.get('/clients/:id', (request, response) => {
    const client = clients.filter(value => value.id == request.params.id);
    response.json(client)
})

/*
* Insert
*/
app.post('/clients', (request, response) => {
    const client = request.body;
    clients.push(client);
    response.json(client);

})

/*
* Update
*/
app.put('/clients/:id', (request, response) => {
    const id = request.params.id;
    const name = request.body.name;

    let client = clients.filter(value => value.id == id);

    client[0].name = name;
    
    response.json(client[0]);

})

/*
* Remove
*/
app.delete('/clients/:id', (request, response) => {
    const id = request.params.id;
    clients = clients.filter(value => value.id != id);
    response.json(clients);
})

app.listen(3000);