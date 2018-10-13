import React, { Component } from "react"
import "./App.css"
import { ApolloProvider } from "react-apollo"
import Router from "react-router-dom/BrowserRouter"
import initApollo from "../lib/initApollo"
import Pages from "../pages"

const client = initApollo()

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Router>
            <>  {/* React fragment used for storing multiple components */}
            <Pages />
            </>
          </Router>
        </ApolloProvider>
      </div>
    )
  }
}

export default App
