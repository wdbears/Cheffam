import React, { Component } from "react"
import "./App.css"
import { ApolloProvider } from "react-apollo"
import Router from "react-router-dom/BrowserRouter"
import initApollo from "../lib/initApollo"
import Pages from "../pages"
import CssBaseline from '@material-ui/core/CssBaseline';

const client = initApollo()

const appStyle = {
  paddingTop: '20px'
}

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <ApolloProvider client={client}>
          <Router>
            <>  {/* React fragment used for storing multiple components */}
            <CssBaseline />
            <Pages />
            </>
          </Router>
        </ApolloProvider>
      </div>
    )
  }
}

export default App
