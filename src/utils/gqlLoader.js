import {readFileSync} from 'fs'
import path from 'path'

export default (fileName) => {
  const filePath = path.join(__dirname, '../graphql', fileName)
  console.log({
    filePath,
  })
  return readFileSync(filePath, 'utf-8')
}
