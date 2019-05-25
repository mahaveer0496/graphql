import userModel from '../graphQL/User/user.model'

export default (id) => (userModel.findById(id) || {}).id
