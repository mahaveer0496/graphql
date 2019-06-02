import {Schema, model, SchemaTypes} from 'mongoose'
import validator from 'validator'
const categoryEnum = ['Electronics', 'Clothes', 'Furniture']
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
      default: 'https://via.placeholder.com/150',
      validate: [
        (v) => validator.isURL(v),
        'Not a valid image url',
      ],
    },
    type: {
      type: String,
      required: true,
      enum: ['GAMING_PC', 'BIKE', 'DRONE'],
    },
    description: String,
    liquidCooled: {
      type: Boolean,
      required() {
        return this.type === 'GAMING_PC'
      },
    },
    bikeType: {
      type: String,
      enum: ['KIDS', 'MOUNTAIN', 'ELECTRIC', 'BEACH'],
      required() {
        return this.type === 'BIKE'
      },
    },
    range: {
      type: String,
      required() {
        return this.type === 'DRONE'
      },
    },
    createdBy: {
      type: Map,
      of: String,
      required: false,
      default: {
        name: 'user',
        id: '1',
        email: 'user@user.com'
      },
    },
  },
  {timestamps: true},
)

export default model('Product', productSchema)
