
import {CONEXAO} from '../../config/databaseConfig.js';

CONEXAO.connect((erro) => {
    if(erro) {
        console.log("{\n <<OPS!! Houve um erro>> \n", erro);
    } else {
        console.log("Conexão realizada com sucesso!");
    }
});

export const getConsulta = (sql, valores=[]) => {
    return new Promise((resolvida, rejeitada) => {
        CONEXAO.query(sql, valores, (erro, resultado) =>{
            try {
                const tuplaResultante = JSON.parse(JSON.stringify(resultado));
                return resolvida(tuplaResultante);
            } catch (error) {
                return rejeitada(erro);
                }
        });
    });
}

