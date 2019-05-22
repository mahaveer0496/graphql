export default {
  Query: {
    login() {
      return {
        name: 'foo',
        email: 'foo@bar.com',
      }
    },
    signup() {
      return {
        name: 'foo',
        email: 'foo@bar.com',
      }
    },
  },
  User: {
    joinDate(user) {
      return Date.now().toString()
    },
  },
}
