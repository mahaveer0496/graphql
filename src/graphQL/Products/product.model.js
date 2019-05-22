import {Schema, model} from 'mongoose'

const categoryEnum = ['Electronics', 'Clothes', 'Furniture']
const productSchema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  category: {
    type: String,
    enum: categoryEnum,
    required: true,
  },
  description: String,
})

export default model('Product', productSchema)
