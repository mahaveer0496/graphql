import {Schema, model} from 'mongoose'

const roleEnum = ['admin', 'support']

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {type: String, required: true},
  joinDate: {type: Date, default: Date.now},
  role: {
    type: String,
    enum: roleEnum,
  },
})

export default model('User', userSchema)
