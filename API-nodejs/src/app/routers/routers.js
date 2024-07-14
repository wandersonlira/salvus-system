import { Router } from "express";
import {PRODUTOS} from "../../app.js";

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
        <p>Rota HTML raiz enviada pelo Express</p>
    </body>
    </html>
    `;
    resposta.send(htmlContent)});
// ============= FIND-ALL ============
router.get('/produtos', (requisicao, resposta) => {
    resposta.send(PRODUTOS).status(200);
});
router.get('/produtos/:id', (requisicao, resposta) => {
    resposta.json(PRODUTOS[buscarProdutos(requisicao.params.id)]).status(200);
});
// // ============= SAVE ============
// router.post('/produtos', (requisicao, resposta) => {
//     resposta.send(PRODUTOS).status(200);
// });
// // ============= UPDATE ============
// router.put('/produtos/:id', (requisicao, resposta) => {
//     resposta.send(PRODUTOS).status(200);
// });
// // ============= DELETE ============
// router.delete('/produtos/:id', (requisicao, resposta) => {
//     resposta.send(PRODUTOS).status(200);
// });

function buscarProdutos(id) {
    return PRODUTOS.findIndex(produto => produto.id == id);
}

export default router;
