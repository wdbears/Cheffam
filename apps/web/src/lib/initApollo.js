import ApolloClient from "apollo-boost"

export default () => {
  const client = new ApolloClient({
    uri: process.env.development
      ? "http://localhost:4000"
      : "https://cheffamapi-zrnqyqtpva.now.sh"
  })

  return client
}
