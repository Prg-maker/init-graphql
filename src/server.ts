import { GraphQLServer } from 'graphql-yoga'
import path from 'path'
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
})

server.start()
