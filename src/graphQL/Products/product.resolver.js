import authenticate from '../../utils/authenticate'

export default {
  Query: {
    async products(
      _,
      __,
      {token, productModel, productDataLoader},
    ) {
      return await productModel.find()
    },
    async product(root, args, ctx, info) {
      const {id} = args
      return await productModel.findById(id)
    },
  },
  Mutation: {
    async newProduct(root, args, ctx, info) {
      const {input} = args
      const {productModel} = ctx
      const product = await productModel.create(input)
      return product
    },
    async updateProduct(root, args, ctx, info) {
      const {input, id} = args
      const {productModel} = ctx
      return await productModel.findByIdAndUpdate(id, input)
    },
    async removeProduct(root, args, ctx, info) {
      const {id} = args
      const {productModel} = ctx
      return await productModel.findByIdAndDelete(id)
    },
  },
  Product: {
    __resolveType(product) {
      switch (product.type) {
        case 'GAMING_PC':
          return 'GamingPc'
        case 'BIKE':
          return 'Bike'
        case 'DRONE':
          return 'Drone'
        default:
          throw new Error('Type doesnt exist')
      }
    },
    createdBy(product, args, ctx, info) {
      console.log('does it run?')
      console.log(`product :`, {product})
    },
  },
}
