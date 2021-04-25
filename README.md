# nodejs_nlw5
## Comandos para instalar dependências e iniciar o projeto
### DIA 1
```
$ yarn init -y
$ yarn add express
$ yarn add @types/express -D
$ yarn add typescript -D
$ yarn tsc --init
$ yarn add ts-node-dev -D
$ yarn dev
```

### DIA 2
```
$ yarn add typeorm reflect-metadata sqlite3
### Comando para criar uma migration
$ yarn typeorm migration:create -n CreateSetting
### Comando para executar metodo up das migration
$ yarn typeorm migration:run
### Comando para executar metodo down das migration
$ yarn typeorm migration:revert
$ yarn add uuid
$ yarn add @types/uuid -D
 ```

### DIA 3
```
yarn typeorm migration:create -n CreateUser
yarn typeorm migration:create -n CreateMessage
yarn typeorm migration:create -n CreateConnection
### Depois de preencher os metodos up e down das migrations, executar o comando abaixo
$ yarn typeorm migration:run

```