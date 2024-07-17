# 🌿 Salvus System 
Este repositório consiste no desenvolvimento de uma aplicação fullstack utilizando Node.js e React.js com deploy em hospedagens gratuitas.

![GitHub repo size](https://img.shields.io/github/repo-size/wandersonlira/salvus-system?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/wandersonlira/salvus-system?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/wandersonlira/salvus-system?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/github/issues/wandersonlira/salvus-system?style=for-the-badge)
![Bitbucket open pull requests ](https://img.shields.io/bitbucket/pr/wandersonlira/salvus-system?style=for-the-badge)


> [!TIP]
> ## 💻 Pré-requisitos
>
> ### Backend:
> - Você deve ter instalado:
>    - `<Node.js v18.20.4 | npm 10.7.0>`
>    - `<XAMPP v8.2.12>`
> - Depencências instaladas: 
>   - `"express": "^4.19.2"`,
>   - `"moment": "^2.30.1"`,
>   - `"moment-timezone": "^0.5.45"`,
>   - `"mysql": "^2.18.1"`,
>   `"nodemon": "^3.1.4"`
> - Script padrão:
>   - `"dev": "nodemon server.js"`

### 🔧 Instalação

#### 1. Após instalado `<Node.js v18.20.4 | npm 10.7.0>` e `<XAMPP v8.2.12>` clone este projeto para seu diretório local.

```bash
# navegue até seu diretório de downloads
cd seuDiretório/

# clonando repositório
git clone https://github.com/wandersonlira/salvus-system.git

```
#### 2. Configure o parâmetro de conexão com seu banco de dados.

```bash
# no caminho API-nodejs/src/app/models/database/conexao.js" mude os parâmetros para seua conexão

const CONEXAO = mysql.createConnection({
    host: 'SEU_LOCALHOST',
    port: 'SUA_PORTA',
    user: 'SEU_USUÁRIO',
    password: 'SEU_PASSWORD',
    database: 'NOME_DO_SEU_BANCO'
});
```
### 🔄 Rodando o projeto

#### Abra o editor de código de sua preferência e siga os seguintes passos no bash:

```bash
# navegue até seu diretório que contem a cópia deste projeto
cd seuDiretório/API-nodejs

# execute o mysql no xampp (exemplo no linux)
sudo /opt/lampp/xampp startmysql

# inicializando com 'nodemon' o serviço na porta 5000
npm run dev

# deve aparecer esta informação em seu terminal
> api-nodejs@1.0.0 dev
> nodemon server.js

[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Rodando no endereco http://localhost:5000
Conexão realizada com sucesso!

```

## 🚀 Começando
Esta API construida em node.js considera o princípio SOLID para organização de código considerando que cada módulo ou classe deve ter uma única responsabilidade e que classe derivada possa ser usada sem que o comportamento da aplicação seja afetado, estruturas de pastas possam ser organizadas de modo que novas funcionalidades possam ser adicionadas sem modificar o código existente e que estruturas de pastas podem facilitar a injeção de dependências e a separação entre abstrações e implementações.

## Escopo
Uma alicação fullstack que fornece uma api de catálogo de produtos em node.js onde seráconsumida poruma aplicação desenvolvida em react.js. 


## Requisitos funcionais
- [X] Permitir CRUD (Create, Read, Update, Delete).
- [x] Cada produto deve ter os seguintes campos: id, nome, descrição, preço e data de criação.
- [x] Cadastradar data automaticamente no ato da criação do produto.
- [x] Exibir data em formato local brasileiro baseado no padrão ISO 8601.
- [x] Criar DTOS para transferência dos dados.
- [x] Use o Express para criar as rotas.
- [x] Utilize um banco de dados (Mysql) para armazenar os dados.
- [x] Implemente validação de dados na criação e atualização de produtos.
- [x] Adicione tratamento de erros adequados.

## Requisitos de interface
> 1. **`/src/app/controllers/ProdutoController.js`:** Esta class estabelece uma camada de abstração entre as requisições feitas ao banco de dados e a resposta desses dados. Além disso, as requisições devem ser solicitadas pelo endpoint:
>
> - POST **`http://localhost:5000/api/produtos`:** No corpo será pedido apenas 'nome', 'descrição' e 'preço' pois a 'data_criacao' será pego automaticamente no ato da criação pelo objeto 'date' e 'moment-timezone' estabelecendo fusu horário brasileiro.
> - GET* **`http://localhost:5000/api/produtos`:** Lista todos os produtos cadastrados.
> - GET **`http://localhost:5000/api/produtos/id`:**Buscar produtos baseado no id.
> - PUT **`http://localhost:5000/api/produtos`:** Atualização acontece baseado no id onde no corpo será passado apenas 'nome', 'descrição' e 'preço' pois não será permitido alterar a data.
> - DELETE **`http://localhost:5000/api/produtos`:** A deleção acontece se o 'id' existir no banco de dados.
>
> 2. **`/src/app/repositories/ProdutoRepository.js`:** Esta class estabelece uma camada de abstração entre o banco de dados e o controllers trazendo segurança na transição. Além disso, as funções create(), findAll(), findById(), update(), delete() montam a consulta SQL passando como parâmentro para o método getConsulta() que é responsável por fazer a conexão com o banco.
>
> 3. **`/src/app/dto`:** Package responsável por realizar tratamento das transferência entre camadas.
>  - **`/src/app/dto/ProdutoDTO.js`:** No momento em que o produto é criado pelo método POST, este DTO realizada a inserção automaticamente no campo data_criacao baseado na fuso horário local brasileiro.
>  - **`/src/app/dto/ProdutoDTOView.js`:** Devolve em formato DD/MM/YYYYTHH:mm:ss com fuso horário America/Sao_Paulo.
> 4. **`/src/app/utils/funcoesUtils.js`:** Esta arquivo contém funcões que são reutilizadas pela aplicação.
>  - Os métodos `produtoCriadoJson()`, `produtoAtualizadoJson()` são acionados após a criação e atualização ser bem sucedida retornando um json para o corpo da resposta.
>  - `validaDadosBody()`: valida se 'nome' e 'descricao' são String e se 'preco' é Number.
>  - `posicaoIndice()`: Verifica a posição do índice da lista produtos onde espera "0" quando há o ID no banco ou "-1" caso não exista.

### 📈 Confira cada versionamento seguindo as issue
 - [Issue - #1 - Subir documentação inicial](https://github.com/wandersonlira/salvus-system/issues/1)
 - [Issue - #2 - Criando estrutura de pastas para a API REST usando padrão MVC](https://github.com/wandersonlira/salvus-system/issues/2)
 - [Issue - #3 - Criando rotas](https://github.com/wandersonlira/salvus-system/issues/3)
 - [Issue - #4 - Criar a conexão com o banco de dados](https://github.com/wandersonlira/salvus-system/issues/4)
 - [Issue - #5 - Definido rotas assíncronas de CRUD](https://github.com/wandersonlira/salvus-system/issues/5)
 - [Issue - #6 - Camada repository class ProdutoRepository](https://github.com/wandersonlira/salvus-system/issues/6)
 - [Issue - #7 - Criado class ProdutoController responsável pela camada controllers](https://github.com/wandersonlira/salvus-system/issues/7)
 - [Issue - #8 - Criado DTOs para transferência de dados e package 'utils' com funções reutilizáveis.](https://github.com/wandersonlira/salvus-system/issues/8)
 - [Issue - #9 - Criado formatações para data e validação de dados no corpo do body](https://github.com/wandersonlira/salvus-system/issues/9)

## Aplicação em execução
### Estrutura de pastas
![estrutura de pasta do projeto](https://github.com/user-attachments/assets/68f54600-8f52-4a70-a8ea-b67de2d926b0)
### Index produtos
![index](https://github.com/user-attachments/assets/4f933fb6-f5b9-47c2-bf78-40fbf5409e23)
### Show produtos
![show](https://github.com/user-attachments/assets/92bd7168-49e8-490d-a1e5-3e0fce6850f1)
### Store produto
![store](https://github.com/user-attachments/assets/47099707-1272-4a60-adfc-744c38978f12)
### Update produto
![update](https://github.com/user-attachments/assets/dc909d1d-2b97-47ca-848a-f0d2ea0e7554)
### Delete produto
![delete](https://github.com/user-attachments/assets/5c07cbe1-23c7-4697-bbf6-f09c966f0e39)

## 📌 Versão
 *"version": "1.0.0"*
