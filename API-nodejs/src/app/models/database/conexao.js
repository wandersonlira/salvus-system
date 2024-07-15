import mysql from 'mysql';

const CONEXAO = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'db_produtos'
});

CONEXAO.connect((erro) => {
    if(erro) {
        console.log("{\n <<OPS!! Houve um erro>> \n");
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

export default CONEXAO;
