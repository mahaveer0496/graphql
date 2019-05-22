import mongoose from 'mongoose'

export default function connect(
  url = 'mongodb://localhost/graphql',
){
  return mongoose.connect(url, options, () => {
    console.log(`connected to mongoDB at ${url}`)
  })
}
