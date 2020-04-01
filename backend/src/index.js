const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota e Recursos:
 * Rota - localhost:3333/users
 * Recursos - /users
 */

 /**
  * Métodos HTTP:
  * 
  * GET - Buscar/listar uma informação do BACK-END
  * POST - Criar uma informação no BACK-END
  * PUT - Alterar uma informação do BACK-END
  * DELETE - Deletar uma informação do BACK-END
  */

  /**
   * Tipos de parâmetros: 
   * 
   * Query Params - Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params - Parâmetros utilizados para identificar recursos
   * Request Body - Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /** 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchMB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */
app.listen(3333);