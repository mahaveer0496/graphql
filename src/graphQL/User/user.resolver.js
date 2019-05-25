import jwt from 'jsonwebtoken'
import configDev from './../../config/dev'
export default {
  Query: {
    async login(_, {input}, ctx) {
      const user = await ctx.userModel.findOne({
        email: input.email,
      })
      if (!user) {
        throw new Error('No user found')
      }

      if (input.password !== user.password) {
        throw new Error('Wrong password')
      }

      const token = jwt.sign(
        {id: user._id + ''},
        configDev.jwt.secret,
        {
          expiresIn: 60 * 60,
        },
      )

      return {
        email: user.email,
        name: user.name,
        token,
      }
    },
  },
  Mutation: {
    async signup(_, {input}, ctx) {
      const user = await ctx.userModel.create(input)

      const token = jwt.sign(
        {id: user._id + ''},
        configDev.jwt.secret,
        {
          expiresIn: 60 * 60,
        },
      )
      return {
        name: input.name,
        email: input.email,
        token,
      }
    },
  },
  User: {
    joinDate(user) {
      return Date.now().toString()
    },
  },
}
