import mongoose from 'mongoose'

export default function connect(
  url = 'mongodb://localhost:27017/graphql',
){
  return mongoose.connect(
    url,
    {useNewUrlParser: true},
    (err) => {
      if (err) console.error(err)
      else console.log(`connected to mongoDB at ${url}`)
    },
  )
}
