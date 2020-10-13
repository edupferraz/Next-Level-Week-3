import express from 'express';
import './database/connection'

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP = GETM POST, PUT, DELETE

// GET = Buscar uma informação (lista, item)
// POST = Criando uma informação
// PUT = Eitando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body : http://localhost:3333/users (identificar um recurso)

// Driver nativo, Query builder, ORM -> Object Relational Mapping

// users -> User ( Objeto )