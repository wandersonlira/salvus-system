import moment from "moment-timezone";
import { validaDadosBody } from "../utils/funcoesUtils.js";

export default class ProdutoDTO {
    
    constructor(nome = String, descricao = String, preco = 0.0) {
        const validaDados = validaDadosBody(nome, descricao);
        this.nome = validaDados[0];
        this.descricao = validaDados[1];
        this.preco = preco
        this.data_criacao = moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
    }
}
