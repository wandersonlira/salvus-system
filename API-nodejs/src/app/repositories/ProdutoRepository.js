import { getConsulta } from "../models/database/conexao.js";

class ProdutoRepository {

    async create(requisicao, resposta) {
        const {nome, descricao, preco, data_criacao} = requisicao.body;
        const sql = 'INSERT INTO produtos (nome, descricao, preco, data_criacao) '
            + 'VALUES (?, ?, ?, ?)';
        const resultadoConsulta = await getConsulta(sql, [nome, descricao, preco, data_criacao]);
        resposta.status(201).json(resultadoConsulta);
    }

    async findAll(requisicao, resposta) {
        const sql = 'SELECT * FROM produtos';
        const resultadoConsulta = await getConsulta(sql);
        resposta.status(200).json(resultadoConsulta);
    }

    async findById(requisicao, resposta) {
        const produtoIndex = requisicao.params.id;
        const sql = 'SELECT * FROM produtos WHERE id = ?';
        const resultadoConsulta = await getConsulta(sql, produtoIndex);
        resposta.status(200).json(resultadoConsulta);
    }

    async update(requisicao, resposta) {
        const produtoIndex = requisicao.params.id;
        const {nome, descricao, preco, data_criacao} = requisicao.body;
        const sql = 'UPDATE produtos SET nome = ?, descricao = ?, ' 
            + 'preco = ?, data_criacao = ? WHERE id = ?';
        const resultadoConsulta = await getConsulta(sql, [nome, descricao, preco, 
            data_criacao, produtoIndex]);
        resposta.status(200).json(resultadoConsulta);
    }

    async delete(requisicao, resposta) {
        const produtoIndex = requisicao.params.id;
        const sql = 'DELETE FROM produtos WHERE id = ?';
        const resultadoConsulta = await getConsulta(sql, produtoIndex);
        resposta.json(resultadoConsulta);
    }
}

export default new ProdutoRepository();
