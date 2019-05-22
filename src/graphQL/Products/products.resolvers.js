let products = [
  {
    name: 'abc',
    description: 'bla bla bla',
    category: 'Electronics',
    price: 20.2,
  },
]
export default {
  Query: {
    getAllProducts() {
      return products
    },
  },
  Mutation: {
    createProduct(root, args, ctx) {
      console.log({ctx})
      products = [...products, args.input]
      return args.input
    },
  },
}
