// Packages
import {merge} from 'lodash'
import {GraphQLServer} from 'graphql-yoga'

// custom imports
import gqlLoader from './utils/gqlLoader'
import connectToDB from './db/connect'

import productResolvers from './graphQL/Products/product.resolvers'
import productModel from './graphQL/Products/product.model'

connectToDB()

const server = new GraphQLServer({
  typeDefs: [gqlLoader('Products/product.graphql')].join(' '),
  resolvers: merge(productResolvers),
  context: {
    productModel,
  },
})

export default function start(){
  server.start(() =>
    console.log('GraphQL is running on http://localhost:4000'),
  )
}
