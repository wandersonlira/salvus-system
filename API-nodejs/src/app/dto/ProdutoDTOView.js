import { formataDataDtoView } from "../utils/funcoesUtils.js";

export default class ProdutoDTOView {
    constructor(id, nome, descricao, preco, data_criacao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.data_descricao = formataDataDtoView(data_criacao);
    }
}