# mongodb-docker

```java
// baixe a imagem do mongo
docker pull mongo

// verificando se foi baixado a imagem
docker images

// criando um container, nomeando como "mongo-docker" e habilitando para a porta 27017
docker run --name mongo-docker -p 27017:27017 -d mongo

//verificando se o mongo no docker esta sendo executado
docker ps -a

// acessando o mongo no docker
docker exec -it mongo-docker mongo admin

// exibindo os bancos no mogno
show dbs

// selecionando um db ( "local" é o nome do db, colocando outro nome de db que não exista é gerado um db novo )
use local

// exibindo as collections
show collections

// para testar o mongo via navegador 
// deve apaercer a seguinte mensagem no navegador: "It looks like you are trying to access MongoDB over HTTP on the native driver port."
localhost:27017


// para sair execute o comando no terminal
CTRL + c
```
