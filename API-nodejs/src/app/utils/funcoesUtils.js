import moment from 'moment-timezone';
import { TZ_PT_BR, TZ_FORMAT } from '../config/tzConfig.js';

export function produtoCriadoJson(resultadoConsulta, produtoDto) {
    const mensagem = 'Produto cadastrado com sucesso!';
    const json = {
        message: mensagem,
        id: resultadoConsulta.insertId,
        nome: produtoDto.nome,
        descricao: produtoDto.descricao,
        preco: produtoDto.preco,
        data_criacao: formataDataDtoView(produtoDto.data_criacao)
    };
    return JSON.stringify(json);
}

export function produtoAtualizadoJson(resultadoConsulta, produtoDto) {
    const mensagem = 'Produto atualizado com sucesso!';
    const json = {
        message: mensagem,
        nome: produtoDto.nome,
        descricao: produtoDto.descricao,
        preco: produtoDto.preco,
        informacao: resultadoConsulta
    };
    return JSON.stringify(json);
}

export function formataDataDtoView(data = Date) {
    return moment(data).tz(TZ_PT_BR).format(TZ_FORMAT);
}

export function validaDadosBody(nome = String, descricao = String, preco) {
    if(typeof nome === 'string' && typeof descricao === 'string' && !isNaN(preco)) {
        if (parseFloat(preco)) {
            const dadosValidados = [nome, descricao, preco];
            return dadosValidados;
        }
    } else {
        throw new Error('erro: dados informados encontram-se incorretos!');
    }
}

export function posicaoIndice(resultadoConsulta) {
    if (resultadoConsulta.findIndex(indexProduto => indexProduto.id) === 0) {
        return resultadoConsulta.findIndex(indexProduto => indexProduto.id);
    } else {
        throw new Error('404: ID não encontrado!')
    }
}