import { Router } from "express";
import {getConsulta} from "../models/database/conexao.js";

const router = Router();

// ------------------------- ROTAS ---------------------------

// ============= ROTA RAIZ ============
router.get('/', (requisicao, resposta) => { const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página HTML de Exemplo</title>
    </head>
    <body>
        <h1>Olá, Salvus!! 🌿</h1>
    </body>
    </html>
    `;
    resposta.send(htmlContent)});
// ============= FIND-ALL ============
router.get('/produtos', async (requisicao, resposta) => {
    const sql = 'SELECT * FROM produtos';
    const resultadoConsulta = await getConsulta(sql);
    resposta.status(200).json(resultadoConsulta)
});
// ============= FIND-BY-ID ============
router.get('/produtos/:id', async (requisicao, resposta) => {
    const produtoIndex = requisicao.params.id;
    const sql = 'SELECT * FROM produtos WHERE id = ?';
    const resultadoConsulta = await getConsulta(sql, produtoIndex);
    resposta.status(200).json(resultadoConsulta);
});
// // ============= SAVE ============
router.post('/produtos', async (requisicao, resposta) => {
    const {nome, descricao, preco, data_criacao} = requisicao.body;
    const sql = 'INSERT INTO produtos (nome, descricao, preco, data_criacao) '
        + 'VALUES (?, ?, ?, ?)';
    const resultadoConsulta = await getConsulta(sql, [nome, descricao, preco, data_criacao]);
    resposta.status(201).json(resultadoConsulta);
});
// // ============= UPDATE ============
router.put('/produtos/:id', async (requisicao, resposta) => {
    const produtoIndex = requisicao.params.id;
    const {nome, descricao, preco, data_criacao} = requisicao.body;
    const sql = 'UPDATE produtos SET nome = ?, descricao = ?, ' 
        + 'preco = ?, data_criacao = ? WHERE id = ?';
    const resultadoConsulta = await getConsulta(sql, [nome, descricao, preco, 
        data_criacao, produtoIndex]);
    resposta.status(200).json(resultadoConsulta);
});
// // ============= DELETE ============
router.delete('/produtos/:id', async (requisicao, resposta) => {
    const produtoIndex = requisicao.params.id;
    const sql = 'DELETE FROM produtos WHERE id = ?';
    const resultadoConsulta = await getConsulta(sql, produtoIndex);
    resposta.json(resultadoConsulta);
});

export default router;
