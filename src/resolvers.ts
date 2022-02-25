const users = [
  { id: '1', name: 'Daniel', email: "daniel@rockeseat.com.br" },
  { id: '2', name: 'Dani', email: "dani@rockeseat.com.br" },
]

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },
  Mutation: {
    CreateUser: () => users[0]
  }
}
