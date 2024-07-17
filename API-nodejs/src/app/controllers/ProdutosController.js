import ProdutoRepository from "../repositories/ProdutoRepository.js";
import ProdutoDTOView from "../dto/ProdutoDTOView.js";
import ProdutoDTO from "../dto/ProdutoDTO.js";
import { produtoCriadoJson, produtoAtualizadoJson, posicaoIndice } from "../utils/funcoesUtils.js";

class ProdutoController {

    async index(requisicao, resposta) {
        try {
            const resultadoConsulta = await ProdutoRepository.findAll();
            let listaProdutoDtoView = [];
            for (let indice = 0; indice < resultadoConsulta.length; indice++) {
                const produtoDtoView = new ProdutoDTOView(
                    resultadoConsulta[indice].id, resultadoConsulta[indice].nome, resultadoConsulta[indice].descricao, 
                    resultadoConsulta[indice].preco, resultadoConsulta[indice].data_criacao
                );
                listaProdutoDtoView.push(produtoDtoView);
            }
            resposta.status(200).json(listaProdutoDtoView);  

        } catch (error) {
            resposta.status(404).json({ error: error.message });
        }     
    }

    async show(requisicao, resposta) {
        try {
            const produtoId = requisicao.params.id;
            const resultadoConsulta = await ProdutoRepository.findById(produtoId);
            const indexProduto = posicaoIndice(resultadoConsulta);
            const produtoDtoView = new ProdutoDTOView(
                resultadoConsulta[indexProduto].id, resultadoConsulta[indexProduto].nome, 
                resultadoConsulta[indexProduto].descricao, resultadoConsulta[indexProduto].preco, 
                resultadoConsulta[indexProduto].data_criacao);
            resposta.status(200).json(produtoDtoView);

        } catch (error) {
            resposta.status(404).json({error: error.message})
        }
    }

    async store(requisicao, resposta) {
        try {
            const produtoDto = new ProdutoDTO(
                requisicao.body.nome, requisicao.body.descricao, requisicao.body.preco
            );
            const resultadoConsulta = await ProdutoRepository.create(produtoDto.nome, 
                produtoDto.descricao, produtoDto.preco, produtoDto.data_criacao
            );
            resposta.status(201).send(produtoCriadoJson(resultadoConsulta, produtoDto));
        } catch (error) {
            resposta.status(500).json({error: error.message});
        }
    }

    async update(requisicao, resposta) {
        try {
            const produtoIndex = requisicao.params.id;
            const verificaId = await ProdutoRepository.findById(produtoIndex);
            if (verificaId.length === 0) return resposta.status(404).json("Id não encontrado!");
            const produtoDto = new ProdutoDTO(requisicao.body.nome, requisicao.body.descricao, 
                requisicao.body.preco
            );
            const resultadoConsulta = await ProdutoRepository.update(produtoDto.nome, 
                produtoDto.descricao, produtoDto.preco, produtoIndex);
            resposta.status(200).send(produtoAtualizadoJson(resultadoConsulta, produtoDto));
        } catch (error) {
            resposta.status(404).json({error: error.message});
        }
    }

    async delete(requisicao, resposta) {
        try {
            const produtoIndex = requisicao.params.id;
            const verificaId = await ProdutoRepository.findById(produtoIndex);
            if (verificaId.length === 0) return resposta.status(404).json("Id não encontrado!");
            const resultadoConsulta = await ProdutoRepository.delete(produtoIndex);
            resposta.status(200).json(resultadoConsulta.message = 'Produto excluido com sucesso!');
        } catch (error) {
            resposta.status(404).json({error: error.message});
        }
    }

}

export default new ProdutoController();
