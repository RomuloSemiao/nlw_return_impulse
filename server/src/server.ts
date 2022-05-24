import express from 'express';
import { routes } from './routes';

const app = express();

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar informação única de uma entidade
// DELETE = Deleta informações

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
	console.log('HTTP server running');
});
