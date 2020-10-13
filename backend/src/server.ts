import express from 'express';

const app = express();

app.use(express.json());

// Métodos HTTP = GETM POST, PUT, DELETE

// GET = Buscar uma informação (lista, item)
// POST = Criando uma informação
// PUT = Eitando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body : http://localhost:3333/users (identificar um recurso)

app.post('/users/:id', (request, response) => {

    console.log(request.query);
    console.log(request.params);
    console.log(request.body);

    return response.send({ message: 'Hello World '});
});

app.listen(3333);
