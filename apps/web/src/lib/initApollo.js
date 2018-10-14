import ApolloClient from "apollo-boost"

export default () => {
  const client = new ApolloClient({
    uri: "http://localhost4000/graphql"
  })

  return client
}
