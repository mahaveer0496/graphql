import {GraphQLServer, MockList} from 'graphql-yoga'
import gqlLoader from './utils/gqlLoader'
const typeDefs = gqlLoader('Products/products.graphql')

const resolvers = {
  Query: {
    getAllProducts: () => [],
  },
}

const server = new GraphQLServer({typeDefs, resolvers})
server.start(() =>
  console.log('GraphQL is running on http://localhost:4000'),
)
