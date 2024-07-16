import { Router } from "express";
import ProdutosController from "../controllers/ProdutosController.js";

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
router.get('/produtos', ProdutosController.index);
// ============= FIND-BY-ID ============
router.get('/produtos/:id', ProdutosController.show);
// // ============= SAVE ============
router.post('/produtos', ProdutosController.store);
// // ============= UPDATE ============
router.put('/produtos/:id', ProdutosController.update);
// // ============= DELETE ============
router.delete('/produtos/:id', ProdutosController.delete);

export default router;
