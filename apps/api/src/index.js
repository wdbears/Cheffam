import { GraphQLServer } from "graphql-yoga"
import { makeExecutableSchema } from "graphql-tools"
import typeDefs from "./schemas"
import resolvers from "./resolvers"
// import initMongo from "./lib/initMongo"

const initApp = async () => {
  // const { db, con } = await initMongo()
  const context = {}
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  })
  /*
  const mocks = {
    Query: () => ({
      allUsers: () => new MockList(8)
    }),
    User: () => ({
      firstName: casual.first_name,
      lastName: casual.last_name,
      fudieRating: casual.double(3.75,5),
      chefRating: casual.double(3.75,5)
    }),
  }
  addMockFunctionsToSchema({ schema, mock });
  */
  const server = new GraphQLServer({ schema, context })
  // server.start(() => console.log("Server is running on http://localhost:4000"))

  server.start({ port: process.env.PORT || 443 }, () => {
    // const port = server.address().port
    console.log(`App listening on port`)
  })
}

initApp()
