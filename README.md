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
> - Depencências instaladas: 
>   -  "cors": "^2.8.5",
>   - `"express": "^4.19.2"`,
>   - `"dotenv": "^16.4.5"`,
>   - `"moment": "^2.30.1"`,
>   - `"moment-timezone": "^0.5.45"`,
>   - `"mysql2": "^3.10.3"`,
>   - `"nodemon": "^3.1.4"`
> - Script padrão:
>   - `"dev": "nodemon server.js"`
>
> ### Frontend:
> - Depencências instaladas: 
>   - "axios": "^1.7.3",
>   - "react": "^18.3.1",
>   - "react-dom": "^18.3.1",
>   - "react-icons": "^5.2.1",
>   - "react-router-dom": "^6.26.0",
>   - "react-scripts": "5.0.1",
>   - "react-toastify": "^10.0.5",
>   - "web-vitals": "^2.1.4"
> - Script padrão:
>   - `"start": "react-scripts start",

## 🔄 Rodando a aplicação
> #### Esta aplicação encontra-se em deploy no domínio `https://salvus-system.vercel.app/`
> ⚠️ Atenção: por questões de recurso em servidores gratuitos esta aplicação funcionará em horário comercial podendo haver latência na consulta dos dados. 
> 
![tela](https://github.com/user-attachments/assets/4e4ec6bc-e52c-416b-ac2a-c203b7c3416c)

## 🔄 Rodando a API

### 🔗 URL pública pelo navegador: 
> #### *Você pode testar os endpoint no próprio navegador seguindo as rotas:* 
>  - GET `https://salvus-system.onrender.com/api/produtos`
>  - GET `https://salvus-system.onrender.com/api/produtos/id`
>  - POST`https://salvus-system.onrender.com/api/produtos`
>    ```
>    {
>    "nome": "NOME DO PRODUTO",
>    "descricao": "DESCRIÇÃO SOBRE O PRODUTO",
>    "preco": VALOR
>    }
>    ```
>  - PUT `https://salvus-system.onrender.com/api/produtos/id`
>    ```
>    {
>    "nome": "NOVO PRODUTO",
>    "descricao": "DESCRIÇÃO SOBRE O PRODUTO",
>    "preco": VALOR
>    }
>    ```
>  - DELETE `https://salvus-system.onrender.com/api/produtos/id`

### 🔧 Instalação para ambiente local

> #### Você deve ter instalado:
>    - `<Node.js v18.20.4 | npm 10.7.0>`
>    - `<XAMPP v8.2.12>`

#### 1. Após instalado `<Node.js v18.20.4 | npm 10.7.0>` e `<XAMPP v8.2.12>` clone este projeto para seu diretório local.

```bash
# navegue até seu diretório de downloads
cd seuDiretório/

# clonando repositório
git clone https://github.com/wandersonlira/salvus-system.git

```
#### 2. Exclua a pasta ***node_modules/***.

```bash
# na raiz do projeto execute o comando abaixo para instalar exatamente as versões de pacotes especificadas no package-lock.json
npm ci
```

#### 3. Configure o parâmetro de conexão com seu banco de dados.

```bash
# no caminho "API-nodejs/src/app/models/database/conexao.js" mude os parâmetros para seua conexão.
# no caminho "API-nodejs/src/app/config/dbConfig.js" você confere diferentes ambientes.

const db = dbConfig.production;

export const CONEXAO = mysql2.createConnection({
    host:  db.host,
    port: db.port,
    user: db.user,
    password: db.password,
    database: db.database
});
```
### ⚙️ Rodando no ambiente local

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
Uma aplicação fullstack que fornece uma api de catálogo de produtos em node.js onde será consumida por uma aplicação desenvolvida em react.js. 


## Requisitos funcionais
- [X] Permitir CRUD (Create, Read, Update, Delete).
- [x] Cada produto deve ter os seguintes campos: id, nome, descrição, preço e data de criação.
- [x] Cadastradar data automaticamente no ato da criação do produto.
- [x] Exibir data em formato local brasileiro baseado "-03:00" no padrão ISO 8601.
- [x] Criar DTOs para transferência dos dados.
- [x] Usar o Express para criar as rotas.
- [x] Utilizar um banco de dados (Mysql) para armazenar os dados.
- [x] Implementar validação de dados na criação e atualização de produtos.
- [x] Adicionar tratamento de erros adequados.

## Requisitos de interface
> 1. **`/src/app/controllers/ProdutoController.js`:** Esta class estabelece uma camada de abstração entre as requisições feitas ao banco de dados e a resposta desses dados. Além disso, as requisições devem ser solicitadas pelo endpoint:
>
> - POST **`http://localhost:5000/api/produtos`:** No corpo será pedido apenas 'nome', 'descrição' e 'preço' pois a 'data_criacao' será pego automaticamente no ato da criação pelo objeto 'date' e 'moment-timezone' estabelecendo fuso horário brasileiro (-03:00).
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
 - [Issue - #10 - Atualizado documentação da API](https://github.com/wandersonlira/salvus-system/issues/10)
 - [Issue - #11 - Melhorar organização de código para torna-lo mais coeso](https://github.com/wandersonlira/salvus-system/issues/11)
 - [Issue - #12 - Correções no texto do README.md](https://github.com/wandersonlira/salvus-system/issues/12)
 - [Issue - #15 - Criar interface para comunicação com API](https://github.com/wandersonlira/salvus-system/issues/15)
 - [Issue - #16 - Criar telas Cadastrar, Buscar tudo e buscar por id](https://github.com/wandersonlira/salvus-system/issues/16)
 - [Issue - #17 - Configuração de Cors para rota em depoly](https://github.com/wandersonlira/salvus-system/issues/17)

## Aplicação em execução
### Estrutura de pastas
![estrutura de pasta do projeto](https://github.com/user-attachments/assets/8309413f-9a62-46b0-83e2-75d73093a17f)
### Index produtos
![findAll](https://github.com/user-attachments/assets/64fe4c71-dcf7-4593-ab70-d387affdfd6c)
### Show produtos
![findBy](https://github.com/user-attachments/assets/eea049f3-4253-41c5-8ffa-f102ce02b5a2)
### Store produto
![save](https://github.com/user-attachments/assets/47be4d17-a513-4c1c-bcb7-da619879ae42)
### Update produto
![update](https://github.com/user-attachments/assets/4d2e03da-b54e-4125-9e8f-d319cb2933f8)
### Delete produto
![delete](https://github.com/user-attachments/assets/682c9758-d100-4024-863c-0ee8edb4379e)

## 📌 Nota de versão 
### versão 1.0.0

