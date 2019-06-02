// Packages
import {merge} from 'lodash'
import {GraphQLServer} from 'graphql-yoga'
import jwt from 'jsonwebtoken'

// custom imports

import gqlLoader from './utils/gqlLoader'
import connectToDB from './db/connect'

import productResolvers from './graphQL/Products/product.resolver'
import productModel from './graphQL/Products/product.model'
import productDataLoader from './graphQL/Products/product.dataload'

import userResolvers from './graphQL/User/user.resolver'
import userModel from './graphQL/User/user.model'

connectToDB()

const server = new GraphQLServer({
  typeDefs: [
    gqlLoader('Products/product.graphql'),
    gqlLoader('User/user.graphql'),
  ].join(' '),
  resolvers: merge(productResolvers),
  context: async ({request}) => {
    const token = request.headers.authorization
    
    return {
      productModel,
      userModel,
      token,
      productDataLoader: productDataLoader(),
    }
  },
})

export default function start(){
  server.start(() =>
    console.log('GraphQL is running on http://localhost:4000'),
  )
}
