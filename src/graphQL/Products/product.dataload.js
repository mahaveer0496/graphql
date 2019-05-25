import DataLoader from 'dataloader'
import productModel from './product.model'
import {keyBy} from 'lodash'

const productloader = () =>
  new DataLoader(async (ids) => {
    const products = await productModel.find({_id: {$in: ids}})
    const productsById = keyBy(products, '_id')
    return ids.map((id) => productsById[id])
  })
export default productloader
