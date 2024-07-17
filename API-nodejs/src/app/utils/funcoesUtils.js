import moment from 'moment-timezone';

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
    const dataCriacao = new Date(data);
    const dataFormatado = moment(dataCriacao).tz('America/Sao_Paulo').format('DD/MM/YYYYTHH:mm:ss');
    return dataFormatado;
}

export function validaDadosBody(nome = String, descricao = String) {
    if(typeof nome === 'string' && typeof descricao === 'string') {
        const dadosValidados = [nome, descricao];
        return dadosValidados;
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