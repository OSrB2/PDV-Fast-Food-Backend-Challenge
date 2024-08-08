<p align="center">
  <img src="https://github.com/deviobr/code-patterns/blob/main/images/devio.webp?raw=true" />
</p>

<h1 align="center">PDV – Fast Food / Back-end</h1>

## Descrição
Projeto de Api para um restaurante fast-food com o objetivo de gerenciar pedidos de clientes, podendo listar produtos, pedidos abertos, em andamento e pedidos encerrados. O deploy foi feito na plataforma Heroku - [PDV-FastFood-osrb2](https://api-pdv-osrbr-devio.herokuapp.com/).

### Pré-requisitos e como rodar o projeto
É necessário ter o gerenciador de pacotes Yarn instalado.
```
yarn
```

2. Clone o repositório:
```
git clone https://github.com/OSrB2/PDV-Fast-Food-Backend-Challenge.git
```
3. Configure as vairáveis de ambiente conforme o arquivo .envexample para conectar o seu banco de dados.

4. Execute as migrations para criar as tabelas no banco de dados

```
npx sequelize db:migrate
```
5. Execute o comando de seeders para popupar o banco de dados.
```
npx db:seeder:all
```
6. Inicie o servidor
```
yarn dev
```
7. Para rodar os testes utilize o comando:
```
yarn jest
```
### Techs
Foram utilizados nesse projeto, javascript, typescript, yarn e nodejs

[documentação](https://documenter.getpostman.com/view/20651436/VUqvoZZq)

