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
  app: { display: "flex", minHeight: "100vh", flexDirection: "column" },
  navbar: { flex: 1 }
}

class App extends Component {
  render() {
    return (
      <div className={this.props.classes.app}>
        <Router>
          <>
            <header />
            {console.log(this.props.classes)}
            <main className={this.props.classes.navbar}>
              <ApolloProvider client={client}>
                <>
                  {" "}
                  {/* React fragment used for storing multiple components */}
                  <CssBaseline />
                  <Pages />
                </>
              </ApolloProvider>
            </main>
            <footer>
              <BottomNav className={this.props.classes.navbar} />
            </footer>
          </>
        </Router>
      </div>
    )
  }
}

export default withStyles(styles)(App)
