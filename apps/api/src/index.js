import { GraphQLServer } from "graphql-yoga"
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from "./schemas"
import resolvers from "./resolvers"
import initMongo from "./lib/initMongo"

const initApp = async () => {
  const { db, con } = await initMongo()
  const context = { db }
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  })

  const server = new GraphQLServer({ schema, context })
  server.start(() => console.log("Server is running on http://localhost:4000"))

}

initApp()