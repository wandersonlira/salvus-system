
import express from 'express';
import router from './app/routers/routers.js';

const app = express();

app.use(router);
app.use(express.json());

// mock
export const PRODUTOS = [
    {id: 1, nome: 'Pão doce', descricao: 'Pão com doce', preco: 46.90, dataCriacao: '2024/07/13'},
    {id: 2,nome: 'Bolo de rolo', descricao: 'Bolo fininho bem enrolado', preco: 46.90, dataCriacao: '2024/07/13'},
    {id: 3,nome: 'Tênis', descricao: 'Tênis adidas', preco: 150.90, dataCriacao: '2024/07/13'},
    {id: 4, nome: 'Notebook', descricao: 'Notebook DELL', preco: 3000.90, dataCriacao: '2024/07/13'}
]

export default app;

