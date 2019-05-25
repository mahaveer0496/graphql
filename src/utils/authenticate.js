import jwt from 'jsonwebtoken'
import dev from '../config/dev'
export default (token) => {
  try {
    const {id} = jwt.verify(token, dev.jwt.secret) || {}
    return id
  } catch (error) {
    throw new Error('unauthorized')
  }
}
