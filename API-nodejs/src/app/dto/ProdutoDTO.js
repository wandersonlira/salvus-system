export default class ProdutoDTO {

    data_criacao = new Date();
    
    constructor(nome, descricao, preco) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.data_criacao = this.data_criacao
    }
}