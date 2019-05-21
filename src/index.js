import {GraphQLServer, MockList} from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, {name}) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({typeDefs, resolvers})
server.start(() =>
  console.log('GraphQL is running on http://localhost:4000'),
)
