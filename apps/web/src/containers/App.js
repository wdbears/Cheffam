import React, { Component } from "react"
import { ApolloProvider } from "react-apollo"
import { withStyles } from "@material-ui/core/styles"
import Router from "react-router-dom/BrowserRouter"
import initApollo from "../lib/initApollo"
import Pages from "../pages"
import CssBaseline from "@material-ui/core/CssBaseline"
import BottomNav from "../components/BottomNav"

const client = initApollo()

const styles = {
  app: {
    minHeight: "100%"
  },
  navbar: {
    position: "fixed",
    bottom: 0,
    width: "100%"
  },
  main: {
    marginBottom: "70px"
  }
}

class App extends Component {
  render() {
    return (
      <div className={this.props.classes.app}>
        <Router>
          <ApolloProvider client={client}>
            <main className={this.props.classes.main}>
              <CssBaseline />
              <Pages />
            </main>
            <footer className={this.props.classes.navbar}>
              <BottomNav />
            </footer>
          </ApolloProvider>
        </Router>
      </div>
    )
  }
}

export default withStyles(styles)(App)
