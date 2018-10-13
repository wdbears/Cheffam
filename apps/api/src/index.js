import { GraphQLServer } from "graphql-yoga"
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from "./schemas"
import resolvers from "./resolvers"

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const server = new GraphQLServer({ schema })
server.start(() => console.log("Server is running on http://localhost:4000"))
