require('dotenv').config();

const PORT = 3000;

// Server
const app = require('express')();

app.use(require('morgan')('dev'));

// Graphql
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = buildSchema(`
  type Query {
    message: String
  }

  
`);

const root = {
    message: () => 'Hello World!'
}

// DataBase
// require('./config/db.config')


app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});