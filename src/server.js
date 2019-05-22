// Packages
import {merge} from 'lodash'
import {GraphQLServer} from 'graphql-yoga'

// custom imports
import gqlLoader from './utils/gqlLoader'
import connectToDB from './db/connect'

import productResolvers from './graphQL/Products/product.resolver'
import productModel from './graphQL/Products/product.model'

import userResolvers from './graphQL/User/user.resolver'
import userModel from './graphQL/User/user.model'
connectToDB()

const server = new GraphQLServer({
  typeDefs: [
    gqlLoader('Products/product.graphql'),
    gqlLoader('User/user.graphql'),
  ].join(' '),
  resolvers: merge(productResolvers, userResolvers),
  context: {
    productModel,
    userModel,
  },
})

export default function start(){
  server.start(() =>
    console.log('GraphQL is running on http://localhost:4000'),
  )
}
