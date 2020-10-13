import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection'

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

app.post('/orphanages', async (request, response) => {

    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours, 
        open_on_weekends

    } = request.body;

    const orphanageRepository = getRepository(Orphanage);

    const orphanage = orphanageRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours, 
        open_on_weekends
    });

    await orphanageRepository.save(orphanage);

    return response.status(201).json(orphanage);
});

app.listen(3333);

// Driver nativo, Query builder, ORM -> Object Relational Mapping

// users -> User ( Objeto )