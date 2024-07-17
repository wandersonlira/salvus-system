
export function produtoCriadoJson(resultadoConsulta, produtoDto) {
    const mensagem = 'Produto cadastrado com sucesso!';
    const json = {
        message: mensagem,
        id: resultadoConsulta.insertId,
        nome: produtoDto.nome,
        descricao: produtoDto.descricao,
        preco: produtoDto.preco,
        data_criacao: produtoDto.data_criacao
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
        data_criacao: produtoDto.data_criacao,
        informacao: resultadoConsulta,
    };
    return JSON.stringify(json);
}
