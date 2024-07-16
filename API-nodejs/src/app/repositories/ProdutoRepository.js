import { getConsulta } from "../models/database/conexao.js";

class ProdutoRepository {

    create({nome, descricao, preco, data_criacao}) {
        const sql = 'INSERT INTO produtos (nome, descricao, preco, data_criacao) '
            + 'VALUES (?, ?, ?, ?)';
        return getConsulta(sql, [nome, descricao, preco, data_criacao]);
    }

    findAll() {
        const sql = 'SELECT * FROM produtos';
        return getConsulta(sql);
    }

    findById(produtoId) {
        const sql = 'SELECT * FROM produtos WHERE id = ?';
        return getConsulta(sql, produtoId);
    }

    update({nome, descricao, preco, data_criacao, produtoIndex}) {
        const sql = 'UPDATE produtos SET nome = ?, descricao = ?, ' 
            + 'preco = ?, data_criacao = ? WHERE id = ?';
        return getConsulta(sql, [nome, descricao, preco, 
            data_criacao, produtoIndex]);
    }

    async delete(produtoIndex) {
        const sql = 'DELETE FROM produtos WHERE id = ?';
        return getConsulta(sql, produtoIndex);
    }

}

export default new ProdutoRepository();
