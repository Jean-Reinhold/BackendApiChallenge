BackendApiChallenge: 
------
### Link para meu codesanbox: 
* https://codesandbox.io/s/testedeestagio-jfsz9

# Doc De Teste API: 
Para a criação da API foram utlizados: `Express`, `Knex`, `PostgresSQL`. Portanto, é necessário instalá-los em sua máquina 

## Setup do Database 
* Crie um database vazio; 
* Vá até a pasta "knexfile.js" e mude as configurações adequando-as para seu ambiente 
* Rode a migration que se encontra em `src/database/migrations/` usando o comando  `npx knex migrate:latest`, para criar as tabelas relacionais; 
* Rode a seed que se encontra em `src/database/seeds/` usando o comando  `npx knex seed:run`, para criar os primeiros projetos no database 

## Teste de requests 
Utilizando Insomnia, realize os requests tendo em mente de que inicialmente existem apenas projetos no database

* `GET /projects/index` Retorna uma lista de todos os projetos
![Index](testPrints/projecIndex.png)

* `POST /navers/store` Utilizando dados do body, insere um novo naver no database
![Store](naverStore.png)

* `GET /projects/show` Utilizando o id do body, retorna os dados de um projeto
![Show](projectShow.png)

* `GET /navers/index` Retorna uma lista de todos os navers
![Index](naverIndex.png)

* `POST /projects/store` Utilizando dados do body, insere um novo projeto no database
![Store](projectStore.png)

* `GET /naver/show` Utilizando o id do body, retorna os dados de um naver
![Show](naverShow.png)




    
 


