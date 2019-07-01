![Jmeter](https://upload.wikimedia.org/wikipedia/commons/2/22/Apache_JMeter.png)

#### Realizando um teste de performance usando o JMeter

---

#### 01 - Executando o JMeter
 - Primeiro passo acesso o link [JMeter - Apache](https://jmeter.apache.org/)
 - Neste site você encontra o [manual](https://jmeter.apache.org/usermanual/index.html) aonde ele explica como criar cenários de planos de teste.
 - Temos também a ferramenta para [download](https://jmeter.apache.org/download_jmeter.cgi).
 - Neste exemplo estarei utilizando a versão binária *apache-jmeter-5.1.1.tgz*
 - Após o download, acesse o arquivo -> "*../apache-jmeter-5.1.1/bin/ApacheJMeter.jar*" (***OBS.: JMeter roda em cima do java não esqueça de ter o java em sua maquina configurado corretamente.***)
 - Após o carregamento esta tela sera exibida [imagem-1].
 
#### 02 - Criando nosso primeiro teste de performance
 - Neste exemplo usaremos o site [Globo Esporte](https://globoesporte.globo.com/)
 - O primeiro teste que vamos fazer é simular vários usuários fazendo requisições http para o site.
  - Primeiro adicionamos um grupo de usuários para informar a quantidade de usuários que vão simular as chamadas. [imagem-2]
  - Na tela grupo de usuários, vamos informar 10 usuários para o teste. [imagem-3]
  - Com o grupo de usuário criado, vamos adicionar nossa requisição HTTP.[imagem-4]
  - Na tela informamos a url do site em *Nome do servidor ou IP*
  - Agora precisamos monitorar a saída dos nossos testes, isso é chamado dentro do JMeter como *Ouvite*, então em *Grupo de Usuários* selecione *Adicionar > Ouvinte > Ver Resultados em Tabela*.[imagem-5]
  
### 03 - Executando nosso plano de teste
 - Após as configurações execute o teste apertando o botão play.[imagem-6]
 - Antes da execução o JMeter vai perguntar se você gostaria de salvar o plano de teste. Isto fica ao seu critério.[imagem-6]
 - Após a execução, a tabela deverá ser exibida da seguinte maneira.[imagem-8]
 - Na tabela você vera uma coluna informando o *Status* da chamada dizendo se foi com sucesso ou erro.
  
  
### 04 - Executando uma chamada POST e validando o registro salvo com uma chamada GET

 - Seguindo os passos anteriores, crie um grupo de teste com duas chamadas. Uma POST e outra GET

 - No **POST** :
  - Adicione uma View Results Tree (Add > Listener > View Results Tree) para visualizar os resultados das chamadas.
  - Adicione um Regular Expression Extractor (Add > Post Processors > Regular Expression Extractor)
  - O Regular Expression Extractor vai adicionar em uma váriavel o id gerado que será utilizado na próxima chamada ( GET ) .
  - Para configurar o Regular Expression Extractor segue a regra
  - Supondo que você receba um JSON como resposta do servidor e a informação vem nesse formato:
    E a informação que precisamos é o id:
```json
    {
    "_id": "5d092d1194d4bb4bb1825e8e",
    "name": "Angelo",
    "email": "angelof@ciandt.com",
    "password": "123456",
    "profileImageUrl": "https://i.pinimg.com/originals/4c/69/6b/4c696b49e5babe8f5a232c48ef61e995.jpg",
    "createdAt": "2019-06-18T18:27:29.632Z",
    "id": 1076,
    "__v": 0
   }
```
   - E a informação que precisamos é o id:
  ```json
  "_id": "5d092d1194d4bb4bb1825e8e"
  ```
   - A expressão regular para extrair o valor será:
  ```json
   {"_id":"(.+?)",
  ```
    - Aonde (.+?) será o valor do id retornado e passado para a consulta.
 
 - Segue imagem desta configuração.
 - Adicione um nome para a variável e a expressão regular [imagem-jmeter].
  
 - No **GET** :
 - Adicione uma View Results Tree (Add > Listener > View Results Tree) para visualizar os resultados das chamadas.
 - No campo Path: no final da rota adicione a variável id criada no POST desta maneira “${id}”.

```/route/${id}```



  
 

 
 
