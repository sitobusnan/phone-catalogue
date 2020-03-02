require('dotenv').config();

const PORT = 3000;

// Server
const app = require('express')();

app.use(require('morgan')('dev'));

// Graphql
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')
const data = require('./data/data')

const getPeople = () => {
    return data
}

const schema = buildSchema(`
  type Person{
    id: Int,
    name: String,
    email: String,
    country: String
  },
  type Query{
    allPersons: [Person],
    onePerson(id:Int!): Person,
  }
`)

const root = {
        allPersons: () => getPeople(),
        onePerson: ({ id }) => {
            const users = getPeople()
            return users.filter(user => user.id === id)[0]
        }

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




// query Query($id: Int !){
//   onePerson(id: $id){
//     name
//   }
// }




// {allPersons{
// name
// id
// }}