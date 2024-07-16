import ProdutoRepository from "../repositories/ProdutoRepository.js";

class ProdutoController {

    async index(requisicao, resposta) {
        const resultadoConsulta = await ProdutoRepository.findAll();
        resposta.status(200).json(resultadoConsulta);       
    }

    async show(requisicao, resposta) {
        const produtoId = requisicao.params.id;
        const resultadoLinha = await ProdutoRepository.findById(produtoId);
        resposta.status(200).json(resultadoLinha);
    }

    async store(requisicao, resposta) {
        const {nome, descricao, preco, data_criacao} = requisicao.body;
        const resultadoLinha = await ProdutoRepository.create({nome, 
            descricao, preco, data_criacao});
        resposta.status(201).json(resultadoLinha);
    }

    async update(requisicao, resposta) {
        const produtoIndex = requisicao.params.id;
        const {nome, descricao, preco, data_criacao} = requisicao.body;
        const resultadoConsulta = await ProdutoRepository.update({nome, 
            descricao, preco, data_criacao, produtoIndex});
        resposta.status(200).json(resultadoConsulta);
    }

    async delete(requisicao, resposta) {
        const produtoIndex = requisicao.params.id;
        const resultadoConsulta = await ProdutoRepository.delete(produtoIndex);
        resposta.status(200).json(resultadoConsulta);
    }

}

export default new ProdutoController();