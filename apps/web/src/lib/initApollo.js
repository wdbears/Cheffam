import ApolloClient from "apollo-boost"

export default () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000"
  })

  return client
}
