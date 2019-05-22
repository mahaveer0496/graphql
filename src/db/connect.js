import mongoose from 'mongoose'

export default function connect(
  url = 'mongodb://localhost:27017/graphql',
){
  return mongoose.connect(url, {useNewUrlParser: true}, () => {
    console.log(`connected to mongoDB at ${url}`)
  })
}
