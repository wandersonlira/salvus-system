import moment from "moment-timezone";
import { validaDadosBody } from "../utils/funcoesUtils.js";

export default class ProdutoDTO {
    
    constructor(nome = String, descricao = String, preco = 0.0) {
        const validaDados = validaDadosBody(nome, descricao, preco);
        this.nome = validaDados[0];
        this.descricao = validaDados[1];
        this.preco = validaDados[2]
        this.data_criacao = new Date();
    }
}
