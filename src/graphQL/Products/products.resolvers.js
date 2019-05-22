export default {
  Query: {
    async getAllProducts(_, __, ctx) {
      return await ctx.productModel.find()
    },
  },
  Mutation: {
    async createProduct(root, args, ctx) {
      return await ctx.productModel.create(args.input)
    },
  },
  Product: {},
}
