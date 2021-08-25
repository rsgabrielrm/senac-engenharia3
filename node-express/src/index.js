/*
* Class two node/express by: https://www.youtube.com/watch?v=bssLyDTgCAE&list=PLDqnSpzNKDvkgJdaBT14ll07yXCbuMucM&index=2
* Class three node/express by: https://youtu.be/j5I61OrtI7w?list=PLDqnSpzNKDvkgJdaBT14ll07yXCbuMucM
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
    const {id} = request.params;
    const client = clients.find(value => value.id == id);
    
    if (client == undefined) {
        response.status(400).send();
    }

    response.json(client)
})

/*
* Insert
*/
app.post('/clients', (request, response) => {
    const client = request.body;
    clients.push(client);
    response.status(201).json(client);
})

/*
* Update
*/
app.put('/clients/:id', (request, response) => {
    const id = request.params.id;
    const name = request.body.name;

    let client = clients.find(value => value.id == id);
    
    if (client == undefined) {
        response.status(400).send();
    }

    client.name = name;
    response.status(200).json(client);

})

/*
* Remove
*/
app.delete('/clients/:id', (request, response) => {
    const {id} = request.params;
    const index = clients.findIndex(value => value.id == id);

    if (index == -1) {
        response.status(400).send();
    }

    clients.splice(index, 1);
    response.status(204).send();
})

app.listen(3000);