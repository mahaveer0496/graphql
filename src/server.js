// Packages
import {merge} from 'lodash'
import {GraphQLServer} from 'graphql-yoga'

// custom imports
import gqlLoader from './utils/gqlLoader'
import ProductResolvers from './graphQL/Products/products.resolvers'

const server = new GraphQLServer({
  typeDefs: [gqlLoader('Products/products.graphql')].join(' '),
  resolvers: merge(ProductResolvers),
  context: {},
})

export default function start(){
  server.start(() =>
    console.log('GraphQL is running on http://localhost:4000'),
  )
}
