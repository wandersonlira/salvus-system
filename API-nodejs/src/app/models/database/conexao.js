import mysql2 from 'mysql2';
import dbConfig from '../../config/dbConfig.js';

const db = dbConfig.production;

export const CONEXAO = mysql2.createConnection({
    host:  db.host,
    port: db.port,
    user: db.user,
    password: db.password,
    database: db.database
});

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

