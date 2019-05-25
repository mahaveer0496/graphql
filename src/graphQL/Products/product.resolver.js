import authenticate from '../../utils/authenticate'

export default {
  Query: {
    async getAllProducts(_, __, {token, productModel}) {
      const userId = authenticate(token)
      console.log({userId})
      return await productModel.find()
    },
  },
  Mutation: {
    async createProduct(_, {input}, {productModel}) {
      return await productModel.create(input)
    },
  },
  Product: {},
}
