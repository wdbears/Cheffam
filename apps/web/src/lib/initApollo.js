import ApolloClient from "apollo-boost"

export default () => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql"
  })

  return client
}
